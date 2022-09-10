window.onload = function () {
  $(".tarea").on("change keyup paste", readCode);
};

function btnHTML() {
  if ($("#field-html").css("display") == "none") {
    $("#field-html").css("display", "inline-block");
    $("#btn-html").css("background-color", "#e8a2af");
  } else {
    $("#field-html").css("display", "none");
    $("#btn-html").css("background-color", "white");
  }
}
function btnCSS() {
  if ($("#field-css").css("display") == "none") {
    $("#field-css").css("display", "inline-block");
    $("#btn-css").css("background-color", "#e8a2af");
  } else {
    $("#field-css").css("display", "none");
    $("#btn-css").css("background-color", "white");
  }
}
function btnJS() {
  if ($("#field-js").css("display") == "none") {
    $("#field-js").css("display", "inline-block");
    $("#btn-js").css("background-color", "#e8a2af");
  } else {
    $("#field-js").css("display", "none");
    $("#btn-js").css("background-color", "white");
  }
}
function btnOUT() {
  if ($("#field-out").css("display") == "none") {
    $("#field-out").css("display", "inline-block");
    $("#btn-out").css("background-color", "#e8a2af");
  } else {
    $("#field-out").css("display", "none");
    $("#btn-out").css("background-color", "white");
  }
}

function readCode() {
  let htmlCode = $("#tarea-html").val();
  let cssCode = "<style>" + $("#tarea-css").val() + "</style>";
  let jsCode = "<script>" + $("#tarea-js").val() + "</script>";
  var ifm = document.getElementById("tarea-out").contentWindow.document;
  ifm.open();
  ifm.write(htmlCode + cssCode + jsCode);
  ifm.close();
}
