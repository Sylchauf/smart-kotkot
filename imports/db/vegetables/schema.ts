import SimpleSchema from "simpl-schema";
import { Random } from "meteor/random";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";

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

export const bridge = new SimpleSchema2Bridge(schema.pick("name", "dataLink"));
