import React from "react";
import moment from "moment";
import { Box, Image, Button, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";
import { useAuth } from "../../contexts/AuthContext";

function Card({ item }) {
  const { addToBasket, items } = useBasket();
  const { loggedIn } = useAuth();
  const isInclude = items.find((basketItem) => basketItem._id === item._id);

  return (
    <div>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to={`/product/${item._id}`}>
          <Image src={item.photos[0]} alt="Product" loading="lazy" />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {moment(item.createdAt).format("DD/MM/YYYY")}
            </Box>

            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {item.title}
            </Box>

            <Badge>{item.price} ₺</Badge>
          </Box>
        </Link>

        {loggedIn && (
          <Button
            colorScheme={isInclude ? "red" : "green"}
            variant="ghost"
            onClick={() => addToBasket(item, isInclude)}
          >
            {isInclude ? "Remove from basket" : "Add to basket"}
          </Button>
        )}
      </Box>
    </div>
  );
}

export default Card;
