
$(document).ready(function() {
    const square = document.querySelector('.fourth-square');
    const blurArea = document.querySelector('.fourth-left-square');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const squareRect = square.getBoundingClientRect();

        const isCursorOverSquare = (
            mouseX >= squareRect.left &&
            mouseX <= squareRect.right &&
            mouseY >= squareRect.top &&
            mouseY <= squareRect.bottom
        );

        if (isCursorOverSquare) {
            square.style.filter = 'none';
        } else {
            square.style.filter = 'blur(10px)';
        }
    })}
);