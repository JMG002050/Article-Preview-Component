const shareBtn = document.querySelector(".share-btn");
const shareMenu = document.querySelector(".share-menu");
const firstShareLink = shareMenu.querySelector("a");

shareBtn.addEventListener('click', () => {
    const isOpen = shareMenu.classList.toggle("active");

    shareBtn.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        firstShareLink.focus();
    } else {
        shareBtn.focus();
    }

});