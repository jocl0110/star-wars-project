document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();

  console.log(year);

  const footer = ` <footer>
<p>&copy Jose Izquierdo ${year} May the Force be with you</p>
</footer>`;

  document.body.insertAdjacentHTML("beforeend", footer);
});
