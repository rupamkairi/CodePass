import { Fragment } from "react";
import { Provider as ReduxProvider } from "react-redux";
import PlaygroundLayout from "./layouts/Playground.layout";
import { store } from "./store";

function App() {
  return (
    <Fragment>
      <ReduxProvider store={store}>
        <Fragment>
          <PlaygroundLayout />
        </Fragment>
      </ReduxProvider>
    </Fragment>
  );
}

export default App;
