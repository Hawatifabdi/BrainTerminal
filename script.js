function playStartupSound() {
  const sound = document.getElementById('startup-sound');
  if (sound) sound.play();
}

const textElement = document.getElementById("typed-text");
const textContent = textElement.innerText;
textElement.innerText = "";

let index = 0;
function typeLine() {
  if (index < textContent.length) {
    textElement.innerText += textContent.charAt(index);
    index++;
    setTimeout(typeLine, 5); // Speed of typing
  }
}
typeLine();
