myapikey = "418f0031";
curKeyword = "end";
pageCount = 0;

async function loadpage() {
  search(curKeyword);
}

async function getFilmInfo(imdbID) {
  const resJSON = await fetch(
    `https://www.omdbapi.com/?i=${imdbID}&apikey=${myapikey}`
  );
  return await resJSON.json();
}
//style="display:none"
async function AddSearchItem(film) {
  $("#list-film-container").append(`
    <div class="col">
        <div id="${film.imdbID}" class="card h-100">
            <img src="${film.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${film.Title} (${film.Year})</h5>
                <p id="${film.imdbID}-txt" class="card-text">loading...</p>
            </div>
            <button class="btn-more" id="${film.imdbID}-btn"
            >More..</button>
            <div id="${film.imdbID}-more" >
                <p id="${film.imdbID}-Rated"> Rated : ${film.Rated}</p>
                <p id="${film.imdbID}-Ratings"> Ratings : ${film.imdbRating}</p>
                <p id="${film.imdbID}-Metascore"> Metascore : ${film.Metascore}</p>
                <p id="${film.imdbID}-Released"> Released : ${film.Released}</p>
                <p id="${film.imdbID}-Runtime"> Runtime : ${film.Runtime}</p>
                <p id="${film.imdbID}-Genre"> Genre : ${film.Genre}</p>
                <p id="${film.imdbID}-Director"> Director : ${film.Director}</p>
                <p id="${film.imdbID}-Writer"> Writer : ${film.Writer}</p>
                <p id="${film.imdbID}-Language"> Language : ${film.Language}</p>
                <p id="${film.imdbID}-Country"> Country : ${film.Country}</p>
                <p id="${film.imdbID}-Awards"> Awards : ${film.Awards}</p>
            </div>
            <p id="${film.imdbID}-txt" class="card-text">loading...</p>

            </div>
    </div>
    `);
  info = await getFilmInfo(film.imdbID);
  a = film.imdbID + "-txt";
  document.getElementById(a).innerText = info.Plot;
  document.getElementById(film.imdbID + "-Rated").innerText = info.Rated;
  document.getElementById(film.imdbID + "-Ratings").innerText = info.Ratings;
  document.getElementById(film.imdbID + "-Metascore").innerText =
    info.Metascore;
  document.getElementById(film.imdbID + "-Released").innerText = info.Released;
  document.getElementById(film.imdbID + "-Runtime").innerText = info.Runtime;
  document.getElementById(film.imdbID + "-Genre").innerText = info.Genre;
  document.getElementById(film.imdbID + "-Director").innerText = info.Director;
  document.getElementById(film.imdbID + "-Writer").innerText = info.Writer;
  document.getElementById(film.imdbID + "-Language").innerText = info.Language;
  document.getElementById(film.imdbID + "-Country").innerText = info.Country;
  document.getElementById(film.imdbID + "-Awards").innerText = info.Awards;
  document.getElementById(film.imdbID + "-Writer").innerText = info.Writer;
}

async function search(keyword, page = 1) {
  const resJSON = await fetch(
    `https://www.omdbapi.com/?apikey=${myapikey}&s=${keyword}&page=${page}`
  );
  const films = await resJSON.json();
  if (typeof films.Error !== "undefined") {
    $("#list-film-container").empty();
    console.log(films.Error);
    $("#list-film-container").append("<p>Không có nha!!</p>");
    return;
  }

  $("#list-film-container").empty();
  for (const [index, film] of films.Search.entries()) {
    if (index == 9) break;
    AddSearchItem(film);
    pageCount = Math.floor(film.totalResults / 10) + 1;
  }
}

async function halu(keyword) {
  //   const resJSON = await fetch(
  //     "https://imdb8.p.rapidapi.com/actors/get-all-filmography?nconst=nm0001667",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "imdb8.p.rapidapi.com",
  //         "x-rapidapi-key": "220854c483msh211ac59cd8eb2dep18c436jsn85e3a77d6a4f",
  //       },
  //     }
  //   );
  //   const films = await resJSON.json();
  //   console.log(films);

  fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "220854c483msh211ac59cd8eb2dep18c436jsn85e3a77d6a4f",
    },
  })
    .then((response) => {
      const films = response.json();
      console.log(films);
    })
    .catch((err) => {
      console.error(err);
    });
}

function show() {}

$().ready(() => {
  //halu();
  loadpage();
  $("#form-search").submit(function () {
    curKeyword = $("#txt-search").val();
    search(curKeyword);
    return false;
  });
  $(".page-item").click((e) => {
    search(curKeyword, e.target.innerText);
  });
  $(".btn-more").bind("click", function (e) {
    alert("sdfsd");
    console.log(e.target.id);
    console.log("e.target.id");
  });
});
