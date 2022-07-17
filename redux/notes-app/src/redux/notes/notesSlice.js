import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: JSON.parse(localStorage.getItem("notes")) || [
      {
        id: 1,
        title: "Note 1",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, debitis? Sapiente nam beatae deserunt ipsa, voluptate consectetur similique ipsam ratione? Fuga, sapiente quibusdam aperiam veniam in molestiae fugit maxime possimus?",
        color: "pink.300",
      },
      {
        id: 2,
        title: "Note 2",
        content:
          "Aliquid, libero placeat. Labore necessitatibus aliquid eos commodi tempora ipsum, eveniet nostrum ea consectetur sequi repellendus. Earum ullam eos pariatur voluptatibus, atque labore in beatae, quae exercitationem cumque quas amet.",
        color: "purple.300",
      },
      {
        id: 3,
        title: "Note 3",
        content:
          "Consequatur excepturi tempore necessitatibus saepe consequuntur aspernatur, minima, temporibus tenetur animi error, rem nemo. Accusamus repudiandae nisi fuga atque quae nesciunt repellat. Hic pariatur facere commodi ducimus perspiciatis est harum!",
        color: "yellow.300",
      },
    ],
    activeColor: localStorage.getItem("activeColor") || "yellow.300",
    searchKey: "",
  },
  reducers: {
    addANewNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (data) => {
        const id = nanoid();
        return { payload: { id, ...data } };
      },
    },
    removeANote: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
    changeActiveColor: (state, action) => {
      state.activeColor = action.payload;
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

// selectors
export const selectNotes = (state) => state.notes.items;
export const selectActiveColor = (state) => state.notes.activeColor;
export const selectSearchKey = (state) => state.notes.searchKey;

// actions
export const { addANewNote, removeANote, changeActiveColor, setSearchKey } =
  notesSlice.actions;

export default notesSlice.reducer;
