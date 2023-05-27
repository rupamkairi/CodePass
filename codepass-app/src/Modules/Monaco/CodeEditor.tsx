import { Editor, Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { Fragment, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  selectRuntimeExecution,
  setContent,
} from "../../store/runtime/execution";

export default function CodeEditor() {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(selectRuntimeExecution);

  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    editorRef.current = editor;
    editorRef.current.setValue(`def solution(name):
    return "Hello " + name

    `);

    dispatch(setContent(editorRef.current.getValue()));
  }

  function handleEditorChange(value: string | undefined, event: any) {
    dispatch(setContent(value));
  }

  return (
    <Fragment>
      <Editor
        className="h-full"
        language={language}
        options={{ fontSize: 14 }}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </Fragment>
  );
}
