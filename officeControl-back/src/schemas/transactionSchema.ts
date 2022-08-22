import joi from "joi";

const transactionSchema = joi.object({
    description: joi.string().required(),
    value: joi.number().required(),
    type: joi.string().valid("entrada", "saida").required()   
})

export default transactionSchema;