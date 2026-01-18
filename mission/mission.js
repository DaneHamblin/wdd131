const themeSelector = document.getElementById("theme");

function changeTheme(e) {
  if (themeSelector.value == "dark") {
    document.body.classList.add("dark");
    document.querySelector(".logo").src = "byui-logo_white.png";
  } else {
    document.body.classList.remove("dark");
    document.querySelector(".logo").src = "logo.webp";
  }
}

themeSelector.addEventListener("change", changeTheme);