import schema from "./schema";

const Inventories = new Mongo.Collection("inventories");

Inventories.attachSchema(schema);

export default Inventories;
