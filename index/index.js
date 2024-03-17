const delay = 600;
const nav = document.querySelector("nav");

var i = 0;
var txt1 = 'Developer, Artist, ';
var txt2 = 'World Builder';
var speed = 100; /* The speed/duration of the effect in milliseconds */

/**
 * Plays a typing animation for the subtitle
 */
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

/**
 * Second part of typing animation; do not call except from `typeSubtitle()`
 */
function typeSubtitle2() {
    if (i < txt2.length) {
      document.getElementById("subtitle2").innerHTML += txt2.charAt(i);
      i++;
      setTimeout(typeSubtitle2, speed);
    }
}

/**
 * Updates the width scalar of the nav bar
 */
function updateNavWidth() {
  if (nav !== null) nav.style.setProperty("--nav-width", window.innerWidth / 600);
}

document.addEventListener('DOMContentLoaded', function() {
  if (nav !== null) nav.style.setProperty("--nav-width", window.innerWidth / 600);
  setTimeout(typeSubtitle,delay);
}, false);

window.onresize = updateNavWidth;
