import { Heading, Highlight, Input, Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveColor,
  selectSearchKey,
  setSearchKey,
} from "../../redux/notes/notesSlice";

function Header() {
  const dispatch = useDispatch();
  const activeColor = useSelector(selectActiveColor);
  const searchKey = useSelector(selectSearchKey);

  return (
    <Box>
      <Heading mb="1rem">
        <Highlight
          query="Notes App"
          styles={{
            pl: "3",
            pb: "2",
            rounded: "75% 25%",
            bg: activeColor,
            color: "#fff",
            transition: "0.3s",
          }}
        >
          Notes App
        </Highlight>
      </Heading>

      <Input
        placeholder="Type to search..."
        bgColor="#fff"
        focusBorderColor={activeColor}
        value={searchKey}
        onChange={(e) => dispatch(setSearchKey(e.target.value))}
      />
    </Box>
  );
}

export default Header;
