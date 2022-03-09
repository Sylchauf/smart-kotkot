import { Meteor } from "meteor/meteor";

const getCoopIdByContext = function (): string {
  const coopId =
    DDP?._CurrentMethodInvocation?.get()?.connection?.coopId ||
    DDP?._CurrentPublicationInvocation?.get()?.connection?.coopId;

  const coopIdScoped = require("../../server/coopScope").coopScope.get();

  if (!coopId && !coopIdScoped) {
    console.trace();
    throw new Meteor.Error("NO_TEAMID_SELECTED");
  }

  return coopIdScoped || coopId;
};

export default getCoopIdByContext;
