import { WebContainer } from "@webcontainer/api";
import { files } from "./files";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
    <div>
      <textarea>I am a textarea</textarea>
    </div>
    <div>
      <iframe src="loading.html"></iframe>
    </div>
  </div>
`;

/** @type {HTMLTextAreaElement | null} */
const textareaEl = document.querySelector("textarea");

/** @type {HTMLIFrameElement | null} */
const iframeEl = document.querySelector("iframe");

/** @type {import('@webcontainer/api').WebContainer}  */
let webcontainerInstance: any;

async function installDependencies() {
  const installProcess = await webcontainerInstance.spawn("npm", ["install"]);

  installProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log(data);
      },
    })
  );

  return installProcess.exit;
}

async function startDevServer() {
  await webcontainerInstance.spawn("npm", ["run", "start"]);

  webcontainerInstance.on("server-ready", (port: number, url: string) => {
    if (iframeEl) {
      iframeEl.src = url;
    }
  });
}

window.addEventListener("load", async () => {
  if (textareaEl) textareaEl.value = files["index.js"].file.contents;

  webcontainerInstance = await WebContainer.boot();
  await webcontainerInstance.mount(files);

  const exitCode = await installDependencies();
  if (exitCode !== 0) {
    throw new Error("Installation failed");
  }

  startDevServer();
});
