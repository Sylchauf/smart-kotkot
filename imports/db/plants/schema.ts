import SimpleSchema from "simpl-schema";
import { Random } from "meteor/random";

import sharedSchemas from "../sharedSchemas";

const schema = new SimpleSchema({
  _id: {
    type: String,
    defaultValue: Random.id(),
  },
  vegetableId: String,
  comment: { type: String, optional: true },
  events: { type: Array, defaultValue: [] },
  shapeId: { type: String },
  width: { type: Number, defaultValue: 50 },
  height: { type: Number, defaultValue: 50 },
  x: { type: Number, defaultValue: 0 },
  y: { type: Number, defaultValue: 0 },
  "events.$": Object,
  "events.$._id": String,
  "events.$.type": String,
  "events.$.date": Date,
  "events.$.comment": { type: String, optional: true },
}).extend(sharedSchemas);

export default schema;
