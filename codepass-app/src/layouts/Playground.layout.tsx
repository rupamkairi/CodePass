import { Fragment } from "react";
import { useAppSelector } from "../store/hook";
import { selectRuntimeExecution } from "../store/runtime/execution";
// import StandaloneEditor from "../Modules/Sandpack/StandaloneEditor";
// import Editor from "../Modules/Sandpack/Editor";
import Editor from "../Modules/Monaco/Editor";

export default function PlaygroundLayout() {
  const runtimeExecution = useAppSelector(selectRuntimeExecution);

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
            </div>
            <div className="border flex flex-col">
              <div className="p-2 border">
                <div>
                  <label htmlFor="language" className="mr-2">
                    Language
                  </label>
                  <select name="language" id="language" className="border">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                  </select>
                </div>
              </div>
              <div className="grow h-full">
                <Editor />
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
