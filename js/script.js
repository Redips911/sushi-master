document.querySelector('.btnout').onclick = myClick;

function myClick () {

  let zz1 = document.getElementById('z1').value * 120;
  let zz3 = document.getElementById('z3').value * 150;
  let zz4 = document.getElementById('z4').value * 170;
  let zz5 = document.getElementById('z5').value * 250;
  let zz0 = document.getElementById('z0').value * 1;

  document.getElementById('o1').innerHTML = zz1 + zz3 + zz4 + zz5 + zz0 + "р";
  document.getElementById('o2').innerHTML = (zz1 + zz3 + zz4 + zz5 + zz0) / 2 + "р";
  document.getElementById('o3').innerHTML = (zz1 + zz3 + zz4 + zz5) / 2 + "р" + " + " + (zz0 / 2) + "р";
}

document.querySelector('.btnclear').onclick = clearClick;

function clearClick () {
  document.getElementById('z1').value = "";
  document.getElementById('z3').value = "";
  document.getElementById('z4').value = "";
  document.getElementById('z5').value = "";
  document.getElementById('z0').value = "";
  myClick();
}