$(document).ready(function() {
    console.log('Loaded main.js');

    var website = '';

    switch(window.location.hostname) {
        case 'bing.com':
        case 'www.bing.com':
            website = 'bing';
            break;
    }

    var dedicated_js = browser.extension.getURL("") + "sites/" + website + "/setup.js";

    $.getScript(dedicated_js);
});