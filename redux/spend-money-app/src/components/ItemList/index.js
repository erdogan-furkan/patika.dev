import React from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/items/itemsSlice";
import Item from "../Item";

function ItemList() {
  const items = useSelector(selectItems);

  return (
    <SimpleGrid columns={[1, 3]} spacing="1rem">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </SimpleGrid>
  );
}

export default ItemList;
