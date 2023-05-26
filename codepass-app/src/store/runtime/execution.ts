import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
  values: {},
};

const executionStateSlice = createSlice({
  name: "execution",
  initialState,
  reducers: {},
});

const executionReducer = executionStateSlice.reducer;

const selectRuntimeExecution = (state: RootState) =>
  state.runtimeExecution.values;

export const {} = executionStateSlice.actions;
export { selectRuntimeExecution };
export default executionReducer;
