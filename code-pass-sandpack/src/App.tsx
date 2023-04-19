import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  Sandpack,
} from "@codesandbox/sandpack-react";
import { useState } from "react";
import {
  expressIndexContent,
  expressPackageContent,
} from "./WorkSpace/express/index";
import { nodeIndexContent, nodePackageContent } from "./WorkSpace/node";

function App() {
  const [showFiles, setShowFiles] = useState(false);
  const [showConsole, setShowConsole] = useState(true);

  const [indexContent, setIndexContent] = useState(nodeIndexContent);
  const [packageContent, setPackageContent] = useState(nodePackageContent);
  const [depsObject, setDepsObject] = useState({});

  function convertExpress() {
    setIndexContent(expressIndexContent);
    setPackageContent(expressPackageContent);

    const newDeps = {
      express: "latest",
    };
    setDepsObject({ ...depsObject, ...newDeps });
  }

  return (
    <div>
      <button
        onClick={() => {
          setShowFiles(!showFiles);
        }}
      >
        Show Files
      </button>
      <button
        onClick={() => {
          setShowConsole(!showConsole);
        }}
      >
        Show Console
      </button>
      <button>Node</button>
      <button
        onClick={() => {
          convertExpress();
        }}
      >
        Express
      </button>
      <SandpackProvider
        className="h-screen"
        template="node"
        customSetup={{
          dependencies: depsObject,
          devDependencies: {},
        }}
        files={{
          "index.js": indexContent,
          "package.json": packageContent,
        }}
      >
        <SandpackLayout className="h-full">
          {showFiles ? <SandpackFileExplorer hidden={false} /> : <></>}
          <SandpackCodeEditor
            showTabs={true}
            showRunButton={true}
            showLineNumbers={true}
            showInlineErrors={true}
          />
          <SandpackPreview
            showRestartButton={true}
            showOpenInCodeSandbox={false}
          >
            {showConsole ? <SandpackConsole /> : <></>}
          </SandpackPreview>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

export default App;
