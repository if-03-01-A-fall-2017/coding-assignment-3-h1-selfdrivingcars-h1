window.onload = function(){
  sort_and_print();
}

let sort_and_print = function(){
  document.getElementById('points').innerHTML = localStorage.getItem("name");
  localStorage.clear();
}
