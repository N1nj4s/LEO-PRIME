// Exibir loading
function toggleLoading() {
    let loading = document.querySelector(".loader");
    loader.style.dysplay = loader.style.dysplay == "nome" ? "block" : "nome";    
}

// Page scoll
window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar");

    if (this.window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled")
    }
});