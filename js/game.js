document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const gameDiv = document.getElementById("game");
  //   First Character
  const char1Img = document.getElementById("char1-img");
  const char1Name = document.getElementById("char1-name");
  //   Second Character
  const char2Img = document.getElementById("char2-img");
  const char2Name = document.getElementById("char2-name");

  //   Guess Buttons
  const guess1Btn = document.getElementById("guess1");
  const guess2Btn = document.getElementById("guess2");

  //   Result Text
  const resultTextEl = document.getElementById("result");
  //   Game BTNs
  const startBtn = document.getElementById("start-game-btn");
  const playAgainBtn = document.getElementById("play-again-btn");

  let character1 = null;
  let character2 = null;

  async function fetchRandomCharacter() {
    const randomId = Math.floor(Math.random() * 83) + 1;
    const respone = await fetch(`https://swapi.dev/api/people/${randomId}`);
    const data = await respone.json();
    return {
      name: data.name,
      height: parseInt(data.height) || 0,
      image: `https://starwars-visualguide.com/assets/img/characters/${randomId}.jpg`,
    };
  }

  async function StartGame() {
    resultTextEl.textContent = "";
    startBtn.style.display = "none";
    gameDiv.style.display = "block";

    character1 = await fetchRandomCharacter();
    character2 = await fetchRandomCharacter();

    char1Img.src = character1.image;
    char1Name.textContent = character1.name;

    char2Img.src = character2.image;
    char2Name.textContent = character2.name;

    guess1Btn.disabled = false;
    guess2Btn.disabled = false;
    playAgainBtn.style.display = "none";
  }
  function checkGuess(selectedCharacter) {
    guess1Btn.disabled = true;
    guess2Btn.disabled = true;

    if (character1.height === character2.height) {
      resultTextEl.textContent = `It's a tie! Both are ${character1.height} tall`;
    } else {
      const correctChoice =
        character1.height > character2.height ? "char1" : "char2";
      const taller =
        character1.height > character2.height ? character1 : character2;
      if (selectedCharacter === correctChoice) {
        resultTextEl.textContent = `✅Correct! ${taller.name} is taller (${taller.height}cm)`;
      } else {
        resultTextEl.textContent = `❌Wrong! ${taller.name} is taller (${taller.height}cm)`;
      }
    }
    playAgainBtn.style.display = "block";
  }
  guess1Btn.addEventListener("click", () => checkGuess("char1"));
  guess2Btn.addEventListener("click", () => checkGuess("char2"));
  playAgainBtn.addEventListener("click", StartGame);

  startBtn.addEventListener("click", StartGame);
});
