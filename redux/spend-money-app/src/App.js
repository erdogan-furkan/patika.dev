import "./App.css";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import MoneyBar from "./components/MoneyBar";
import ItemList from "./components/ItemList";
import ReceiptBar from "./components/ReceiptBar";

function App() {
  return (
    <Box bgColor="#f1f2f6" py="2rem">
      <Container className="App" maxW="container.lg" p={0}>
        <Header />
        <MoneyBar />
        <ItemList />
        <ReceiptBar />
      </Container>
    </Box>
  );
}

export default App;
