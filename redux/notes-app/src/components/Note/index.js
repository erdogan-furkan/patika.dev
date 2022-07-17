import {
  Box,
  Flex,
  Heading,
  Text,
  CloseButton,
  ScaleFade,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeANote } from "../../redux/notes/notesSlice";

function Note({ id, title, content, color }) {
  const dispatch = useDispatch();

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box
        textAlign="left"
        p="1rem"
        borderRadius="0.375rem"
        backgroundColor={color}
        height="284px"
        width="100%"
        overflow="auto"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom="0.5rem"
        >
          <Heading as="h2" size="sm">
            {title}
          </Heading>

          <CloseButton size="sm" onClick={() => dispatch(removeANote(id))} />
        </Flex>

        <Text textAlign="justify" overflow="auto">
          {content}
        </Text>
      </Box>
    </ScaleFade>
  );
}

export default Note;
