import { Meteor } from "meteor/meteor";
import getUserIdByContext from "./getUserIdByContext";

const secure = (collection) => {
  const yes = {
    insert: () => true,
    update: () => true,
    remove: () => true,
  };
  const no = {
    insert: () => false,
    update: () => false,
    remove: () => false,
  };

  collection.allow(yes);
  collection.deny(no);

  collection.isSecure = true;

  const alterSelector = function (userId, selector = {}) {
    selector.userId = { $in: ["all", getUserIdByContext()] };
    selector.deletedAt = selector.deletedAt || { $exists: false };
  };

  if (Meteor.isServer) {
    collection.before.find(function (userId, selector, options) {
      alterSelector(userId, selector, options);
    });

    collection.before.findOne(function (userId, selector, options) {
      alterSelector(userId, selector, options);
    });

    collection.before.update(function (userId, doc, fieldNames, modifier) {
      const _userId = getUserIdByContext();
      modifier.$set = modifier.$set || {};
      delete modifier.$set.userId;
      modifier.$set.updatedAt = new Date();

      // Prevent modification on another team
      if (doc.userId !== _userId) modifier.$set = {};
    });

    collection.before.remove(function (userId, doc) {
      const _userId = getUserIdByContext();

      if (_userId === doc.userId)
        collection.update(doc._id, { $set: { deletedAt: new Date() } });

      return false;
    });

    collection.before.insert(function (userId, doc) {
      doc.createdAt = new Date();

      // No connection, no special usecase, so we deny the database request
      doc.userId = getUserIdByContext() || null;
    });
  }

  return collection;
};

export default secure;
