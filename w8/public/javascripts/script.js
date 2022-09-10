$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    $.ajax({
      url: "calc",
      type: "POST",
      data: $(this).serialize(),
      success: function (res) {
        $("#num-result").text(res);
      },
    });
  });
});
