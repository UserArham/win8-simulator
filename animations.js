function metroSlideIn(el) {
    el.style.transform = "translateX(100%)";
    el.style.opacity = 0;

    setTimeout(() => {
        el.style.transition = ".4s ease";
        el.style.transform = "translateX(0)";
        el.style.opacity = 1;
    }, 20);
}

function metroFade(el) {
    el.style.transition = ".3s";
    el.style.opacity = 0;
}
