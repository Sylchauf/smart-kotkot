import SimpleSchema from "simpl-schema";
import { Random } from "meteor/random";

import sharedSchemas from "../sharedSchemas";

const schema = new SimpleSchema({
  _id: {
    type: String,
    defaultValue: Random.id(),
  },
  startDate: { type: Date, optional: true },
  endDate: { type: Date, optional: true },
  title: String,
  description: { type: String, optional: true },
  status: {
    type: String,
    allowedValues: ["pending", "inProgress", "done"],
    defaultValue: "pending",
  },
  priority: {
    type: Number,
    min: 1,
    max: 10,
    defaultValue: 5,
  },
}).extend(sharedSchemas);

export default schema;
