import { Box, Text } from "@chakra-ui/react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import {
  selectTotalMoney,
  selectPrevTotalMoney,
} from "../../redux/items/itemsSlice";

function MoneyBar() {
  const totalMoney = useSelector(selectTotalMoney);
  const prevTotalMoney = useSelector(selectPrevTotalMoney);

  return (
    <Box
      bgGradient="linear(180deg,#2ecc71,#1abc9c)"
      p="1rem"
      color="#fff"
      my="1rem"
      position="sticky"
      top="0"
      zIndex="1"
    >
      <Text fontSize="3xl" fontWeight="bold">
        <CountUp
          start={prevTotalMoney === totalMoney ? 0 : prevTotalMoney}
          end={totalMoney}
          duration={0.5}
          separator=","
          prefix="$ "
        />
      </Text>
    </Box>
  );
}

export default MoneyBar;
