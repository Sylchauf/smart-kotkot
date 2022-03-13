import { userScope } from "../../server/userScope";
import { Restivus } from "meteor/maka:rest";

const noop = (item) => item;
const noopSelector = (type, item) => item;

type Item = Record<string, any>;
type Selector = Record<string, any>;

type Subscribe = {
  onStop?: () => void;
};

type Options = {
  beforeCreate?: (Item) => Promise<Item>;
  beforeUpdate?: (Item) => Promise<Item>;
  beforeDelete?: (Item) => void;
  afterCreate?: (ItemInserted, Item) => void;
  afterRead?: (Item) => Item;
  afterDelete?: (Item) => void;
  afterUpdate?: (ItemInserted, Item) => void;
  alterSelector?: (TypeSelector, Selector) => Selector;
  subscribe?: Subscribe;
};

// Global API configuration
// @ts-ignore
const Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true,
});

const parseSelector = (_selector) => {
  let selector;

  try {
    selector = JSON.parse(_selector);
  } catch (error) {
    selector = _selector;
  }

  return selector;
};

const catchRequest = (cb) => {
  return new Promise((resolve) => {
    try {
      const result = cb();

      resolve(result);
    } catch (error) {
      resolve({
        statusCode: error.error,
        body: error.message,
      });
    }
  });
};

const crudMaker = (
  name: string,
  collection: Mongo.Collection<any>,
  options: Options = {}
) => {
  const beforeCreate = options.beforeCreate || noop;
  const beforeUpdate = options.beforeUpdate || noop;
  const beforeDelete = options.beforeDelete || noop;
  const afterRead = options.afterRead || noop;
  const afterDelete = options.afterDelete || noop;
  const afterUpdate = options.afterUpdate || noop;
  const afterCreate = options.afterCreate || noop;
  const alterSelector = options.alterSelector || noopSelector;
  const onStopSubscribe = options.subscribe?.onStop || noop;

  const methods = {
    [`${name}.create`]: async function (item: Item) {
      const itemAltered = await beforeCreate({ ...item });

      const res = collection.insert(itemAltered);

      const documentInserted = collection.findOne(res);

      afterCreate(documentInserted, item);

      return res;
    },

    [`${name}.read`]: function ({ selector = {}, fields = undefined } = {}) {
      const _selector = alterSelector("read", selector);

      return collection.find(_selector, { fields }).fetch().map(afterRead);
    },

    [`${name}.update`]: async function (selector, item) {
      const _selector = alterSelector("update", selector);

      const oldItem = collection.findOne(_selector);

      const itemAltered = await beforeUpdate({ ...item });

      const res = collection.update(_selector, { $set: itemAltered });

      const documentUpdated = collection.findOne(_selector);

      afterUpdate(documentUpdated, oldItem);

      return res;
    },

    [`${name}.delete`]: async function (selector) {
      const _selector = alterSelector("delete", selector);

      const document = collection.findOne(_selector);

      await beforeDelete(document);

      if (!document) throw new Meteor.Error(404, "NOT_FOUND");

      const res = collection.update(_selector, {
        $set: { deletedAt: new Date(), deletedBy: this.userId },
      });

      afterDelete(document);

      return res;
    },

    [`${name}.count`]: function ({ selector = {} } = {}) {
      const _selector = alterSelector("count", selector);

      return collection
        .find({ deletedAt: { $exists: false }, ..._selector })
        .count();
    },
  };

  Meteor.methods(methods);

  Meteor.publish(`${name}.subscribe`, function (selector, fields) {
    const _selector = alterSelector("subscribe", selector);

    const cursor = collection.find(_selector, { fields });

    this.onStop(onStopSubscribe);

    return [cursor];
  });

  Api.addRoute(
    name,
    { authRequired: true },
    {
      get: async function () {
        return catchRequest(() => {
          const selector = parseSelector(this.queryParams.selector);

          return new Promise((resolve, reject) => {
            userScope.withValue(this.userId, function () {
              Meteor.call(`${name}.read`, { selector }, (err, res) => {
                if (err) reject(err);
                resolve(res);
              });
            });
          });
        });
      },
      post: async function () {
        return catchRequest(() => {
          const selector = parseSelector(this.queryParams.selector);

          return new Promise((resolve, reject) => {
            userScope.withValue(this.userId, function () {
              Meteor.call(`${name}.create`, { selector }, (err, res) => {
                if (err) reject(err);
                resolve(res);
              });
            });
          });
        });
      },
      put: async function () {
        return catchRequest(() => {
          const selector = parseSelector(this.queryParams.selector);

          return new Promise((resolve, reject) => {
            userScope.withValue(this.userId, function () {
              Meteor.call(`${name}.update`, { selector }, (err, res) => {
                if (err) reject(err);
                resolve(res);
              });
            });
          });
        });
      },
      delete: async function () {
        return catchRequest(() => {
          const selector = parseSelector(this.queryParams.selector);

          return new Promise((resolve, reject) => {
            userScope.withValue(this.userId, function () {
              Meteor.call(`${name}.remove`, { selector }, (err, res) => {
                if (err) reject(err);
                resolve(res);
              });
            });
          });
        });
      },
    }
  );
};

export default crudMaker;
