'use strict'
const joi = require('joi')

module.exports = {
  validate: (schema, options) => {
    options = options || {}
    return async (ctx, next) => {
      for (const key in schema) {
        for (const k in schema[key]) {
          const { error } = joi.validate(
            ctx.request[key][k],
            schema[key][k],
            options
          )
          if (error) {
            const err = error.details[0]

            return ctx.throwJson(400, {
              err: err.message,
              path: err.path
            })
          }
        }
      }
      await next()
    }
  },
  Joi: joi
}
