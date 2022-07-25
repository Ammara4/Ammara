let links = document.querySelector(".links");
let hamb = document.querySelector("#hamb");
let cross = document.querySelector("#cross");


hamb.addEventListener('click', function hamburger() {
    links.classList.toggle('active');
    links.style.display = "block";
});

cross.addEventListener('click', function hamburgers() {
    links.classList.remove();
    links.style.display = "none";
});







