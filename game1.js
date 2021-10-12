$(document).on("keydown",function(event){
	var flag = 0;

var colorArr = ["red","yellow","green","blue"];
var  colorSelected= "red";

var humanArray = [];
	var compArray = [];


for(var c = 0 ;c<4;c++){	
	var	randomNum = Math.floor(Math.random()*4 + 1);
		colorSelected = colorArr[randomNum];
		pressedColor(colorSelected);
		compArray.push(colorSelected);
		console.log(compArray);
		$(".btn").click(function(){
			
		})
var result = humanResponse(compArray);
		
		
if(flag === 1 ){
	break;
}
}
});


function pressedColor(varColor){
	$("." + varColor).addClass("pressed");
	setInterval(function(){
		$("." + varColor).removeClass("pressed"); 
	},100);
	var audio = new Audio("sounds/" + varColor + ".mp3");
	audio.play();
}

function humanResponse(array){
	var flag = 0;
	for(var i=0;i<array.length;i++){
			$(".btn").on("click",function(){
				pressedColor(this.id);
				if(this.id != compArray[i]){
					flag =1;
					$("h1").text("Game Over, Press Any Key to Restart");
				}
			});
			if(flag === 1){
				break;
			}
		}
	return flag;
}