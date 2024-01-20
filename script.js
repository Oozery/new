// js/script.js

function changeBackgroundColor() {
    const body = document.body;
    const currentColor = getComputedStyle(body).backgroundColor;
    body.style.backgroundColor = currentColor === 'rgb(255, 255, 255)' ? '#ffeeaa' : '#ffffff';
}

function startQuiz() {
    document.getElementById('interactive-section').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
}

function showGallery() {
    document.getElementById('interactive-section').style.display = 'none';
    document.getElementById('photo-gallery').style.display = 'block';
}

function showInteraction() {
    document.getElementById('interactive-section').style.display = 'none';
    document.getElementById('interaction-container').style.display = 'block';
}

function showBananaGame() {
    document.getElementById('interactive-section').style.display = 'none';
    document.getElementById('banana-canvas-container').style.display = 'block';
}

function interact() {
    alert('Ape and banana are interacting!');
}

const bananaCanvas = document.getElementById('banana-canvas');
const ctx = bananaCanvas.getContext('2d');
let bananaX = 50;
let bananaY = 50;
let bananaSpeedX = 5;
let bananaSpeedY = 3;

function drawBanana() {
    ctx.clearRect(0, 0, bananaCanvas.width, bananaCanvas.height);
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(bananaX, bananaY, 20, 0, Math.PI * 2);
    ctx.fill();
}

function updateBananaPosition() {
    bananaX += bananaSpeedX;
    bananaY += bananaSpeedY;

    if (bananaX - 20 < 0 || bananaX + 20 > bananaCanvas.width) {
        bananaSpeedX = -bananaSpeedX;
    }

    if (bananaY - 20 < 0 || bananaY + 20 > bananaCanvas.height) {
        bananaSpeedY = -bananaSpeedY;
    }
}

function gameLoop() {
    updateBananaPosition();
    drawBanana();
    requestAnimationFrame(gameLoop);
}

gameLoop();
