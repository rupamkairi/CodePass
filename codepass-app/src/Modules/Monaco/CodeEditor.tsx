import { Editor, Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { Fragment, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  selectRuntimeExecution,
  setContent,
} from "../../store/runtime/execution";

export default function CodeEditor() {
  const dispatch = useAppDispatch();
  const runtimeExecution = useAppSelector(selectRuntimeExecution);
  const { language, content } = useAppSelector(selectRuntimeExecution);

  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);

  function handleEditorWillMount(monaco: Monaco) {}

  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    editorRef.current = editor;
    monacoRef.current = monaco;
  }

  function handleEditorChange(
    value: string | undefined,
    event: editor.IModelContentChangedEvent
  ) {
    dispatch(setContent(value));
  }

  return (
    <Fragment>
      <Editor
        className="h-full"
        theme="vs-dark"
        options={{ fontSize: 14 }}
        language={language}
        value={content}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </Fragment>
  );
}
