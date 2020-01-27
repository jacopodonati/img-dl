function update_url() {
    // Get the background-image URL
    var bg = window.getComputedStyle(document.getElementsByClassName('img_cont')[0]).getPropertyValue('background-image');
    // As of November 2019, the URL Bing provides is rubbish. From something like:
    //   url(/th?id=OHR.Wachsenburg_ROW0528535015_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp)
    // We need to get something like:
    //   /th?id=OHR.Wachsenburg_ROW0528535015_1920x1080.jpg
    // `bg_url` will be used for href attribute. `bg_file` will be the filename once it's saved.
    bg_url = bg.substring('url("'.length, bg.indexOf('jpg') + 3);
    bg_file = bg.substring(bg.indexOf('id=OHR.')+"id=OHR.".length, bg.indexOf('jpg') + 3);
    
    // Remove any prior download button. Useful when you change Bing's background by clicking on
    if(document.getElementById('headline_download') != null) {
        var previous_button = document.getElementById('headline_download');
        previous_button.parentNode.removeChild(previous_button);
    }

    // Create the button and append it.
    var button = document.createElement('a');
        button.setAttribute('id', 'headline_download');
        button.setAttribute('role', 'button');
        button.setAttribute('class', 'sc_light');
        button.setAttribute('title', 'Download wallpaper');
        button.setAttribute('href', bg_url);
        button.setAttribute('download', bg_file);
    var div_wrapper = document.createElement('div');
        div_wrapper.setAttribute('class', 'download_icon');

    var div_inner = document.createElement('div');
        div_inner.setAttribute('id', 'sh_dw_in');
    
    document.getElementsByClassName('headline')[0]
        .appendChild(div_wrapper)
        .appendChild(button)
        .appendChild(div_inner);
}

update_url();

var targetNode = document.getElementsByClassName('img_cont')[0];
var config = {
    attributes: true
};

var callback = function (mutationsList) {
    update_url();
};
var observer = new MutationObserver(callback);
observer.observe(targetNode, config);