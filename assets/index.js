const navbarBtn = document.getElementById("navbar-btn");

navbarBtn.onclick = () => {
  const navbar = document.getElementById("navbar");

  navbar.classList.toggle("navbar--open");
};

function toggleSubmenu(submenuId, iconId, linkId) {
  const submenu = document.getElementById(submenuId);
  submenu.style.display = submenu.style.display === "none" ? "block" : "none";

  const programIcon = document.getElementById(iconId);
  programIcon.style.transform =
    submenu.style.display === "none" ? "rotate(0deg)" : "rotate(90deg)";
}

const range = document.querySelector(".range");
const tooltip = document.querySelector(".tooltip");

range.addEventListener("input", () => {
  setTooltip(range, tooltip);
});

function setTooltip(range, tooltip) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  tooltip.innerHTML = val;
  tooltip.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px) - 15px)`;
}

setTooltip(range, tooltip);
