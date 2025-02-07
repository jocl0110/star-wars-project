// Music Control
document.addEventListener("DOMContentLoaded", function () {
  const playPauseIcon = document.querySelector("#playPauseIcon");
  const starWarsTheme = document.querySelector("#starWarsTheme");
  const restartButton = document.querySelector("#restartButton");

  let isPlaying = true; // Assume audio is playing initially because of autoplay

  // Toggle between Play and Pause
  playPauseIcon.addEventListener("click", function () {
    if (isPlaying) {
      // Pause the audio
      starWarsTheme.pause();
      // Change the icon to play
      playPauseIcon.classList.remove("fa-pause");
      playPauseIcon.classList.add("fa-play");
    } else {
      // Play the audio
      starWarsTheme.play();
      // Change the icon to pause
      playPauseIcon.classList.remove("fa-play");
      playPauseIcon.classList.add("fa-pause");
    }
    // Toggle the isPlaying state
    isPlaying = !isPlaying;
  });
  // Restart the song from the beginning
  restartButton.addEventListener("click", function () {
    // Reset the current time to 0 (start from the beginning)
    starWarsTheme.currentTime = 0;
    // Play the audio from the beginning
    starWarsTheme.play();
    // Update the icon to pause (because it's playing again)
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
    // Set isPlaying to true
    isPlaying = true;
  });
});

// Hover Sound
document.addEventListener("DOMContentLoaded", function () {
  const hoverElements = document.querySelectorAll(".hover");
  const hoverSound = document.querySelector("#hoverSound");
  // Loop through all hover elements and add event listeners
  hoverElements.forEach((element) => {
    element.addEventListener("mouseover", function () {
      hoverSound.play(); // Play sound on hover
    });

    element.addEventListener("mouseout", function () {
      hoverSound.pause(); // Pause the sound when the hover ends
      hoverSound.currentTime = 0; // Reset the sound to the beginning
    });
  });
});

// Fetch Data
// Variables
const search_btn = document.getElementById("search_btn");
const search_input = document.getElementById("characterInput");
const resultDiv = document.getElementById("fetchedData");

async function fetchData() {
  const characterName = search_input.value.trim();
  console.log("Searching for ", characterName);

  if (characterName === "") {
    resultDiv.innerHTML = "<p>Please enter a character name.</p>";
    return;
  }
  try {
    const response = await fetch(
      `https://www.swapi.tech/api/people/?name=${characterName}`
    );
    const data = await response.json();
    console.log(data);
    const character = data.result[0];
    console.log(character);

    resultDiv.innerHTML = `
    <h2>${character.properties.name}</h2>
    <p><strong>Height:</strong> ${character.properties.height} cm</p>
            <p><strong>Mass:</strong> ${character.properties.mass} kg</p>
                <p><strong>Hair Color:</strong> ${character.properties.hair_color}</p>
                <p><strong>Skin Color:</strong> ${character.properties.skin_color}</p>
                <p><strong>Eye Color:</strong> ${character.properties.eye_color}</p>
                <p><strong>Birth Year:</strong> ${character.properties.birth_year}</p>
                <p><strong>Gender:</strong> ${character.properties.gender}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    console.error("Fetch error: ", error);
  }
}

search_btn.addEventListener("click", fetchData);
