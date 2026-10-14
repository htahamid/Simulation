import '/src/css/global.css';
import '/src/css/layout.css';

import '/src/css/controls.css';


import { setupRoverControls } from '/src/js/roverControls.js';
import { makeDraggable } from './draggablePanel.js';

setupRoverControls(); // Initialize the directional buttons.

const controls = document.getElementById('rover-controls'); // Find the floating control panel.
const controlsHeader = controls.querySelector('.controls-header'); // Find the panel's title bar.
makeDraggable(controls, controlsHeader); // Make the panel draggable using its title bar.

console.log('ReRassor Simulator loaded!');