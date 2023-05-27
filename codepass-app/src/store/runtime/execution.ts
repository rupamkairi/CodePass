import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
  values: {
    language: "python",
    content: "",
  },
};

const executionStateSlice = createSlice({
  name: "execution",
  initialState,
  reducers: {
    setContent(state, action) {
      state.values.content = action.payload;
    },
  },
});

const executionReducer = executionStateSlice.reducer;

const selectRuntimeExecution = (state: RootState) =>
  state.runtimeExecution.values;

export const { setContent } = executionStateSlice.actions;
export { selectRuntimeExecution };
export default executionReducer;
