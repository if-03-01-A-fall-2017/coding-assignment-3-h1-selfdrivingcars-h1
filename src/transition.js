var images = ["vorrangGeben.jpg", "stopSign.png", "slower.jpg", "ampel.jpg", "achtungBaustelle.jpg"];
var animatedImage = document.getElementsByTagName('img')[0];
var nextImage = Math.floor(Math.random() * images.length);
var points = 0;
var date = new Date();

window.onload = function(){
  let firstButton = document.getElementById("f");
  let secondButton = document.getElementById("s");
  let thirdButton = document.getElementById("t");
  let lastButton = document.getElementById("l");

  let changeImage = document.getElementById("start");
  changeImage.onclick = function(){
    animatedImage.setAttribute("src", images[nextImage]);
    nextImage = Math.floor(Math.random() * 10 / 2);
    animatedImage.classList.add("animate");
    console.log("animation started");
    // for (let i = 0; i < images.length; i++) {
    //   let currentImage = document.getElementsByTagName('img')[0];
    //   currentImage.classList.add("animate");
    //   currentImage.setAttribute('src', images[i]);
    // }
  }
  animatedImage.onanimationstart = function() {
    console.log("started");
  }
  animatedImage.onanimationend = function() {
    console.log("animation end");
    animatedImage.classList.remove("animate");
    nextImage = Math.floor(Math.random() * 10 / 2);
    animatedImage.setAttribute("src", images[nextImage]);
    document.getElementById("p2").innerHTML = points + " points";
    setTimeout(function(){ animatedImage.classList.add("animate"); }, 3000);
  }

  firstButton.onclick = function(){
    if(nextImage === 1 || nextImage === 3){
          points += 5;
          animatedImage.classList.remove("animate");
    }
    else{
      alert("False");
      location.replace("highScorePage.html");
    }
  }

  secondButton.onclick = function(){
    if(nextImage === 0 || nextImage === 2 || nextImage === 4){
          points += 5;
          animatedImage.classList.remove("animate");
    }
    else{
      alert("False");
      location.replace("highScorePage.html");
    }
  }

  thirdButton.onclick = function(){
    if(nextImage === 0 || nextImage === 2 || nextImage === 4){
          points += 5;
          animatedImage.classList.remove("animate");
    }
    else{
      alert("False");
      location.replace("highScorePage.html");
    }
  }

  lastButton.onclick = function(){
    if(nextImage === 0 || nextImage === 2 || nextImage === 4){
          points += 5;
          animatedImage.classList.remove("animate");
    }
    else{
      alert("False");
      location.replace("highScorePage.html");
    }
  }

}
