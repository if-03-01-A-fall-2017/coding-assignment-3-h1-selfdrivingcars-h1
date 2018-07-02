var images = ["vorrangGeben.jpg", "stopSign.png", "slower.jpg", "ampel.jpg", "achtungBaustelle.jpg"];
var animatedImage = document.getElementsByTagName('img')[0];
var nextImage = Math.floor(Math.random() * images.length);
var points = 0;
let pause = 1000;
var date = new Date();

window.onload = function() {
  let firstButton = document.getElementById("f");
  let secondButton = document.getElementById("s");
  let thirdButton = document.getElementById("t");
  let lastButton = document.getElementById("l");
  let isClicked = false;

  let changeImage = document.getElementById("start");
  changeImage.onclick = function(){
    animatedImage.setAttribute("src", images[nextImage]);
    nextImage = Math.floor(Math.random() * 10 / 2);
    animatedImage.classList.add("animate");
  }

  animatedImage.onanimationend = function() {
    if(!isClicked)wrongAnswer();
    isClicked = false;
    animatedImage.classList.remove("animate");
    nextImage = Math.floor(Math.random() * 10 / 2);
    animatedImage.setAttribute("src", images[nextImage]);
    document.getElementById("p2").innerHTML = points + " points";
    if(pause > 100)pause -= 100;
    setTimeout(function(){ animatedImage.classList.add("animate"); }, pause);
    isClicked = false;
  }

  let wrongAnswer = function() {
    alert("Wrong answer!");
    storing();
    location.replace("highScorePage.html");
  }

  firstButton.onclick = function(){
    if(nextImage === 1 || nextImage === 3){
        isClicked = true;
        points += 5;
        animatedImage.onanimationend();
    }
    else{
      wrongAnswer();
    }
  }

  secondButton.onclick = function(){
    if(nextImage === 0 || nextImage === 2 || nextImage === 4){
        isClicked = true;
        points += 5;
        animatedImage.onanimationend();
      }
    else{
      wrongAnswer();
    }
  }

  thirdButton.onclick = function(){
    if(nextImage === 0 || nextImage === 2 || nextImage === 4){
        isClicked = true;
        points += 5;
        animatedImage.onanimationend();
    }
    else{
      wrongAnswer();
    }
  }

  lastButton.onclick = function(){
    if(nextImage === 0 || nextImage === 2 || nextImage === 4){
      isClicked = true;
      points += 5;
      animatedImage.onanimationend();
    }
    else{
      wrongAnswer();
    }
  }
}

let storing = function(){
  let name1 = localStorage.getItem("name");
  let isInLocalStorage = false;
  for (var i = 0; i < localStorage.length && !isInLocalStorage; i++) {
    //if(localStorage[i] === name)isInLocalStorage = true;
    if(localStorage[i] === name1)alert("EZ KAFKA");
  }
  localStorage.setItem("name", points);
}
