document.getElementById('sizeButton').addEventListener('click', function() {
    let button = this;
    let currentWidth = button.offsetWidth;
    let currentHeight = button.offsetHeight;
    button.style.width = (currentWidth + 10) + 'px';
    button.style.height = (currentHeight + 10) + 'px';
});
