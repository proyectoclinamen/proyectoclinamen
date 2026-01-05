(function () {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = storedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  toggle.textContent = theme === "dark" ? "☀︎" : "☾";

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    toggle.textContent = next === "dark" ? "☀︎" : "☾";
  });
})();
