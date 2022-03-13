import { Meteor } from "meteor/meteor";

const getUserIdByContext = function (): string {
  let userId = require("../../server/userScope").userScope.get();

  if (userId) return userId;
  else return Meteor.userId();
};

export default getUserIdByContext;
