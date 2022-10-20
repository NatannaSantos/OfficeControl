import Joi from "joi";
export var companySchema = Joi.object({
    companyName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});
export var companySchemaLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});
