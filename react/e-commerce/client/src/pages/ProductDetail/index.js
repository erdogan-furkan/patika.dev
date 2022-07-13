import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";
import { fetchProductDetails } from "../../api";
import { useBasket } from "../../contexts/BasketContext";
import { useAuth } from "../../contexts/AuthContext";

function ProductDetail() {
  const { product_id } = useParams();
  const { addToBasket, items } = useBasket();
  const { loggedIn } = useAuth();

  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fetchProductDetails(product_id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const images = data.photos.map((url) => ({ original: url }));
  const isInclude = items.find((item) => item._id === data._id);

  return (
    <div>
      {loggedIn && (
        <Button
          colorScheme={isInclude ? "red" : "green"}
          variant="ghost"
          onClick={() => addToBasket(data, isInclude)}
        >
          {isInclude ? "Remove from basket" : "Add to basket"}
        </Button>
      )}

      <Text as="h2" fontSize="2xl" mt="5">
        {data.title}
      </Text>

      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>

      <p>{data.description}</p>

      <Box m="10px">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetail;
