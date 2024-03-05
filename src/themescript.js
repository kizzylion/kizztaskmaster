export default function themeSwithcher() {
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

  //Javascript to Toggle DarkModde
  themeToggle.addEventListener("click", () => {
    const htmlElement = document.documentElement;
    htmlElement.dataset.mode =
      htmlElement.dataset.mode === "dark" ? "light" : "dark";

    const isDarkModeEnabled = htmlElement.dataset.mode === "dark";

    // Update the data-mode attribute on the HTML element to reflect the current mode
    document.documentElement.setAttribute(
      "data-mode",
      isDarkModeEnabled ? "dark" : "light"
    );

    themeToggle.innerHTML = !isDarkModeEnabled
      ? '<i class="bi bi-sun text-yellow-500 text-xl"></i>'
      : '<i class="bi bi-moon text-slate-100 text-xl"></i>';
  });

  //Support system preference
  // Check on pageload if system preference is dark
  // If not, apply dark mode
  const htmlElement = document.documentElement;
  const isDarkModeEnabled = systemIsDarkTheme();
  console.log(isDarkModeEnabled);
  // Update the data-mode attribute on the HTML element to reflect the current mode
  htmlElement.setAttribute("data-mode", isDarkModeEnabled ? "dark" : "light");

  themeToggle.innerHTML = isDarkModeEnabled
    ? '<i class="bi bi-moon fa-moon text-slate-100 text-xl"></i>'
    : '<i class="bi bi-sun text-yellow-500 text-xl"></i>';
}
