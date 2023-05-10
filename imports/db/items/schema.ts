import SimpleSchema from "simpl-schema";
import { Random } from "meteor/random";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";
import SelectField from "../../uniforms/SelectField";

import sharedSchemas from "../sharedSchemas";

SimpleSchema.extendOptions(["uniforms"]);

const schema = new SimpleSchema({
  _id: {
    type: String,
    defaultValue: Random.id(),
  },
  name: String,
  comment: { type: String, optional: true },
  itemCategoryId: {
    type: String,
    // @ts-ignore
    uniforms: {
      component: SelectField,
      options: async () => {
        const result = await Meteor.promise("itemCategories.read");
        return result.map((i) => ({ label: i.name, value: i._id }));
      },
    },
  },
  inventoryId: { type: String },
  expireAt: { type: Date, optional: true },
}).extend(sharedSchemas);

export default schema;

export const bridge = new SimpleSchema2Bridge(
  schema.pick("name", "comment", "itemCategoryId", "inventoryId", "expireAt")
);
