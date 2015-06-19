// ==UserScript==
// @name          No most visited
// @namespace     https://github.com/1112e/Chrome-New-tab-page-no-most-visited
// @description   cool
// @match         https://www.google.com/_/chrome/newtab*
// @version       1.2
// @updateURL 	  https://raw.githubusercontent.com/1112e/Chrome-New-tab-page-no-most-visited/master/No%20most%20visited.user.js
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