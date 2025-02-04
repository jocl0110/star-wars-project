document.addEventListener("DOMContentLoaded", function () {
  const navbar = `<nav>
      <ul>
        <li class="hover">
          <a class="hover" href="index.html"
            ><img
              src="../images/star_wars_logo.png"
              width="40px"
              height="auto"
              alt="star_wars_logo"
          /></a>
        </li>
        <li class="hover"><a href="game.html">Who is Taller?</a></li>
        <li class="hover"><a href="index.html">Character Finder</a></li>
      </ul>
    </nav>`;
  document.body.insertAdjacentHTML("afterbegin", navbar);
});
