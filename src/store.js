window.onload = function(){
  let store = document.getElementById("store");
  let clear = document.getElementById("clear")

  store.onclick = function(){
    let name = document.getElementById('name');
    localStorage.setItem("name", "name");
  }

  clear.onclick = function(){
    localStorage.clear();
  }
}
