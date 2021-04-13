function changeTheme() {
  let theme = document.getElementById("theme");
  let lightTheme = "styles/light-mode.css";
  let darkTheme = "styles/dark-mode.css";

  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
  } else {
    theme.href = lightTheme;
  }
}
