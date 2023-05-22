import axios from "axios";
import { Fragment } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import StandaloneEditor from "./Editor/StandaloneEditor";
import Editor from "./Editor/Editor";

function App() {
  return (
    <Fragment>
      <ReduxProvider store={store}>
        <Fragment>
          <h1 className="text-center text-3xl font-bold">
            CodePass - powered by Sandpack from CodeSandbox
          </h1>
          {/* <StandaloneEditor /> */}
          <Editor />
        </Fragment>
      </ReduxProvider>
    </Fragment>
  );
}

export default App;
