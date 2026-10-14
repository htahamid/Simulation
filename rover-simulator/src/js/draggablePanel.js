
/*
 * Makes a floating panel draggable by its header.
 *
 * panel  - The HTML element being moved.
 * handle - The part students click to drag it.
 */
export function makeDraggable(panel, handle)
{
    let startX = 0;
    let startY = 0;

    let panelX = 0;
    let panelY = 0;

    handle.addEventListener('pointerdown', (event) =>
    {
        // Only allow the primary mouse button.
        if (event.button !== 0)
        {
            return;
        }

        const panelRect = panel.getBoundingClientRect();
        const parentRect = panel.offsetParent.getBoundingClientRect();

        // Remember where the pointer started.
        startX = event.clientX;
        startY = event.clientY;

        // Remember the panel's current position.
        panelX = panelRect.left - parentRect.left;
        panelY = panelRect.top - parentRect.top;

        // Switch from right/bottom positioning to left/top.
        panel.style.right = 'auto';
        panel.style.bottom = 'auto';

        panel.style.left = `${panelX}px`;
        panel.style.top = `${panelY}px`;

        // Keep receiving pointer events while dragging.
        handle.setPointerCapture(event.pointerId);
    });

    handle.addEventListener('pointermove', (event) =>
    {
        if (!handle.hasPointerCapture(event.pointerId))
        {
            return;
        }

        const parent = panel.offsetParent;

        // Calculate how far the pointer has moved.
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;

        let newX = panelX + deltaX;
        let newY = panelY + deltaY;

        // Keep the panel inside its parent container.
        const maxX = Math.max(0, parent.clientWidth - panel.offsetWidth);
        const maxY = Math.max(0, parent.clientHeight - panel.offsetHeight);

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        // Move the panel.
        panel.style.left = `${newX}px`;
        panel.style.top = `${newY}px`;
    });

    handle.addEventListener('pointerup', (event) =>
    {
        if (handle.hasPointerCapture(event.pointerId))
        {
            handle.releasePointerCapture(event.pointerId);
        }
    });

    handle.addEventListener('pointercancel', (event) =>
    {
        if (handle.hasPointerCapture(event.pointerId))
        {
            handle.releasePointerCapture(event.pointerId);
        }
    });
}
