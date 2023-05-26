import MonacoEditor from "@monaco-editor/react";
import { Fragment } from "react";

export default function Editor() {
  return (
    <Fragment>
      <MonacoEditor className="h-full" />
    </Fragment>
  );
}
