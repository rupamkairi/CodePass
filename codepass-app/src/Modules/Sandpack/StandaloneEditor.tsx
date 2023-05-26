import { Sandpack, SandpackCodeEditor } from "@codesandbox/sandpack-react";
import { Fragment } from "react";

export default function StandaloneEditor() {
  return (
    <Fragment>
      <Sandpack
        theme={"auto"}
        template="vanilla"
        options={{
          showConsole: true,
          showRefreshButton: true,
          showConsoleButton: true,
        }}
      />
    </Fragment>
  );
}
