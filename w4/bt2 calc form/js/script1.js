function calc() {
  var num1 = parseFloat($("#ftextbox1").val());
  var num2 = parseFloat($("#ftextbox2").val());
  if (isNaN(num1)) {
    $("#flabelNR").text("Giá trị nhập ở ô thứ nhất không phải số");
    return;
  } else if (isNaN(num2)) {
    $("#flabelNR").text("Giá trị nhập ở ô thứ hai không phải số");
    return;
  } else {
    $("#flabelNR").text("");
  }
  if ($("#fradio11").is(":checked")) {
    $("#ftextboxR").val(num1 + num2);
  } else if ($("#fradio12").is(":checked")) {
    $("#ftextboxR").val(num1 - num2);
  } else if ($("#fradio21").is(":checked")) {
    $("#ftextboxR").val(num1 * num2);
  } else {
    $("#ftextboxR").val(num1 / num2);
  }
}
