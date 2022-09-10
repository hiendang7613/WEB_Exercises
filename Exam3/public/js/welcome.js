curKeyword = "end";
pageCount = 0;

async function loadpage() {
  search(curKeyword);
}

async function getFilmInfo(imdbID) {
  const resJSON = await fetch("http://localhost:8000/id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      i: imdbID,
    }),
  });
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
            <a class="btn btn-secondary" href="http://localhost:8000/detail?id=${film.imdbID}" role="button">Detail</a>
            </div>
    </div>
    `);
  info = await getFilmInfo(film.imdbID);
  console.log(info)
  a = film.imdbID + "-txt";
  document.getElementById(a).innerText = info.Plot;
}

async function search(keyword, page = 1) {
  const resJSON = await fetch("http://localhost:8000/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      s: keyword,
      page: page,
    }),
  });
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
