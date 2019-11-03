var image = document.getElementsByClassName('FFVAD')[0].srcset;
    image = image.split(',');
    image = image[image.length - 1];
    image = image.split(' ')[0];

var span1 = document.createElement('span');
    span1.classList.add('download_span1');
    span1.setAttribute('aria-label', 'Download this picture');
var a = document.createElement('a');
    a.classList.add('download_a');
    a.setAttribute('id', 'download-link');
    a.setAttribute('href', image);
    // a.setAttribute('target', '_blank');
var span2 = document.createElement('span');
    span2.classList.add('download_span2');
    span2.appendChild(a).appendChild(span1);

var toolbar = document.getElementsByClassName('ltpMr')[0];
toolbar.insertBefore(span2, toolbar.childNodes[2]);