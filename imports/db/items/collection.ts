import schema from "./schema";

const Items = new Mongo.Collection("items");

Items.attachSchema(schema);

export default Items;
