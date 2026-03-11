let moviesData = [];

// Load movies from JSON
fetch("movies.json")
.then(response => response.json())
.then(data => {

moviesData = data;
displayMovies(moviesData);

});

// Function to display movies
function displayMovies(movies){

let movieList = document.getElementById("movieList");
movieList.innerHTML = "";

if(movies.length === 0){
movieList.innerHTML = "<h3 class='text-center mt-5'>No results found</h3>";
return;
}

movies.forEach(movie => {

movieList.innerHTML += `
<div class="col-lg-3 col-md-4 col-sm-6">

<div class="card movie-card">

<div class="poster-container">
<img src="${movie.image}" class="poster">
</div>

<div class="card-body text-center">

<h5>${movie.title}</h5>

<p>${movie.genre} | ${movie.year}</p>

<div class="rating">
<span onclick="rate(this)">★</span>
<span onclick="rate(this)">★</span>
<span onclick="rate(this)">★</span>
<span onclick="rate(this)">★</span>
<span onclick="rate(this)">★</span>
</div>

</div>
</div>
</div>
`;

});

}


// Search movie
document.getElementById("search").addEventListener("keyup", function(){

let searchText = this.value.toLowerCase();

let filteredMovies = moviesData.filter(movie =>
movie.title.toLowerCase().includes(searchText)
);

displayMovies(filteredMovies);

});


// Rating system
function rate(star){

let stars = star.parentElement.children;

for(let i=0;i<stars.length;i++){
stars[i].style.color="gray";
}

for(let i=0;i<=Array.from(stars).indexOf(star);i++){
stars[i].style.color="gold";
}

}