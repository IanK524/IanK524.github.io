let root = document.documentElement

/**
 * Updates the width scalar of the nav bar
 */
function updateTowerWidth() {
    if (root !== null) root.style.setProperty("--tower-width", 1 - (window.innerWidth / 1500));
    console.log((1 - (window.innerWidth / 1500)) * 30 + 70);
}

window.onresize = updateTowerWidth;