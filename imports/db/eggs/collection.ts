import secure from "../../lib/secure";
import schema from "./schema";

const Eggs = new Mongo.Collection("eggs");

Eggs.attachSchema(schema);

export default secure(Eggs);
