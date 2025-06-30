// ========================= Toggle Style Switcher  =========================

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style - switcher scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// ========================= Theme Colors ====================================
const theme_color = document.querySelector(":root");
function changeThemeColor(color) {
  const set_theme_color = localStorage.setItem('theme-color', color);
  const get_theme_color = localStorage.getItem('theme-color');
  theme_color.style.setProperty('--skin-color', get_theme_color);
}

// ========================= Theme Day-Night Mode ====================================

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  let get_theme_color = localStorage.getItem('theme-color');

  // If not set yet, set default color and apply it
  if (!get_theme_color) {
    get_theme_color = '24, 84, 180'; // your default RGB value
    localStorage.setItem('theme-color', get_theme_color);
  }

  // Apply the theme color
  theme_color.style.setProperty('--skin-color', get_theme_color);

  // Set day/night icon state
  if (document.body.classList.contains("darks")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// 2:57 MNTS
