import schema from "./schema";

const Inventory = new Mongo.Collection("inventory");

Inventory.attachSchema(schema);

export default Inventory;
