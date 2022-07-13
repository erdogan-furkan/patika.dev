import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";
import { message } from "antd";
import { Formik, FieldArray } from "formik";
import { postProduct } from "../../../api";
import validationSchema from "./validations";

function NewProduct() {
  const queryClient = useQueryClient();

  const addMutation = useMutation(postProduct, {
    onSuccess: () => {
      queryClient.refetchQueries("products");
      queryClient.refetchQueries("admin:products");
    },
  });

  let navigate = useNavigate();

  const handleSubmit = async (values, bag) => {
    message.loading({ content: "Loading...", key: "product_add" });

    try {
      addMutation.mutate(values);

      message.success({
        content: "Product successfully added.",
        key: "product_add",
        duration: 2,
      });

      navigate("../products", { replace: true });
    } catch (e) {
      message.error("Product does not added.");
    }
  };

  return (
    <div>
      <Heading as="h3">New product</Heading>

      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          photos: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <Box>
            <Box my="5" textAlign="left">
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    disabled={isSubmitting}
                  />
                  {touched.title && errors.title && (
                    <Text color="red.500">{errors.title}</Text>
                  )}
                </FormControl>

                <FormControl mt="5">
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    disabled={isSubmitting}
                  />
                  {touched.description && errors.description && (
                    <Text color="red.500">{errors.description}</Text>
                  )}
                </FormControl>

                <FormControl mt="5">
                  <FormLabel>Price</FormLabel>
                  <Input
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    disabled={isSubmitting}
                  />
                  {touched.price && errors.price && (
                    <Text color="red.500">{errors.price}</Text>
                  )}
                </FormControl>

                <FormControl mt="5">
                  <FormLabel>Photos</FormLabel>
                  <FieldArray
                    name="photos"
                    render={(arrayHelpers) => (
                      <div>
                        {values.photos &&
                          values.photos.map((photo, i) => (
                            <Box display="flex" key={i}>
                              <Input
                                name={`photos.${i}`}
                                value={photo}
                                disabled={isSubmitting}
                                onChange={handleChange}
                                mb="3"
                              />

                              <Button
                                ml="4"
                                type="button"
                                colorScheme="red"
                                onClick={() => arrayHelpers.remove(i)}
                                disabled={isSubmitting}
                              >
                                Remove
                              </Button>
                            </Box>
                          ))}
                        <Button
                          onClick={() => arrayHelpers.push("")}
                          disabled={isSubmitting}
                        >
                          Add a new photo
                        </Button>
                      </div>
                    )}
                  />
                  {touched.photos && errors.photos && (
                    <Text color="red.500">{errors.photos}</Text>
                  )}
                </FormControl>

                <Button
                  mt="5"
                  width="full"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Save
                </Button>
              </form>
            </Box>
          </Box>
        )}
      </Formik>
    </div>
  );
}

export default NewProduct;
