import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { selectRuntimeExecution } from "../store/runtime/execution";
// import StandaloneEditor from "../Modules/Sandpack/StandaloneEditor";
// import Editor from "../Modules/Sandpack/Editor";
import Editor from "../Modules/Monaco/CodeEditor";
import { execute } from "../store/runtime/actions";

export default function PlaygroundLayout() {
  const dispatch = useAppDispatch();
  const { content, language, result } = useAppSelector(selectRuntimeExecution);

  function handleRun() {
    dispatch(execute({ content, language }));
  }

  return (
    <Fragment>
      <div className="h-screen flex flex-col">
        <header className="border py-4">
          <div className="container mx-auto p-2">
            <h1 className="text-2xl font-bold">Codepass</h1>
          </div>
        </header>
        <main className="grow container mx-auto">
          <div className="h-full grid grid-cols-1 md:grid-cols-2">
            <div className="prose mx-auto w-full border p-2">
              <h1>Sin aliud quid voles, postea.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork{" "}
                <a href="http://loripsum.net/" target="_blank">
                  Restinguet citius, si ardentem acceperit.
                </a>{" "}
                Bork Hoc etsi multimodis reprehendi potest, tamen accipio, quod
                dant. Duo Reges: constructio interrete. Equidem e Cn.{" "}
              </p>
              <pre>{JSON.stringify(content, null, 2)}</pre>
            </div>
            <div className="border flex flex-col">
              <div className="p-2 border flex justify-between">
                <div>
                  <label htmlFor="language" className="mr-2">
                    Language
                  </label>
                  <select name="language" id="language" className="border">
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                  </select>
                </div>
                <div>
                  <button
                    className="py-2 px-4 border border-green-600 bg-green-400 text-green-800"
                    onClick={handleRun}
                  >
                    Run
                  </button>
                </div>
              </div>
              <div className="grow shrink h-full">
                <Editor />
              </div>
              <div className="p-2 border grow shrink">
                <div>Results</div>
                {result !== "" && (
                  <div className="overflow-x-scroll">
                    <pre className="text-sm">{result}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <footer className="border">
          <div className="container mx-auto border p-2">
            <div className="flex justify-between">
              <p className="">Codepass</p>
              <div className="flex gap-4">
                <p>About</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}
