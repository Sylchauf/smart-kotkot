import SimpleSchema from "simpl-schema";

const sharedSchema = new SimpleSchema({
  deletedAt: {
    type: Date,
    optional: true,
  },
  deletedBy: {
    type: String,
    optional: true,
  },
  userId: {
    type: String,
    optional: true,
  },
  updatedAt: {
    type: Date,
    optional: true,
  },
  createdAt: {
    type: Date,
    optional: true,
  },
  createdBy: {
    type: String,
    optional: true,
  },
});
export default sharedSchema;
