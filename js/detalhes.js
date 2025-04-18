const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const media = params.get('media');

// Ao carregar a página executa as funções de buscar os dados
document.addEventListener("DOMContentLoaded", async () => {
    //buscar filmes
    getMovie();
    toggleLoading();
});

async function getMovie() {
    let movie;
    await fetch(`https://api.themoviedb.org/3/${media}/${id}?language=pt-BR`, Options)
        .then(res => res.json())
        .then(res => movie = res)
        .catch(err => console.error(err));
    //console.log(movie); 
    
    // poster
    document.querySelector('.poster').src = movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : 'img/no-poster.png';

    //detalhe do filme
    let detalhes = document.getElementById('detalhes');
    detalhes.innerHTML = `
                <h1 class="fs-1 text-danger">${movie.title ?? movie.name}</h1>
                <h4 class="mb-4 fw-bold">Titulo Orignal: ${movie.original_title ?? movie.original_name}</h4>
                <p class='mb-3'> Data de Estreia: ${FormtDate(movie.release_date ?? movie.last_air_date)}</p>
                <p class='mb-3'>Pais de Origem: ${movie.origin_country}</p>
                <p class='mb-3'>Popularidade: ${movie.popularity.toFixed(1)}</p>
                <p class='mb-3'>Status: ${movie.status}</p>
                <p class='mb-3'>${movie.overview}</p>`;
    movie.genres.forEach(genre => {
        detalhes.innerHTML += `<button class="btn btn-lg btn-outline-danger me-2">${genre.name}</button>`
    });


}