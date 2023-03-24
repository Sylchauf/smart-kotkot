import secure from "../../lib/secure";
import schema from "./schema";

const Plants = new Mongo.Collection("plants");

Plants.attachSchema(schema);

export default secure(Plants);
