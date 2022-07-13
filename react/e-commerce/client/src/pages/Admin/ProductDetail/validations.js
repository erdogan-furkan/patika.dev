import * as yup from "yup";

const editScheme = yup.object().shape({
  title: yup.string().required("You have to provide a title."),
  description: yup
    .string()
    .min(10, "Please provide a description with min 10 characters.")
    .required("You have to provide a description."),
  price: yup.number().required("You have to provide a price."),
});

export default editScheme;
