function showMessage(){
    alert("Gracias por visitar mi CV!");
}

// Animación simple al hacer scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 400;

        if(top > offset){
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});