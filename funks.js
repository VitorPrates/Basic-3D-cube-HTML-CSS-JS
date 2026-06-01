const cube = document.getElementById('cube');

let isDragging = false;
let previousX = 0;
let previousY = 0;

let rotateX = -20;
let rotateY = 30;

cube.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousX = e.clientX;
    previousY = e.clientY;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    // console.log(`X: ${rotateX} / Y: ${rotateY}`);
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - previousX;
    const deltaY = e.clientY - previousY;

    rotateY += deltaX * 0.15;
    rotateX -= deltaY * 0.15;

    cube.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    previousX = e.clientX;
    previousY = e.clientY;
});

function rodar(pos)
{
    let new_pos_x = 0
    let new_pos_y = 0

    switch (pos) {
        case 1:
            rotateX = 0;
            rotateY = 0;
            break;
        case 2:
            rotateX = 0;
            rotateY = 180;
            break;
        case 3:
            rotateX = 0;
            rotateY = 270;
            break;
        case 4:
            rotateX = 0;
            rotateY = 90;
            break;
        case 5:
            rotateX = -90;
            rotateY = 0;
            break;
        case 6:
            rotateX = 90;
            rotateY = 0;
            break;
    }
    function rotacionar()
    {

    }
    requestAnimationFrame(rotacionar)

    cube.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}