var matches = document.querySelectorAll("[data-lang]");
console.log(matches);
for(i = 0; i < matches.length; ++i) {
    matches[i].classList.add("loadtext");
}

function uncensor() {
    for(i = 0; i < matches.length; ++i) {
        matches[i].classList.remove("loadtext");
    }
}