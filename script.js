fetch("movies.json")
.then(response => response.json())
.then(data => {

let movieList = document.getElementById("movieList");

data.forEach(movie => {

movieList.innerHTML += `
<div class="col-lg-3 col-md-4 col-sm-6">

<div class="card movie-card">

<img src="${movie.image}" class="card-img-top">

<div class="card-body">

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
});

function rate(star){

let stars = star.parentElement.children;

for(let i=0;i<stars.length;i++){
stars[i].style.color="gray";
}

for(let i=0;i<=Array.from(stars).indexOf(star);i++){
stars[i].style.color="gold";
}

}