import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
  values: {
    language: "python",
    content: "",
    result: "",
  },
};

const executionStateSlice = createSlice({
  name: "execution",
  initialState,
  reducers: {
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

export const { setContent, setResult } = executionStateSlice.actions;
export { selectRuntimeExecution };
export default executionReducer;
