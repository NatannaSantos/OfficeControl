import joi from "joi";
var transactionSchema = joi.object({
    description: joi.string().required(),
    value: joi.number().required(),
    type: joi.string().valid("entrada", "saida").required()
});
export default transactionSchema;
