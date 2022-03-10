import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "/imports/ui/App";

Meteor.promise = (methodName, ...args) => {
  return new Promise((resolve, reject) => {
    Meteor.call(methodName, ...args, (error, result) => {
      if (error) {
        console.error(methodName, error);
        return reject(error);
      }
      return resolve(result);
    });
  });
};

Meteor.startup(() => {
  render(<App />, document.getElementById("react-target"));
});
