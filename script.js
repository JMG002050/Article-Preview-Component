const shareBtn = document.querySelector(".share-btn");
const shareMenu = document.querySelector(".share-menu");

shareBtn.addEventListener('click', () => {
    shareMenu.classList.toggle("active");
});