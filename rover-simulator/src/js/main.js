import '/src/css/global.css';
import '/src/css/layout.css';
import '/src/css/controls.css';
import '/src/css/terminal.css';


import { setupRoverControls } from '/src/js/roverControls.js';

import {
    setupCommandTerminal,
    updateCommandTerminal
} from './commandTerminal.js';

import { makeDraggable } from './draggablePanel.js';

setupCommandTerminal(); // Initialize terminal behavior.
setupRoverControls(updateCommandTerminal); // Initialize the directional buttons.

const controls = document.getElementById('rover-controls');
const controlsHeader = controls.querySelector('.controls-header');

makeDraggable(controls, controlsHeader); // Make the controls draggable using its title bar.

// Make command terminal draggable.
const terminal = document.getElementById('command-terminal');
const terminalHeader = terminal.querySelector('.terminal-header');

makeDraggable(terminal, terminalHeader); // Make the terminal draggable using its title bar.


console.log('ReRassor Simulator loaded!');