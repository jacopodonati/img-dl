# img-dl

A simple browser addon that downloads images from sites. It will soon be released as a Firefox extension, and it's tested against Firefox and Firefox only.  I plan to test it in Chrome in the near future.

When possible, it tries to use the `download` attribute so the image will be automatically downloaded, but it rarely works on Firefox.  The problem is that on Firefox Same-Origin is enforced (see [bug no. 874009](https://bugzilla.mozilla.org/show_bug.cgi?id=874009)).  If you want to see what I mean, try it on Bing and you'll see the image won't open as a new URL, but it will be downloaded.

The icon is based on a vector image by [Freepik](https://www.flaticon.com/authors/freepik).

## Supported sites

For the moment, it supports these websites:

### Backgrounds

- [Bing](https://www.bing.com): download button on the bottom right.
- [Earth View by Google](https://earthview.withgoogle.com): changed download link inside the menu.

### Comics

- [Dilbert](https://www.dilbert.com): download link on top of the image.
- [GoComics](https://www.gocomics.com): download button just below the calendar navigation, ~~or on top of a comic list to download a zip containing every listed comic~~. (tested on Calvin and Hobbes, should work elsewhere.)
- [xkcd](https://xkcd.com): download button inside the navigation toolbar.

### Other

- [Instagram](https://www.instagram.com): download button between comment and share buttons.  If it doesn't show up, reload the page.  It's not perfect, but it kinda works.

## Add more sites

If you want `img-dl` to work on other sites, you can open a ticket or implement it yourself and send a pull request.

Inside the `sites` folder there's a folder for every supported site.  All files needed for a specific files should be there, excepts for libraries, that will be added to a separate folder.  If possible, just use plain JS.

Script (and CSS injection) are managed by `manifest.json`, under `content_scripts`.  Don't add URLs and scripts inside a block already present, but create a new block.

Download links or button should blend well into the page style.
