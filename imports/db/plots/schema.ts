import SimpleSchema from "simpl-schema";
import { Random } from "meteor/random";

import sharedSchemas from "../sharedSchemas";

const schema = new SimpleSchema({
  _id: {
    type: String,
    uniforms: {
      component: () => null,
    },
    defaultValue: Random.id(),
  },
  name: String,
  width: Number,
  height: Number,
  shapes: Array,
  "shapes.$": {
    type: Object,
    blackbox: true,
  },
}).extend(sharedSchemas);

export default schema;
