import { useEffect } from "react";
import { Flex, Box, Text, Divider } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectItemsBuyed, setTotalMoney } from "../../redux/items/itemsSlice";

function ReceiptBar() {
  const dispatch = useDispatch();
  const items = useSelector(selectItemsBuyed);
  const totalExpense =
    items.length > 0
      ? items.reduce((total, item) => total + item.amount * item.price, 0)
      : 0;

  const formatNumber = (number) => {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(2) + "b";
    }

    if (number >= 1000000) {
      return (number / 1000000).toFixed(2) + "m";
    }

    if (number >= 1000) {
      return (number / 1000).toFixed(2) + "k";
    }

    return number;
  };

  useEffect(() => {
    dispatch(setTotalMoney(totalExpense));
  }, [totalExpense, dispatch]);

  if (totalExpense && totalExpense > 0) {
    return (
      <Box bgColor="#fff">
        <Flex
          flexDirection="column"
          alignItems="center"
          maxWidth="350px"
          mx="auto"
          mt="1rem"
          p="1rem"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Your Receipt
          </Text>

          <Box mb="1rem" w="full">
            {items.map((item) => (
              <Flex w="full" key={item.id}>
                <Text w="full" fontWeight="semibold" textAlign="left">
                  {item.name}
                </Text>

                <Flex w="20rem" justifyContent="space-between">
                  <Text fontWeight="semibold" textAlign="left">
                    x{formatNumber(item.amount)}
                  </Text>

                  <Text fontWeight="semibold" color="#24c486">
                    ${formatNumber(item.amount * item.price)}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Box>

          <Divider borderColor="#000" />

          <Flex justifyContent="space-between" w="full">
            <Text fontWeight="semibold">TOTAL</Text>
            <Text fontWeight="semibold" color="#24c486">
              ${totalExpense}
            </Text>
          </Flex>
        </Flex>
      </Box>
    );
  }
}

export default ReceiptBar;
