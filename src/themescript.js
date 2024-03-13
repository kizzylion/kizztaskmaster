import 'bootstrap-icons/font/bootstrap-icons.css';

export default function themeSwitcher() {
  const themeToggle = document.getElementById("theme-toggle");

  function systemIsDarkTheme() {
    // Check if system preference is dark
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    } else {
      return false;
    }
  }

  function setThemeMode(mode) {

    // Update the data-mode attribute on the HTML element to reflect the current mode
    document.documentElement.setAttribute("data-mode", mode);

    themeToggle.innerHTML = mode === "dark"
      ? '<i class="bi bi-moon text-slate-100 text-xl"></i>'
      : '<i class="bi bi-sun text-yellow-500 text-xl"></i>';

    // Save the theme mode preference to local storage
    localStorage.setItem("themeMode", mode);
  }

  //Javascript to Toggle DarkMode
  themeToggle.addEventListener("click", () => {
    
    let isDarkModeEnabled = document.documentElement.dataset.mode === "dark";

    setThemeMode(isDarkModeEnabled ? "light" : "dark");
  });

  //Support system preference
  // Check on pageload if system preference is dark
  // If not, apply dark mode
  const htmlElement = document.documentElement;
  let isDarkModeEnabled = systemIsDarkTheme();
  const savedThemeMode = localStorage.getItem("themeMode");

  // Use the saved theme mode if available, otherwise use system preference
   const initialThemeMode = savedThemeMode !== null ? savedThemeMode : (isDarkModeEnabled ? "dark" : "light");
  
  // Set the theme mode
  setThemeMode(initialThemeMode);
}

document.addEventListener("DOMContentLoaded", themeSwitcher);
