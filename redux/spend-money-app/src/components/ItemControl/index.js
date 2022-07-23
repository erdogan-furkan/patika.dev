import { useState, useEffect } from "react";
import {
  Flex,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeItemAmount,
  selectTotalMoney,
} from "../../redux/items/itemsSlice";

function ItemControl({ id, price }) {
  const dispatch = useDispatch();
  const totalMoney = useSelector(selectTotalMoney);
  const [amount, setAmount] = useState(0);

  const handleChange = (value) => {
    if (isNaN(value)) {
      value = 0;
    }

    if (value > amount + Math.floor(totalMoney / price)) {
      value = amount + Math.floor(totalMoney / price);
    }

    setAmount(Number(value));
  };

  useEffect(() => {
    dispatch(changeItemAmount({ id, amount }));
  }, [amount, id, dispatch]);

  return (
    <Flex alignItems="center" justifyContent="center">
      <Button
        bgGradient="linear(180deg,#f53b82,#f53b57)"
        colorScheme="red"
        px="2rem"
        onClick={() => setAmount(Number(amount - 1))}
        disabled={amount === 0}
      >
        Sell
      </Button>

      <NumberInput
        maxW={24}
        min={0}
        max={amount + Math.floor(totalMoney / price)}
        mx="1rem"
        value={amount}
        onChange={handleChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Button
        bgGradient="linear(180deg,#2ecc71,#1abc9c)"
        colorScheme="green"
        px="2rem"
        onClick={() => setAmount(Number(amount + 1))}
        disabled={price > totalMoney}
      >
        Buy
      </Button>
    </Flex>
  );
}

export default ItemControl;
