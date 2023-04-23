import SimpleSchema from "simpl-schema";
import { Random } from "meteor/random";

import sharedSchemas, { LocalizedString } from "../sharedSchemas";

const schema = new SimpleSchema({
  _id: {
    type: String,
    defaultValue: Random.id(),
  },
  name: LocalizedString,
  dataLink: { type: String, optional: true },
}).extend(sharedSchemas);

export default schema;
