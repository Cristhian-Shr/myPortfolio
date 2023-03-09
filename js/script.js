// efeito digitação

const typing = document.querySelector('[data-js="typing"]');
const message = ["Cristhian Sander Schröer "];

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = "";
let currentCharacters = "";

const type = () => {
  if (messageIndex === message.length) {
    // messageIndex = 0;
    return;
  }

  currentMessage = message[messageIndex];
  currentCharacters = currentMessage.slice(0, characterIndex++);
  typing.textContent = currentCharacters;

  if (currentCharacters.length === currentMessage.length) {
    messageIndex++;
    characterIndex = 0;
  }
};

setInterval(type, 200);
