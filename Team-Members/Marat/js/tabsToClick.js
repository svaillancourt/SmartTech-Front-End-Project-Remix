

// Making tabs react to a click

var divs = document.getElementsByClassName('item');
for (var i = 0, len = divs.length; i < len; i++){
    divs[i].setAttribute('tabindex', '0');
}