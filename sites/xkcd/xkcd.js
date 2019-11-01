var img = document.getElementById('comic').children[0];

var comic_src = img.getAttribute('src');
var comic_file = comic_src.substring(comic_src.lastIndexOf('/') + 1, comic_src.length);

if (img.getAttribute('srcset')) {
    comic_src = img.getAttribute('srcset');
    var comic_url = comic_src.substring(0, comic_src.lastIndexOf(' '));
} else {
    var comic_url = comic_src;
}

comic_url = 'https://' + comic_url;

var text = document.createTextNode('Download');
var button = document.createElement('a');
    button.appendChild(text);
    button.setAttribute('id', 'download_button');
    button.setAttribute('role', 'button');
    button.setAttribute('title', 'Download this comic');
    button.setAttribute('href', comic_url);
    button.setAttribute('download', comic_file);
var li = document.createElement('li');
li.appendChild(button);
var cr = document.createTextNode("\n");
li.append(cr);

var li_top = li.cloneNode(true);
var li_bottom = li.cloneNode(true);

var navs = document.getElementsByClassName('comicNav');

navs[0].insertBefore(li_top, navs[0].children[3]);
navs[1].insertBefore(li_bottom, navs[1].children[3]);