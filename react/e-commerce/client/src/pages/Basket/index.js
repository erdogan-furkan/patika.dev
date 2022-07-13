import { useRef, useState } from "react";
import {
  Alert,
  Button,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";
import { postOrder } from "../../api";

const defaultAlertValues = { message: "", status: "" };

function Basket() {
  const { items, addToBasket, emptyBasket } = useBasket();
  const [address, setAddress] = useState("");
  const [alert, setAlert] = useState(defaultAlertValues);

  const handleSubmitForm = async () => {
    const itemIds = items.map((item) => item._id);
    const input = {
      address,
      items: JSON.stringify(itemIds),
    };

    try {
      const response = await postOrder(input);

      emptyBasket();
      onClose();
      setAlert({
        message: "Order has been created successfully.",
        status: "success",
      });
    } catch (e) {
      onClose();
      setAlert({
        message: `Order could not be created: ${e.response.data.message}`,
        status: "error",
      });
    }
  };

  const totalPrice = items.reduce((acc, obj) => acc + obj.price, 0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  return (
    <div>
      {items.length < 1 && (
        <Alert status="warning">You have not any items in your basket.</Alert>
      )}

      {alert.message && (
        <Alert my="5" status={alert.status}>
          {alert.message}
        </Alert>
      )}

      {items.length >= 1 && (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th></Th>
                <Th></Th>
                <Th isNumeric>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item) => (
                <Tr key={item._id}>
                  <Td>
                    <Link to={`/product/${item._id}`}>{item.title}</Link>
                  </Td>
                  <Td>
                    <Image
                      src={item.photos[0]}
                      htmlWidth="200"
                      loading="lazy"
                    />
                  </Td>
                  <Td verticalAlign="middle">
                    <Button
                      colorScheme="red"
                      variant="ghost"
                      onClick={() => {
                        addToBasket(item, true);
                        setAlert(defaultAlertValues);
                      }}
                    >
                      Remove from basket
                    </Button>
                  </Td>
                  <Td isNumeric>{item.price} ₺</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Total ({items.length})</Th>
                <Th></Th>
                <Th></Th>
                <Th isNumeric>
                  {totalPrice} ₺ <br />
                  <br />
                  <Button colorScheme="green" width="full" onClick={onOpen}>
                    Order
                  </Button>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      )}

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create an order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Textarea
                ref={initialRef}
                placeholder="Your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmitForm}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Basket;
