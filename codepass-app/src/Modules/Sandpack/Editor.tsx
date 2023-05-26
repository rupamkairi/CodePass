import {
  RunButton,
  tabButton,
  RoundedButton,
  SANDPACK_THEMES,
  SandpackCodeEditor,
  SandpackCodeViewer,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import { dracula } from "@codesandbox/sandpack-themes";
import { Fragment } from "react";
import MonacoEditor from "./MonacoEditor";

export default function Editor() {
  return (
    <Fragment>
      <SandpackProvider theme={"auto"} template="vanilla" className="h-screen">
        <SandpackLayout className="h-full">
          <SandpackCodeEditor showRunButton={true} />
          {/* <MonacoEditor /> */}
          <SandpackPreview actionsChildren={<PreviewButtons />} />
          <SandpackConsole standalone={true} resetOnPreviewRestart={true} />
        </SandpackLayout>
      </SandpackProvider>
    </Fragment>
  );
}

function PreviewButtons() {
  return (
    <Fragment>
      <button className="text-black">Test</button>
    </Fragment>
  );
}
