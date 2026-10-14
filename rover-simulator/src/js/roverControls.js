
import { roverCommands } from '../commands/roverCommands.js';

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
            onCommand(direction, command);
        });
    }
}
