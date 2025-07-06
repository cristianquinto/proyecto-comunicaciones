// Agrega efecto al hacer scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector(".nav");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
