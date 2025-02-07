import schema from "./schema";

const Tasks = new Mongo.Collection("tasks");

Tasks.attachSchema(schema);

export default Tasks;
