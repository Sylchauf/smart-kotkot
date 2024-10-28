import schema from "./schema";

const Plots = new Mongo.Collection("plots");

Plots.attachSchema(schema);

export default Plots;
