import { useState, useEffect } from "react";
import {
  Textarea,
  Input,
  Box,
  Flex,
  ButtonGroup,
  Button,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addANewNote,
  changeActiveColor,
  selectActiveColor,
} from "../../redux/notes/notesSlice";

const colorPalette = [
  "pink.300",
  "purple.300",
  "yellow.300",
  "cyan.300",
  "green.300",
];

function Form() {
  const dispatch = useDispatch();
  const toast = useToast();
  const showAlert = (title) =>
    toast({
      title,
      status: "error",
      duration: 3000,
      isClosable: true,
    });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const activeColor = useSelector(selectActiveColor);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || title.trim() === "") {
      return showAlert("Please provide a title.");
    } else if (!content || content.trim() === "") {
      return showAlert("Please provide a content.");
    }

    dispatch(addANewNote({ title, content, color: activeColor }));

    setTitle("");
    setContent("");
  };

  useEffect(() => {
    localStorage.setItem("activeColor", activeColor);
  }, [activeColor]);

  return (
    <Box mt="1rem">
      <form onSubmit={handleSubmit}>
        <Box
          bgColor="#fff"
          paddingBottom="0.5rem"
          borderRadius="0.375rem"
          borderWidth="2px"
          borderColor={isFocused ? activeColor : null}
          transition="0.2s"
        >
          <Input
            placeholder="Note title"
            border="none"
            focusBorderColor="none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <hr />

          <Textarea
            placeholder="Enter your note here..."
            resize="none"
            border="none"
            focusBorderColor="none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <Flex justifyContent="space-between" px="1rem">
            <ButtonGroup gap="0.5" alignItems="center">
              {colorPalette.map((color, i) => (
                <IconButton
                  key={i}
                  backgroundColor={color}
                  borderRadius="50%"
                  size="sm"
                  icon={color === activeColor ? <CheckIcon /> : null}
                  onClick={() => dispatch(changeActiveColor(color))}
                />
              ))}
            </ButtonGroup>

            <Button
              type="submit"
              colorScheme={activeColor.split(".")[0]}
              variant="ghost"
            >
              Add
            </Button>
          </Flex>
        </Box>
      </form>
    </Box>
  );
}

export default Form;
