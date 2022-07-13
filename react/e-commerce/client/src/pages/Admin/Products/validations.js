import * as yup from "yup";

const newProductScheme = yup.object().shape({
  title: yup.string().required("You have to provide a title."),
  description: yup
    .string()
    .min(10, "Please provide a description with min 10 characters.")
    .required("You have to provide a description."),
  price: yup.number().required("You have to provide a price."),
  photos: yup
    .array()
    .of(yup.string().required("You have to provide at least 1 photo"))
    .min(1, "You have to provide at least 1 photo")
    .required(),
});

export default newProductScheme;
