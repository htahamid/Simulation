import { EditorView, basicSetup } from "codemirror"
import { python } from "@codemirror/lang-python"

// CodeMirror Terminal
const view = new EditorView({
  doc: "console.log('Hello, CodeMirror!')",
  extensions: [basicSetup, python()],
  parent: document.getElementById("terminal-input")
})


/*
 * Sets up the terminal expand/collapse button.
 */
export function setupCommandTerminal()
{
    const expandButton = document.getElementById('expand-terminal');
    const codeArea = document.getElementById('terminal-code');

    expandButton.addEventListener('click', () =>
    {
        codeArea.hidden = !codeArea.hidden;

        if (codeArea.hidden)
        {
            expandButton.textContent = 'Expand';
        }
        else
        {
            expandButton.textContent = 'Collapse';
        }
    });
}

/*
 * Updates the terminal when a rover command is selected.
 */
export function updateCommandTerminal(direction, command)
{
    const nameDisplay = document.getElementById('command-name');
    const hexDisplay = document.getElementById('command-hex');
    const codeDisplay = document.getElementById('command-source');

    // Convert the command number to hexadecimal text.
    const hex = '0x' + command.toString(16).padStart(2, '0');

    nameDisplay.textContent = direction.toUpperCase();
    hexDisplay.textContent = 'Command: ' + hex;

    // Temporary command preview.
    codeDisplay.textContent = `send_command(${hex})`;
}
