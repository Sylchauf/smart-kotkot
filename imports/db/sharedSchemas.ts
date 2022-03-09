import SimpleSchema from 'simpl-schema'

const sharedSchema = new SimpleSchema({
  deletedAt: {
    type: Date,
    uniforms: {
      component: () => null,
    },
    optional: true,
  },
  deletedBy: {
    type: String,
    uniforms: {
      component: () => null,
    },
    optional: true,
  },
  coopId: {
    type: String,
    uniforms: {
      component: () => null,
    },
    optional: true,
  },
  updatedAt: {
    type: Date,
    optional: true,
    uniforms: {
      component: () => null,
    },
  },
  createdAt: {
    type: Date,
    optional: true,
    uniforms: {
      component: () => null,
    },
  },
  createdBy: {
    type: String,
    uniforms: {
      component: () => null,
    },
    optional: true,
  },
})
export default sharedSchema
