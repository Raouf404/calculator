function plus() {
  let operators = ['+', '-', '/', '*'];
  for (let i = 0; i < operators.length; i++) {
    if (form.math.value.slice(-1) === operators[i]) {
      form.math.value = form.math.value.slice(0, -1) + '+';
      return;
    }
  }
  form.math.value += '+'
}
function minus() {
  let operators = ['+', '-', '/', '*'];
  for (let i = 0; i < operators.length; i++) {
    if (form.math.value.slice(-1) === operators[i]) {
      form.math.value = form.math.value.slice(0, -1) + '-';
      return;
    }
  }
  form.math.value += '-'
}
function divide() {
  let operators = ['+', '-', '/', '*'];
  for (let i = 0; i < operators.length; i++) {
    if (form.math.value.slice(-1) === operators[i]) {
      form.math.value = form.math.value.slice(0, -1) + '/';
      return;
    }
  }
  form.math.value += '/'
}
function mult() {
  let operators = ['+', '-', '/', '*'];
  for (let i = 0; i < operators.length; i++) {
    if (form.math.value.slice(-1) === operators[i]) {
      form.math.value = form.math.value.slice(0, -1) + '*';
      return;
    }
  }
  form.math.value += '*'
}