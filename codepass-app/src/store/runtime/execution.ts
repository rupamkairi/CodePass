import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { snippets } from "../../constants/snippets";

const initialState = {
  values: {
    language: snippets.javascript.language,
    content: snippets.javascript.snippets,
    result: "",
  },
};

const executionStateSlice = createSlice({
  name: "execution",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.values.language = action.payload;
    },
    setContent(state, action) {
      state.values.content = action.payload;
    },
    setResult(state, action) {
      state.values.result = action.payload;
    },
  },
});

const executionReducer = executionStateSlice.reducer;

const selectRuntimeExecution = (state: RootState) =>
  state.runtimeExecution.values;

export const { setLanguage, setContent, setResult } =
  executionStateSlice.actions;
export { selectRuntimeExecution };
export default executionReducer;
