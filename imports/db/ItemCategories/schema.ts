import SimpleSchema from "simpl-schema";
import { Random } from "meteor/random";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";

import sharedSchemas from "../sharedSchemas";

const schema = new SimpleSchema({
  _id: {
    type: String,
    defaultValue: Random.id(),
  },
  name: String,
}).extend(sharedSchemas);

export default schema;

export const bridge = new SimpleSchema2Bridge(schema.pick("name"));
