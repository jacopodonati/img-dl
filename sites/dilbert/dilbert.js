function updateURL() {
    var comics = document.getElementsByClassName('img-comic');

    for (i = 0; i < comics.length; i++) {
        if (!comics[i].classList.contains('link-added')) {
            var comic_url = 'https://' + comics[i].getAttribute('src');
            var title = comics[i].parentElement.parentElement.parentElement.children[0];
            var date_href = title.children[0].getAttribute('href');
            var comic_file = date_href.substring(date_href.lastIndexOf('/') + 1, date_href.length) + '.gif';

            var download_text = document.createTextNode('download');
            var download_link = document.createElement('a');
                download_link.appendChild(download_text);
                download_link.setAttribute('class', 'download_link');
                download_link.setAttribute('title', 'Download this comic');
                download_link.setAttribute('href', comic_url);
                download_link.setAttribute('download', comic_file);
            
            title.appendChild(download_link);
            comics[i].classList.add('link-added');
        }
    }
}

updateURL();

var targetNode = document.getElementById('js_comics');
var config = {
    childList: true
};

var callback = function (mutationsList) {
    updateURL();
};
var observer = new MutationObserver(callback);
observer.observe(targetNode, config);