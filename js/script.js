// efeito digitação

const typing = document.querySelector('[data-js="typing"]');
const message = [
  "Olá, eu sou Cristhian Sander Schröer, Desenvolvedor front-end.",
];

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
