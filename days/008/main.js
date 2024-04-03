const frame = document.querySelector('.frame');
const ball = document.querySelector('.ball');

for (let i = 16; i >= 1; i--) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('bubble-' + i);
  frame.insertBefore(newDiv, ball.nextSibling);
}
