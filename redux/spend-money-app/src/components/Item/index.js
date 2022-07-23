import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import ItemControl from "../ItemControl";

function Item({ item }) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgColor="#fff"
      p="1rem"
    >
      <Image src={item.image} h="120px" />
      <Text fontSize="xl" fontWeight="bold">
        {item.name}
      </Text>
      <Text color="#24c486" fontSize="lg" fontWeight="bold" mb="1rem">
        ${item.price}
      </Text>
      <ItemControl id={item.id} price={item.price} />
    </Flex>
  );
}

export default React.memo(Item);
