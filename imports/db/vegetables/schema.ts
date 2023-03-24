import SimpleSchema from "simpl-schema";
import { Random } from "meteor/random";

import sharedSchemas, { LocalizedString } from "../sharedSchemas";

const schema = new SimpleSchema({
  _id: {
    type: String,
    uniforms: {
      component: () => null,
    },
    defaultValue: Random.id(),
  },
  name: LocalizedString,
  imageUrl: { type: String, optional: true },
}).extend(sharedSchemas);

export default schema;
