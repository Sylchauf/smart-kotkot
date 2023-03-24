import secure from "../../lib/secure";
import schema from "./schema";

const Plots = new Mongo.Collection("plots");

Plots.attachSchema(schema);

export default secure(Plots);
