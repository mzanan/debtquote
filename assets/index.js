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

const ranges = document.querySelectorAll(".range");
const tooltips = document.querySelectorAll(".tooltip");

ranges.forEach((range, index) => {
  range.addEventListener("input", () => {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    tooltips[index].innerHTML = val;
    tooltips[index].style.left = `calc(${newVal}% + (${
      8 - newVal * 0.15
    }px) - 15px)`;
  });

  // Set initial tooltip position
  const initialVal = range.value;
  const initialMin = range.min ? range.min : 0;
  const initialMax = range.max ? range.max : 100;
  const initialNewVal = Number(
    ((initialVal - initialMin) * 100) / (initialMax - initialMin)
  );
  tooltips[index].innerHTML = initialVal;
  tooltips[index].style.left = `calc(${initialNewVal}% + (${
    8 - initialNewVal * 0.15
  }px) - 15px)`;
});
