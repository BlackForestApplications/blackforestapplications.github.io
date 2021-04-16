function setDarkMode(enable) {
    if(enable) {
        // enable dark mode
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
    } else {
        // disable dark mode
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
    }
}

function toggleDarkMode() {
    if(localStorage.getItem("theme") === null || localStorage.getItem("theme") === "light") {
        // enable dark mode
        setDarkMode(true);
    } else {
        // disable dark mode
        setDarkMode(false);
    }
}

// toggle dark mode on site load
if(localStorage.getItem("theme") === null && window.matchMedia && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setDarkMode(true);
} else {
    setDarkMode(localStorage.getItem("theme") === "dark");
}

// add dark mode change listener
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
    var newColorScheme = e.matches ? "dark" : "light";
    setDarkMode(newColorScheme === "dark");
});