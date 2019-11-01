function updateUrl() {
    var background_url = document.getElementsByClassName('photo-view--active')[0].getAttribute('src');
    
    var location_id = background_url.substring(background_url.lastIndexOf('/') + 1, background_url.lastIndexOf('.'));
    var location_region = document.getElementsByClassName('location__region')[0].textContent;
    var location_country = document.getElementsByClassName('location__country')[0].textContent;

    if (location_region) {
        var background_title = location_region + ', ' + location_country + ' (' + location_id + ')';
    } else {
        var background_title = location_country + ' (' + location_id + ')';
    }

    background_title = background_title + '.jpg';

    var download_link = document.getElementsByClassName('menu__item--download')[0];
    download_link.setAttribute('href', background_url);
    download_link.setAttribute('download', background_title);
}

updateUrl();

var targetNode = document.getElementsByClassName('share__deeplink')[0];

var config = {
    attributes: true
};

var callback = function (mutationsList) {
    updateUrl();
};
var observer = new MutationObserver(callback);
observer.observe(targetNode, config);
