import schema from "./schema";

const ItemCategories = new Mongo.Collection("ItemCategories");

ItemCategories.attachSchema(schema);

export default ItemCategories;
