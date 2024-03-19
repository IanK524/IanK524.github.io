let root = document.documentElement

/** 
 * When the user clicks on the button, toggle between hiding and showing the dropdown content
 */
function toggleDropdown() {
    document.getElementById("navDropdown").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdownButton')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/**
 * Updates the width scalar of the nav bar
 */
function updateTowerWidth() {
    if (root !== null) root.style.setProperty("--tower-width", 1 - (window.innerWidth / 1500));
}

window.onresize = updateTowerWidth;