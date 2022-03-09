import { Meteor } from "meteor/meteor";
import getCoopIdByContext from "./getCoopIdByContext";

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

  const alterSelector = function (userId, selector = {}, options) {
    selector.coopId = { $in: ["all", getCoopIdByContext()] };
  };

  if (Meteor.isServer) {
    collection.before.find(function (userId, selector, options) {
      alterSelector(userId, selector, options);
    });

    collection.before.findOne(function (userId, selector, options) {
      alterSelector(userId, selector, options);
    });

    collection.before.update(function (userId, doc, fieldNames, modifier) {
      const coopId = getCoopIdByContext();
      modifier.$set = modifier.$set || {};
      delete modifier.$set.coopId;
      modifier.$set.updatedAt = new Date();

      // Prevent modification on another team
      if (doc.coopId !== coopId) modifier.$set = {};
    });

    collection.before.remove(function (userId, doc) {
      const coopId = getCoopIdByContext();

      if (coopId === doc.coopId)
        collection.update(doc._id, { $set: { deletedAt: new Date() } });

      return false;
    });

    collection.before.insert(function (userId, doc) {
      doc.createdAt = new Date();

      // No connection, no special usecase, so we deny the database request
      doc.coopId = getCoopIdByContext() || null;
    });
  }

  return collection;
};

export default secure;
