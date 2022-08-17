var responsiveSlider = function () {
  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 5000);
};

window.onload = function () {
  responsiveSlider();  
}; 

function getCats(cat,cat_name){ 
  if(cat_name!="all"){ 
    var namess= document.getElementsByClassName("menulist");
    var cats = document.getElementsByClassName("catz");
    for(var i=0;i<cats.length;i++){
      cats[i].style = "display:none"; 
    } 
    for(var i=0;i<namess.length;i++){
      namess[i].style = "color:white";
      namess[i].addEventListener("mouseenter",function(){
        this.style="color:#E93656";
      })
      namess[i].addEventListener("mouseleave",function(){
        this.style="color:white";
      })
    }
    document.getElementById(cat_name).style="display:block"; 
    document.getElementById(cat).style="color:#E93656";
  }else{ 
    var cats = document.getElementsByClassName("catz");
    for(var i=0;i<cats.length;i++){
      cats[i].style = "display:block";
    } 
  }
}  

function postRequest(){
  var name = document.getElementById("username").value;
  var email = document.getElementById("mailaddress").value;
  var website = document.getElementById("websiteaddress").value;
  var message = document.getElementById("message").value;

  
  var url = "http://borjomi.loremipsum.ge/api/send-message?name="+name+"&email="+email+"&website="+website+"&message="+message+"";
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url); 

  xhr.send();
  alert("Thank you for getting in touch! We appreciate you contacting us.");
}

