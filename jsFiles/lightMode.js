let lightMode = localStorage.getItem("lightMode");

const lightModeSwitch = document.getElementById("lightModeSwitch");
const switchIcon = document.getElementsByClassName("fa-adjust")[0];

let infoThemeContainer = document.getElementById("info-theme");

const enableLightMode = () => {
    document.body.classList.add("lightMode");
    infoThemeContainer.innerText = "dark theme";
    localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
    document.body.classList.remove("lightMode");
    infoThemeContainer.innerText = "light theme";
    localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
    enableLightMode();
}

lightModeSwitch.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightMode");
    if (lightMode !== "enabled") {
        enableLightMode();
    } else {
        disableLightMode();
    }
});