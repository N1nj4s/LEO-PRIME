//API key
const options = {
    method: 'GET', 
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDljYTA5YTNjMmMyNTY3ZjMzNmU3OGQ2MjI5MjQwMyIsIm5iZiI6MTc0MjUxMjI1MS43ODMsInN1YiI6IjY3ZGNhMDdiMzUwODkxMTQ1MjZiYTlkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MPm0dGLGnh4q7e2cfwLMFhk04BzswCTs4-DuJqDFbo8'
    }
}

// Exibir loading 
function toggleLoading() { 
    let loader = document.querySelector(".loader"); 
    loader.style.display = loader.style.display === "none" ? "block" : "none"; 
} 

// Page Scroll 
window.addEventListener("scroll", function () { 
    const navbar = document.querySelector(".navbar"); 
    if (window.scrollY > 50) {  // Corrigido "scrolly" para "scrollY"
        navbar.classList.add("scrolled"); 
    } else { 
        navbar.classList.remove("scrolled"); 
    } 
});