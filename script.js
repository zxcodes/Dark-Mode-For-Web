function switchSheet() {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "light-mode.css") {
    theme.href = "dark-mode.css";
  } else {
    theme.href = "light-mode.css";
  }
}
