function moveRandomly() {
    let button = document.getElementById('movingButton');
    let maxWidth = window.innerWidth - button.offsetWidth;
    let maxHeight = window.innerHeight - button.offsetHeight;
    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

setInterval(moveRandomly, 1000);
