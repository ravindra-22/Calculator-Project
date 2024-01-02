function input(num) {
  var result = document.getElementById("result");
  result.value += num;
}

function cal() {
  var result = document.getElementById("result");
  var output = eval(result.value);
  result.value = output;
}

function cancel() {
  var result = document.getElementById("result");
  result.value = "";
}
