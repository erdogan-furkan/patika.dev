import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email.")
    .required("You have to provide an email."),
  password: yup
    .string()
    .min(5, "Please provide a password with min 5 characters.")
    .required("You have to provide a password."),
});

export default validations;
