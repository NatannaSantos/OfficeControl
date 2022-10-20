import Joi from "joi";
var contactSchema = Joi.object({
    name: Joi.string().required(),
    Tel: Joi.string().pattern(/^([0-9]{2})[0-9]{8,9}$/),
    email: Joi.string().email(),
    adress: Joi.string()
});
export default contactSchema;
