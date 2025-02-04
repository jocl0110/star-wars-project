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
