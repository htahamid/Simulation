
/*
 * Command values from the Arduino rover protocol.
 * These match the command identifiers used by the
 * physical rover.
 */

export const roverCommands = {
    forward: 0x01,
    backward: 0x02,
    left: 0x03,
    right: 0x04,
    stop: 0x00
};
