import React from "react";
import { Meteor } from "meteor/meteor";
import { createRoot } from "react-dom/client";
import { App } from "/imports/ui/App";

Meteor.promise = (methodName, ...args) => {
  const startTime = Date.now();

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
  const root = createRoot(document.getElementById("react-target"));

  root.render(<App />);
});
