const themeSelector = document.getElementById("theme");

function changeTheme(e) {
  if (themeSelector.value == "dark") {
    document.body.classList.add("dark");
    document.querySelector(".logo").src = "byui-logo-white.png";
  } else {
    document.body.classList.remove("dark");
    document.querySelector(".logo").src = "byui-logo-blue.webp";
  }
}

themeSelector.addEventListener("change", changeTheme);