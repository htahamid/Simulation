// style.css import
import '/src/css/style.css'; 

import { setupRoverControls } from '/src/js/roverControls.js';
import { setupCommandTerminal, updateCommandTerminal } from './commandTerminal.js';
import { makeDraggable } from './draggablePanel.js';

// terminal and controls here
setupCommandTerminal(); 
setupRoverControls(updateCommandTerminal); 

const controls = document.getElementById('rover-controls');
const controlsHeader = controls.querySelector('.drag-handle');
if (controls && controlsHeader) makeDraggable(controls, controlsHeader); 

const terminal = document.getElementById('command-terminal');
const terminalHeader = terminal.querySelector('.drag-handle');
if (terminal && terminalHeader) makeDraggable(terminal, terminalHeader); 

console.log('ReRassor Simulator loaded with Figma UI!');