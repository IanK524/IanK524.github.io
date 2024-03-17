const DELAY = 600;
var i = 0;
var txt1 = 'Developer, Artist, ';
var txt2 = 'World Builder';
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeSubtitle() {
  if (i < txt1.length) {
    document.getElementById("subtitle1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeSubtitle, speed);
  }
  else {
    i = 0;
    typeSubtitle2();
  }
}

function typeSubtitle2() {
    if (i < txt2.length) {
      document.getElementById("subtitle2").innerHTML += txt2.charAt(i);
      i++;
      setTimeout(typeSubtitle2, speed);
    }
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(typeSubtitle,DELAY)
}, false);