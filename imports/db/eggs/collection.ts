import schema from "./schema";

const Eggs = new Mongo.Collection("eggs");

Eggs.attachSchema(schema);

export default Eggs;
