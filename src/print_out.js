window.onload = function(){
  sort_and_print();
}

let sort_and_print = function(){
  let array = localStorage;
  for (let i = 0; i < localStorage.length; i++) {
    let swap = 0;
    for (var e = i + 1; e < localStorage.length; e++) {
      if(array[i] < array[e]){
        swap = array[e];
        array[e] = array[i];
        array[i] = swap;
      }
    }
  }

  for (var i = 0; i < array.length; i++) {
    document.getElementById("").innerHTML = points + " points";
  }
}
