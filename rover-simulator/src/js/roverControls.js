
import { roverCommands } from '../commands/roverCommands.js';

/*
 * Sets up the rover direction buttons.
 */
export function setupRoverControls()
{
    const directions = Object.keys(roverCommands);

    for (const direction of directions)
    {
        const button = document.getElementById(direction);

        button.addEventListener('click', () =>
        {
            const command = roverCommands[direction];

            console.log('Direction:', direction);
            console.log('Command:', command);
        });
    }
}
