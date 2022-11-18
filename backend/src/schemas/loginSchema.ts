import * as Joi from 'joi';

const createLoginSchema = Joi.object({
  username: Joi.string().required().min(3).messages({
    'any.required': 'Some required fields are missing',
  }),
  password: Joi.string().required().min(8).messages({
    'any.required': 'Some required fields are missing',
  }),
});

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'any.required': 'Some required fields are missing',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Some required fields are missing',
  }),
});

export { loginSchema, createLoginSchema };
