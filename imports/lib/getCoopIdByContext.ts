import { Meteor } from "meteor/meteor";

const getCoopIdByContext = function (): string {
  const coopId = Meteor.userId();

  const coopIdScoped = require("../../server/coopScope").coopScope.get();

  if (!coopId && !coopIdScoped) {
    console.trace();
    throw new Meteor.Error("NO_COOPID_SELECTED");
  }

  return coopIdScoped || coopId;
};

export default getCoopIdByContext;
