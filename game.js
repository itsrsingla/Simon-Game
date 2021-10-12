var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var flag = 0;

$(document).on("keydown",function(event){
	if(flag === 0 ){  
		// very important so to judge only first time keypress is allowed
	$("#level-title").text("Level " + 0);
	nextSequence();
	flag =1;
	}
})


$(".btn").on("click",function(){
	// var userChosenColor = this.id; other way of doing things.
	var userChosenColor = $(this).attr("id");
	userClickedPattern.push(userChosenColor);
	playSound(userChosenColor);
	
	checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
	// this is basically checking for each click with subsequent game pattern
	if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
		// this is where the user click has ended now.
		if(userClickedPattern.length === gamePattern.length){
			setTimeout(function(){
				nextSequence();
			},1000);
		}
	}else{
		playSound("wrong");

		$("body").addClass("game-over");
		setTimeout(function(){
			$("body").removeClass("game-over");
		},200);

		$("#level-title").text("Game Over, Press Any Key to Restart");
		startOver();
	}
}

function nextSequence(){
	// clearing the last userclicked pattern.
	userClickedPattern = [];

	level+=1;
	$("#level-title").text("Level " + level);
	
	var randomNumber = Math.floor(Math.random()*4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);
	$("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColor);
	
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
	$("#" + currentColor).addClass("pressed");
	setTimeout(function(){
		$("#" + currentColor).removeClass("pressed")
	},100);
}



function startOver(){
	flag = 0;
	level = 0;
	gamePattern = [];
}