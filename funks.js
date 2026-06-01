const cube = document.getElementById('cube');
let rodando = false

let isDragging = false;
let previousX = 0;
let previousY = 0;

let rotateX = -20;
let rotateY = 30;

cube.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.body.style.userSelect = 'none';
    previousX = e.clientX;
    previousY = e.clientY;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = '';
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
    if(!rodando)
    {
        rodando = true
        let alvoX = 0;
        let alvoY = 0;

        switch (pos)
        {
            case 1:
                alvoX = 0;
                alvoY = 0;
                break;

            case 2:
                alvoX = 0;
                alvoY = 180;
                break;

            case 3:
                alvoX = 0;
                alvoY = 270;
                break;

            case 4:
                alvoX = 0;
                alvoY = 90;
                break;

            case 5:
                alvoX = -90;
                alvoY = 0;
                break;

            case 6:
                alvoX = 90;
                alvoY = 0;
                break;
        }

        function animar()
        {
            const velocidade = 0.15;

            rotateX += (alvoX - rotateX) * velocidade;
            rotateY += (alvoY - rotateY) * velocidade;

            cube.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            const chegouX = Math.abs(alvoX - rotateX) < 0.1;
            const chegouY = Math.abs(alvoY - rotateY) < 0.1;

            if (!chegouX || !chegouY)
            {
                requestAnimationFrame(animar);
            }
            else
            {
                rotateX = alvoX;
                rotateY = alvoY;
                cube.style.transform =
                    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                rodando = false
            }
        }
        requestAnimationFrame(animar);
    }
    
}