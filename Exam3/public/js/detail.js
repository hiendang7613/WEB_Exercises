var imdbID;

async function loadpage() {
  var imdbID = $("#imdbID").text();
  console.log(imdbID)
  await Show(imdbID);
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

//style="display:none"
async function Show(imdbID) {
  let info = await getFilmInfo(imdbID);
  console.log(info);

  $("#title").text(info.Title);
  $("#plot").text(info.Plot);
  $("#Poster").attr("src",info.Poster);
  $("#Actors").text(info.Actors);
  $("#Released").text(info.Released);
  $("#Writer").text(info.Writer);
}

$().ready(() => {
  //halu();
  loadpage();
  $("#form-search").submit(function () {
    curKeyword = $("#txt-search").val();
    search(curKeyword);
    return false;
  });
});
