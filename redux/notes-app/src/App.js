import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App">
      <Header />
      <Form />
      <NoteList />
    </Box>
  );
}

export default App;
