const matt = document.getElementById("matt");
function calculate1() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const result = num1.value * num2.value * 800;
  alert(`${result} KSH`);
}

const gloss = document.getElementById("gloss");
function calculate2() {
  const num3 = document.getElementById("num3");
  const num4 = document.getElementById("num4");
  const result = num3.value * num4.value * 700;
  alert(`${result} KSH`);
}

const canvas = document.getElementById("canvas");
function calculate3() {
  const num5 = document.getElementById("num5");
  const num6 = document.getElementById("num6");
  const result = num5.value * num6.value * 1000;
  alert(`${result} KSH`);
}

const rollup = document.getElementById("rollup");
function calculate4() {
  const num7 = document.getElementById("num7");
  const num8 = document.getElementById("num8");
  const result = num7.value * num8.value * 1500;
  alert(`${result} KSH`);
}
