import { loadPyodide, version } from "pyodide";

let pyodidePromise;

function getPyodide() {
  if (!pyodidePromise) {
    pyodidePromise = loadPyodide({
      // Load the runtime files from the CDN so your bundler doesn't have to handle the .wasm files
      indexURL: `https://cdn.jsdelivr.net/pyodide/v${version}/full/`,
    });
  }
  return pyodidePromise;
}

export async function runPython(code) {
  const pyodide = await getPyodide();

  let output = "";
  pyodide.setStdout({ batched: (t) => (output += t + "\n") });
  pyodide.setStderr({ batched: (t) => (output += t + "\n") });

  try {
    await pyodide.loadPackagesFromImports(code); // optional: auto-load numpy, etc.
    const result = await pyodide.runPythonAsync(code);
    if (result !== undefined) output += String(result);
  } catch (err) {
    output += String(err);
  }
  return output.trim();
}