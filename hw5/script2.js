document.getElementById('moveRightButton').addEventListener('click', function() {
    let button = this;
    let currentLeft = parseInt(window.getComputedStyle(button).left, 10);
    button.style.left = (currentLeft + 10) + 'px';
});
