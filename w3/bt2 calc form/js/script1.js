function calc() {
  var num1 = parseFloat(document.getElementById("ftextbox1").value);
  var num2 = parseFloat(document.getElementById("ftextbox2").value);
  if (isNaN(num1)) {
    document.getElementById("flabelNR").innerText =
      "Giá trị nhập ở ô thứ nhất không phải số";
    return;
  } else if (isNaN(num2)) {
    document.getElementById("flabelNR").innerText =
      "Giá trị nhập ở ô thứ hai không phải số";
    return;
  } else {
    document.getElementById("flabelNR").innerText = "";
  }
  if (document.getElementById("fradio11").checked == true) {
    document.getElementById("ftextboxR").value = num1 + num2;
  } else if (document.getElementById("fradio12").checked == true) {
    document.getElementById("ftextboxR").value = num1 - num2;
  } else if (document.getElementById("fradio21").checked == true) {
    document.getElementById("ftextboxR").value = num1 * num2;
  } else {
    document.getElementById("ftextboxR").value = num1 / num2;
  }
}
