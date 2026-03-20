import type { Note } from "@/entities/note";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface TabWriterState {
  title: string;
  subtitle?: string;
  tempo?: number;

  notes: Note[];
}

const tabWriterInitialState: TabWriterState = {
  title: "",
  subtitle: "",
  tempo: 0,

  notes: new Array<Note>(),
};

interface UpdateNoteAction {
  id: string;
  newNote: Note;
}

const tabWriterSlice = createSlice({
  name: "tab-writer",
  initialState: tabWriterInitialState,

  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      const { payload: title } = action;

      return {
        ...state,
        title,
      };
    },

    setSubtitle: (state, action: PayloadAction<string>) => {
      const { payload: subtitle } = action;

      return {
        ...state,
        subtitle,
      };
    },

    setTempo: (state, action: PayloadAction<number>) => {
      const { payload: tempo } = action;

      return {
        ...state,
        tempo,
      };
    },

    appendNote: (state, action: PayloadAction<Note>) => {
      const { notes } = state;
      const { payload: newNote } = action;

      return {
        ...state,
        notes: [...notes, newNote],
      };
    },

    removeNote: (state, action: PayloadAction<string>) => {
      const { notes } = state;
      const { payload: id } = action;

      const newNotes = notes.filter((note) => note.id !== id);

      return {
        ...state,
        notes: newNotes,
      };
    },

    updateNote: (state, action: PayloadAction<UpdateNoteAction>) => {
      const { notes } = state;
      const { id, newNote } = action.payload;

      const newNotes = notes.map((note) => (note.id !== id ? note : newNote));

      return {
        ...state,
        notes: newNotes,
      };
    },
  },
});

export const { setTitle, setSubtitle, setTempo, appendNote, removeNote, updateNote } =
  tabWriterSlice.actions;

export const tabWriterReducer = tabWriterSlice.reducer;
