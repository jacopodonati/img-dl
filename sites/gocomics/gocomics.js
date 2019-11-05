var regex = /\/[a-zA-Z\-0-9]+\/[0-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]/g;
if (location.pathname.match(regex)) {
    var comic = document.getElementsByClassName('item-comic-image')[0].children[0];
    var comic_url = comic.src;
    regex = /[a-zA-Z\-0-9]+/g;
    var path_to_comic_title = location.pathname.match(regex);
    var comic_title = path_to_comic_title[0] + '_' + path_to_comic_title[1] + path_to_comic_title[2] + path_to_comic_title[3];

    var button_text = document.createTextNode('Download This Comic');
    var button = document.createElement('a');
        button.appendChild(button_text);
        button.setAttribute('class', 'btn btn-success gc-button');
        button.setAttribute('alt', 'Download this comic');
        button.setAttribute('href', comic_url);
        button.setAttribute('download', comic_title);
        
    document.getElementsByClassName('comic__buy-button')[0].appendChild(button);
}