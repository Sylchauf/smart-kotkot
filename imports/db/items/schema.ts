import SimpleSchema from "simpl-schema";
import { Random } from "meteor/random";

import sharedSchemas from "../sharedSchemas";

const schema = new SimpleSchema({
  _id: {
    type: String,
    defaultValue: Random.id(),
  },
  name: String,
  comment: { type: String, optional: true },
  expireAt: { type: Date, optional: true },
}).extend(sharedSchemas);

export default schema;
