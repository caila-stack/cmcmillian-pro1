


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}
function checkKeyPress(event) {
    if (event.code === 'Space') {
        goToLocation("/feed");
    }
}

document.addEventListener("keydown", checkKeyPress);

// Click event on the fade_text paragraph
document.addEventListener("DOMContentLoaded", function () {
    const fadeText = document.getElementById("fade_text");

    if (fadeText) {
        fadeText.addEventListener("click", function () {
            goToLocation("/feed");
        });
    }
});
