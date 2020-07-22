/*
    add new translation files here \/
*/
const LANGS = {
    "en": "./translations/en.json",
    "es": "./translations/es.json",
    "fr": "./translations/fr.json",
    "ru": "./translations/ru.json",
    "ja": "./translations/ja.json"
}
// selected language
var lang = "de";

jQuery(document).ready(function ($) {

    var userLanguage = getUserLanguage();
    lang = userLanguage;

    if(typeof(Storage) !== "undefined" && localStorage != null) {
        if(localStorage.getItem("language")) {
            lang = localStorage.getItem("language");
        }
    }

    console.log(lang);
    changeLanguage();

});

function changeLanguage() {
    // if translation of language is not available (and it is not german),
    // then set language to english as default
    if(!LANGS[lang] && lang !== "de") {
        lang = "en";
    }

    // get path to language file
    let langFile = LANGS[lang];
    // if object entry exists, get the json data
    if(langFile) {
        // load json file
        $.getJSON(langFile, function(json) {
            // loop through all elements which have 'data-lang' attribute
            $("[data-lang]").each(function() {
                // get the translation id of the element
                let id = this.attributes.getNamedItem("data-lang").value;
                // get the corresponding json value (= translation)
                let translation = json[id];

                if(translation) {
                    // replace text of the element
                    this.innerHTML = translation;
                }

                // debugging (remove this for production)
                //console.log(id, translation);
        
            });
            
        });

    }
}

function setLanguage(langCode) {
    lang = langCode;
    if(typeof(Storage) !== "undefined" && localStorage != null) {
        localStorage.setItem("language", lang);
    }
    changeLanguage();
    if(langCode === "de")
        location.reload();
}

function getUserLanguage() {
    let userLang = navigator.language || navigator.userLanguage;
    // if some region is specified, return only the lang code
    if(userLang.includes('-')) {
        userLang = userLang.substring(0, 2);
    }
    return userLang;
}
