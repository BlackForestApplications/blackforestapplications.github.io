jQuery(document).ready(function ($) {

    const LANGS = {
        "en": "./translations/en.json"
    }

    var userLanguage = getUserLanguage();
    console.log(userLanguage);
    var lang = userLanguage;

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
                console.log(id, translation);
        
            });
            
        });

    }

});

function getUserLanguage() {
    let userLang = navigator.language || navigator.userLanguage;
    // if some region is specified, return only the lang code
    if(userLang.includes('-')) {
        userLang = userLang.substring(0, 2);
    }
    return userLang;
}
