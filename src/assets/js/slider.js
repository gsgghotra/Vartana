
export function showSlider() {
    let slideOpenBtn = document.getElementById("sidenav-main");

        // If the slider is closed, open it
        slideOpenBtn.style.transform = "translateX(0)";

        // ensure button is visible too
        let closeBtn = document.getElementById("nav-close");
        closeBtn.style.visibility = "visible";

}

export function closeNav(){
    let slideOpenBtn = document.getElementById("sidenav-main");
        // If the slider is closed, open it
    slideOpenBtn.style.transform = "translateX(-17.125rem)";
}

export function checkWindowWidth() {
    if (window.innerWidth > 1200) {
        // If the window width is more than 1200 pixels, show the slider
        showSlider();
        // Hide close btn
        let closeBtn = document.getElementById("nav-close");
        closeBtn.style.visibility = "hidden";
    } else {
        let closeBtn = document.getElementById("nav-close");
        closeBtn.style.visibility = "visible";
        closeNav()
    }
}

// Listen for window resize events and update accordingly
window.addEventListener("resize", checkWindowWidth);
