import { configureStore } from "@reduxjs/toolkit";
import executionReducer from "./runtime/execution";
// ...

export const store = configureStore({
  reducer: {
    runtimeExecution: executionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
