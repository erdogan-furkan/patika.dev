import { useEffect } from "react";
import { SimpleGrid, Box, Alert } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Note from "../Note";
import { selectNotes, selectSearchKey } from "../../redux/notes/notesSlice";

function NoteList() {
  const notes = useSelector(selectNotes);
  const searchKey = useSelector(selectSearchKey);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  if (!notes || notes.length < 1) {
    return (
      <Alert status="warning" mt="1rem">
        You don't have any notes.
      </Alert>
    );
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchKey) ||
      note.content.toLowerCase().includes(searchKey)
  );

  if (!filteredNotes || filteredNotes.length < 1) {
    return (
      <Alert status="warning" mt="1rem">
        No exact matches found.
      </Alert>
    );
  }

  return (
    <Box mt="1rem">
      <SimpleGrid columns={{ sm: 1, md: 3 }} gap={2}>
        {filteredNotes.map((note, i) => (
          <Note
            key={i}
            id={note.id}
            title={note.title}
            content={note.content}
            color={note.color}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default NoteList;
