
import { roverCommands } from '../commands/roverCommands.js';
import { runPython } from './pythonparser.js';
import { getCode } from './commandTerminal.js';

export function setupRoverControls(onCommand)
{
    for (const direction of Object.keys(roverCommands))
    {
        const button = document.getElementById(direction);

        if (button === null)
        {
            continue;
        }

        button.addEventListener('click', () =>
        {
            const command = roverCommands[direction];

            console.log('Direction:', direction);
            console.log('Command:', command);

            // Update the command terminal.
            runPython(getCode()).then((output) => {
                console.log(output);
            });
            onCommand(direction, command);
        });
    }
}

function sendToGodot(direction) 
    {
        const iframe = document.getElementById('godot-frame');

        if (!iframe?.contentWindow) {
            console.error('Godot iframe not found!');
            return;
        }

        iframe.contentWindow.postMessage(
            {
                type: 'rover-control',
                direction: direction
            },
            window.location.origin
        );

        console.log('Sent to Godot:', direction);
    }

    const directions = {
        forward: 'forward',
        backward: 'backward',
        left: 'left',
        right: 'right'
    };

    Object.entries(directions).forEach(([buttonId, direction]) => {
        const button = document.getElementById(buttonId);

        button.addEventListener('pointerdown', (event) => {
            button.setPointerCapture(event.pointerId);
            sendToGodot(direction);
        });

        button.addEventListener('pointerup', () => {
            sendToGodot('stop');
        });

        button.addEventListener('pointercancel', () => {
            sendToGodot('stop');
        });

        button.addEventListener('lostpointercapture', () => {
            sendToGodot('stop');
        });
    });

    // Stop button
    document.getElementById('stop').addEventListener('click', () => {
        sendToGodot('stop');
    });
