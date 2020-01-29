// // This is run when you click the button.
// function downloadComicList() {
//     var page_counter = 0;
//     // Get the list name and number ...
//     var list_nr = location.pathname.split('/')[3];
//     var title = document.getElementsByTagName('article')[0].getAttribute('data-title');

//     // ... and setup a MutationObserver to check this lazy loading useless mania. `js-infinite-scroll-list-` followed
//     // by the list number is the ID of the list wrapper.
//     var targetNode = document.getElementById('js-infinite-scroll-list-' + list_nr);
//     var config = {
//         childList: true
//     };
    
//     // This is what happens when a list segment is loaded:
//     var callback = function (mutationsList) {
//         // If there are no more `.js-infinite-scroll-observing`, than the list is loaded and...
//         if (document.querySelector('.js-infinite-scroll-page .js-infinite-scroll-observing') === null) {
//             // ... we can disconnect the MutationObserver ...
//             observer.disconnect();
//             // ... and get the list of comics.
//             get_list();
//         } else {
//             // What if there's still a `.js-infinite-scroll-observing` element? We click it so the new segment can be loaded.
//             document.querySelector('.js-infinite-scroll-page .js-infinite-scroll-observing').children[0].click();
//         }
//     };

//     var get_list = function() {
//         // ... get the list of all comics ...
//         var list = document.getElementsByClassName('comic');
//         var comics = [];
//         var padding = list.length.toString().length;
//         // ... and loop through them.
//         for (var i = 0; i < list.length; i++) {
//             // These info will be used either to download the image or to name the file so they're sorted.
//             var comic = {
//                 'position': (i + 1).toString().padStart(padding, '0'),
//                 'src': list[i].getAttribute('data-image'),
//                 'date': list[i].getAttribute('data-date'),
//                 'comic': list[i].getAttribute('data-feature-name')
//             }
//             // And we add it to the comics array.
//             comics.push(comic);
//         }
//         download_em(comics);
//     }

//     var download_em = function(comic_list) {
//         var zip = new JSZip();

//         for (var i = 0; i < comic_list.length; i++) {
//             var filename = comic_list[i].position + ' - ' + comic_list[i].comic + ' - ' + comic_list[i].date + '.png';
//             fetch(comic_list[i].src,{mode: 'no-cors'})
//             .then(function (response) {
//                 console.log(response);
//                 if (response.status === 200 || response.status === 0) {
//                     return Promise.resolve(response.blob());
//                 } else {
//                     console.log(response.statusText);
//                 }
//             })
//             .then(function (image) {
//                 console.log(image);
//                 zip.file(filename, 'image', {binary:true});
//             });
//         }
//         console.log(zip);
//         zip.generateAsync({ type: 'blob'})
//         .then(function(content) {
//             saveAs(content, title + '.zip');
//         });
//     }

//     // We attach the MutationObserver to our wrapper...
//     var observer = new MutationObserver(callback);
//     observer.observe(targetNode, config);

//     // ... and start loading the whole list by programmatically click onto the `.js-infinite-scroll-observing` element.
//     if (document.querySelector('.js-infinite-scroll-page .js-infinite-scroll-observing') == null) {
//         get_list();
//     } else {
//         document.querySelector('.js-infinite-scroll-page .js-infinite-scroll-observing').children[0].click()
//     }
// }

// This regex matches a strip page (comic-title/year/month/day)
var regex_strip = /\/[a-zA-Z\-0-9]+\/[0-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]/g;
// This one, instead, matches a comic list
var regex_list = /\/comics\/lists\/[0-9]+\/[a-z0-9\-]+/g;

// If we're on a list page ...
if (location.pathname.match(regex_list)) {
    // // ... get the list number and the toolbar ID, the one below the list title ...
    // list_nr = location.pathname.split('/')[3];
    // toolbar = document.getElementById('toolbar_' + list_nr);

    // // ... then make a button to download all comics ...
    // var button_text = document.createTextNode('Download All Comics');
    // var button = document.createElement('a');
    //     button.appendChild(button_text);
    //     button.setAttribute('style', 'color:white');
    //     button.setAttribute('class', 'btn btn-success gc-button');
    //     button.setAttribute('alt', 'Download all comics');
    //     button.addEventListener("click", downloadComicList);

    // // ... and append it to the toolbar.
    // toolbar.appendChild(button);
} else if (location.pathname.match(regex_strip)) {
    // Things are easier if we're in a strip page. Get the strip element ...
    var comic = document.getElementsByClassName('item-comic-image')[0].children[0];
    // ... the image URL ...
    var comic_url = comic.src;
    // ... the date from the URL ...
    regex = /[a-zA-Z\-0-9]+/g;
    var path_to_comic_title = location.pathname.match(regex);
    // ... and set the filename.
    var comic_title = path_to_comic_title[0] + '_' + path_to_comic_title[1] + path_to_comic_title[2] + path_to_comic_title[3] + '.jpg';

    // Then make the button ...
    var button_text = document.createTextNode('Download This Comic');
    var button = document.createElement('a');
        button.appendChild(button_text);
        button.setAttribute('class', 'btn btn-success gc-button');
        button.setAttribute('alt', 'Download this comic');
        button.setAttribute('href', comic_url);
        button.setAttribute('download', comic_title);
    
    // ... and append it to the "buy" toolbar.
    document.getElementsByClassName('comic__buy-button')[0].appendChild(button);
}
