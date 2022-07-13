import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
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
import { fetchProductDetails, updateProduct } from "../../../api";
import validationSchema from "./validations";
import { useBasket } from "../../../contexts/BasketContext";

function ProductDetail() {
  const { product_id } = useParams();
  let navigate = useNavigate();

  const { items, setItems } = useBasket();

  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    ["admin:product", product_id],
    () => fetchProductDetails(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleSubmit = async (values, bag) => {
    message.loading({ content: "Loading...", key: "product_update" });

    try {
      await updateProduct(values, product_id);

      message.success({
        content: "Product successfully updated.",
        key: "product_update",
        duration: 2,
      });

      queryClient.refetchQueries("products");
      queryClient.refetchQueries(["product", product_id]);
      queryClient.refetchQueries("admin:products");
      queryClient.refetchQueries(["admin:product", product_id]);

      const updatedItems = items.map((item) => {
        if (item._id === product_id) {
          item.price = parseFloat(values.price);
          return item;
        }
        return item;
      });

      setItems(updatedItems);

      navigate("../products", { replace: true });
    } catch (e) {
      message.error("Product does not updated.");
    }
  };

  return (
    <div>
      <Heading as="h3">Edit</Heading>

      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          price: data.price,
          photos: data.photos,
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
                </FormControl>

                <Button
                  mt="5"
                  width="full"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Update
                </Button>
              </form>
            </Box>
          </Box>
        )}
      </Formik>
    </div>
  );
}

export default ProductDetail;
