import schema from "./schema";

const Vegetables = new Mongo.Collection("vegetables");

Vegetables.attachSchema(schema);

export default Vegetables;
