import * as Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required().min(3).messages({
    'any.required': 'Some required fields are missing',
  }),
  password: Joi.string().required().min(8).messages({
    'any.required': 'Some required fields are missing',
  }),
});

export default loginSchema;
