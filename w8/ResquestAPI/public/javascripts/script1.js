async function loadpage(page) {
  const resJSON = await fetch(
    `https://reqres.in/api/users?page=${page}&per_page=2`
  );
  const users = await resJSON.json();

  $("tbody").empty();
  for (const user of users.data) {
    $("tbody").append(`
      <tr>
      <th scope="row">${user.id}</th>
      <td>${user.first_name}</td>
      <td>${user.last_name}</td>
      <td>${user.email}</td>
      <td>
          <img src="${user.avatar}" alt="Loading...">
      </td>
  </tr>
      `);
  }
}

async function search(keyword) {
  const resJSON = await fetch(`https://reqres.in/api/users?per_page=-1`);
  const users = await resJSON.json();

  $("tbody").empty();
  for (const user of users.data) {
    if (user.first_name.includes(keyword) || user.last_name.includes(keyword)) {
      $("tbody").append(`
            <tr>
              <th scope="row">${user.id}</th>
              <td>${user.first_name}</td>
              <td>${user.last_name}</td>
              <td>${user.email}</td>
              <td>
                  <img src="${user.avatar}">
              </td>
          </tr>
              `);
    }
  }
  if ($("tbody").is(":empty")) {
    $("tbody").empty();

    $("tbody").append("<p>Không có nha</p>");
  }
}

$().ready(() => {
  loadpage(1);
  $("#btn-search").click(() => {
    search($("#txt-search").val());
  });
});
