document.addEventListener("DOMContentLoaded", function () {
  const audioSection = `<section>
        <audio id="starWarsTheme" loop>
          <source src="../audio/star-wars-theme.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <audio id="hoverSound">
          <source src="../audio/lightsaber-sound.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <section id="controller" class="controller">
          <i id="playPauseIcon" class="fa-solid fa-play"></i>
          <i id="restartButton" class="fa-solid fa-rotate"></i>
        </section>`;
  document.body.insertAdjacentHTML("beforeend", audioSection);
});
