import React from "react";
import { Flex, Image, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      bgColor="#fff"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="2rem"
    >
      <Image
        src="https://neal.fun/spend/billgates.jpg"
        borderRadius="full"
        boxSize="150px"
        mb="2rem"
      />

      <Heading as="h1" size="lg">
        Spend Bill Gates' Money
      </Heading>
    </Flex>
  );
}

export default Header;
