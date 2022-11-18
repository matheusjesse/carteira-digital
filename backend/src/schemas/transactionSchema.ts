import * as Joi from 'joi';

const transactionSchema = Joi.object({
  favorecedor: Joi.string().required().min(3).messages({
    'any.required': 'Some required fields are missing',
  }),
  beneficiado: Joi.string().required().min(3).messages({
    'any.required': 'Some required fields are missing',
  }),
  value: Joi.number().required().messages({
    'any.required': 'Some required fields are missing',
  }),
});

const transactionFilterSchema = Joi.object({
  date: Joi.valid('recent', 'old', null).required().messages({
    'any.required': 'Some required fields are missing',
  }),
  filter: Joi.valid('cashin', 'cashout', null).required().messages({
    'any.required': 'Some required fields are missing',
  }),
})

export { transactionSchema, transactionFilterSchema };
