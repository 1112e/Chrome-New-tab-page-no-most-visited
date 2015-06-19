// ==UserScript==
// @name          No most visited
// @description   cool
// @include       about:blank
// @match         https://www.google.com/_/chrome/newtab*
// @version       1.0
// @include       about:blank
// ==/UserScript==
 
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
 
document.getElementById("most-visited").remove();