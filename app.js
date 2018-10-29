
var slides;
var slidesNum;

let navPrev = document.getElementById("arrow_prev");
let navNext = document.getElementById("arrow_next");
var prevSlideID = null;
var currentSlideID = 0;
var isAnimating = false;
var isAutoPlay = false;

var ourRequest = new XMLHttpRequest();

ourRequest.open('GET',  'data.json', true);
ourRequest.onload = function(){
	var Data = JSON.parse(ourRequest.responseText);
	renderInfo(Data);
}

ourRequest.send()


function renderInfo(data){

	Object.keys(data).forEach(function(key,index) {
		var element = document.getElementById("slides");
		var newElement = '<li class="slide" id="slider-0'+index+'"><a href="'+data[key].click_url+'" target="_blank"><img src="img/slider/'+data[key].img_url+'"></a></li>';
		element.insertAdjacentHTML( 'beforeend', newElement )
	 });

	 slides = document.querySelectorAll(".slide");
	 slidesNum = slides.length;

	 init();
}

function init() {

	TweenLite.set(slides, {
		left: "-100%"
	});

	navPrev.addEventListener("click", prevSlide);
	navNext.addEventListener("click", nextSlide);
	gotoSlide(0, 0);
	startAutoPlay();
}

function prevSlide() {
	var slideToGo = currentSlideID - 1;
	if (slideToGo <= -1) {
		slideToGo = slidesNum - 1;
	}
	stopAutoPlay();
	gotoSlide(slideToGo, 1, "prev");
	startAutoPlay();
}

function nextSlide() {
	var slideToGo = currentSlideID + 1;
	if (slideToGo >= slidesNum) {
		slideToGo = 0;
	}
	stopAutoPlay();
	gotoSlide(slideToGo, 1, "next");
	startAutoPlay();
	keyboardArrows();


}

function gotoSlide(slideID, _time, _direction) {
	stopAutoPlay();
	if (!isAnimating) {
		isAnimating = true;
		prevSlideID = currentSlideID;
		currentSlideID = slideID;
		var prevSlide = slides[prevSlideID];
		var currentSlide = slides[currentSlideID];
		var time = 1;
		if (_time !== null) {
			time = _time;
		}
		var direction = "next";
		if (_direction != null) {
			direction = _direction;
		}
		if (direction == "next") {

			TweenLite.to(prevSlide, time, {
				left: "-100%"
			});
			TweenLite.fromTo(currentSlide, time, {
				left: "100%"
			}, {
				left: "0"
			});
		} else {
			TweenLite.to(prevSlide, time, {
				left: "100%"
			});
			TweenLite.fromTo(currentSlide, time, {
				left: "-100%"
			}, {
				left: "0"
			});
		}
		TweenLite.delayedCall(time, function() {
			isAnimating = false;
		});
	}
	startAutoPlay();
}

function play(){
  nextSlide();
  TweenLite.delayedCall(4, play);
}

function startAutoPlay(immediate) {
	if (immediate != null) {
		immediate = false;
	}

	if (immediate) {
		nextSlide();
	}
	TweenLite.delayedCall(4, play);
}

function stopAutoPlay() {
  isAutoPlay = false;
	TweenLite.killDelayedCallsTo(play);
}

function keyboardArrows(){

	document.addEventListener("keydown", function(event) {
		switch(event.key) {

		    case "ArrowLeft":
		      prevSlide()
		      break;

		    case "ArrowRight":
		      nextSlide()
		      break;
		  }
	});

}
