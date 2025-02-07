document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();

  const footer = ` <footer>
<p>&copy Jose Izquierdo ${year} May the Force be with you</p>
</footer>`;

  document.body.insertAdjacentHTML("beforeend", footer);
});
