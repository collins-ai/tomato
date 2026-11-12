import Joi from "joi"

const productSchema = Joi.object({
    title: Joi.string()
        .required(),

    description: Joi.string()
        .required(),

    category: Joi.string()
        .required(),

    price: Joi.number()
        .min(0)
        .positive()
        .required(),

    image: Joi.object({
        url: Joi.string()
            .required(),

        publicId: Joi.string()
            .required()

    }).required()
})

export default productSchema