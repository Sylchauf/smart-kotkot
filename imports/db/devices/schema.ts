import SimpleSchema from "simpl-schema";

import sharedSchemas from "../sharedSchemas";

const schema = new SimpleSchema({
  _id: String,
  userId: String,
  name: { type: String, optional: true },
  lastAction: { type: Date, optional: true },
}).extend(sharedSchemas);

export default schema;
