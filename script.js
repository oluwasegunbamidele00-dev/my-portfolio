const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

const links = navLinks.querySelectorAll("a");
links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show")
    })
}) 