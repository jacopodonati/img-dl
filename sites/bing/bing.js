function update_url() {
    // Get the background-image URL
    var bg = window.getComputedStyle(document.getElementById('bgDiv')).getPropertyValue('background-image');

    // As of November 2019, the URL Bing provides is rubbish. From something like:
    //   url(/th?id=OHR.Wachsenburg_ROW0528535015_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp)
    // We need to get something like:
    //   /th?id=OHR.Wachsenburg_ROW0528535015_1920x1080.jpg
    // `bg_url` will be used for href attribute. `bg_file` will be the filename once it's saved.
    bg_url = bg.substring('url("'.length, bg.indexOf('jpg') + 3);
    bg_file = bg.substring(bg.indexOf('id=OHR.')+"id=OHR.".length, bg.indexOf('jpg') + 3);

    // Remove any prior download button. Useful when you change Bing's background by clicking on
    if(document.getElementById('sh_dw') != null) {
        var previous_button = document.getElementById('sh_dw');
        previous_button.parentNode.removeChild(previous_button);
    }

    // Create the button and append it.
    var button = document.createElement('a');
        button.setAttribute('id', 'sh_dw');
        button.setAttribute('role', 'button');
        button.setAttribute('class', 'sc_light');
        button.setAttribute('title', 'Download wallpaper');
        button.setAttribute('href', bg_url);
        button.setAttribute('download', bg_file);
    var div_wrapper = document.createElement('div');
        div_wrapper.setAttribute('id', 'sh_dw_in');
        
    document.getElementById('sh_rdiv')
        .appendChild(button)
        .appendChild(div_wrapper)
        .appendChild(document.createElement('div'));
}

update_url();

var targetNode = document.getElementById('bgDiv');
var config = {
    attributes: true
};

var callback = function (mutationsList) {
    update_url();
};
var observer = new MutationObserver(callback);
observer.observe(targetNode, config);