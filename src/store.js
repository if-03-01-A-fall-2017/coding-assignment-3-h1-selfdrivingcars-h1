window.onload = function(){
  let store = document.getElementById("store");
  let clear = document.getElementById("clear")

  store.onclick = function(){
    let name = document.getElementById('name');
    localStorage.setItem(name.id, name.value);
  }

  clear.onclick = function(){
    localStorage.clear();
  }
}
