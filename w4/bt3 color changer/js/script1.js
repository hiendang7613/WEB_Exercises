window.onload = function () {
  $("input[type='color']").on("input", function () {
    let color1 = $("#color1").val();
    let color2 = $("#color2").val();

    $("body").css(
      "background",
      `linear-gradient(to right, ${color1}, ${color2})`
    );
  });
};
