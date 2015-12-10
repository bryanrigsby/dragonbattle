function dragonBattle(){

var name = prompt("What is your name brave knight?");
var name = name.toUpperCase();
var slaying = true;
var youHit = Math.floor(Math.random() * 2); // sets to either 
// 0 (false) or 1 (true) 
var dragonDamageThisRound = Math.floor(Math.random() * 5 + 1);// sets
// to random number between 1  up to and including 5
var dragonTotalDamage = 0;
var heroTotalDamage = 0;
var heroDamageThisRound = Math.floor(Math.random() * 5 + 1);


while(name.length<=0){
	alert("Enter a name so we will have something to put on your tombstone");
		var name = prompt("What is your name brave knight?");
	}

alert("Welcome Brave " +name+ ". You truly are our hero. Here comes the dragon!!");
	

while(slaying){
	if(youHit){
		alert("You hit the dragon by " + dragonDamageThisRound + "!");
		dragonTotalDamage += dragonDamageThisRound;
			if (dragonTotalDamage >= 10){
				alert("You have defeated the dragon!");
				alert(name + " the Great will be remembered for all times.");
				slaying = false;
				window.location="knight_wins.html";
			} 
			else if(dragonDamageThisRound <=2){
				alert("Good hit!! Perhaps a little harder next time.");
				youHit = Math.floor(Math.random() * 2);
			}
			else if(dragonDamageThisRound >=3 && dragonDamageThisRound <=4){
				alert("Fantastic!! Keep it up and you just might live.");
				youHit = Math.floor(Math.random() * 2);
			}
			else{
				alert("Bam!! Now we're talkin.")
				youHit = Math.floor(Math.random() * 2);
			};
	}
	else{
		alert("The dragon has hit brave " + name + " by " + heroDamageThisRound + "!!");
		heroTotalDamage += heroDamageThisRound;
			if (heroTotalDamage >= 10){
				alert("RIP Valiant " + name);
				slaying = false;
				window.location="dragon_wins.html"
			}
			else if(heroDamageThisRound <= 2){
				alert('Keep fighting!! You\'re the kingdom\'s only hope!!');
				var youHit = Math.floor(Math.random() * 2);
			}
			else if(heroDamageThisRound >= 3 && heroDamageThisRound <= 4){
				alert("Don't give up!!");
				var youHit = Math.floor(Math.random() * 2);
			}
			else{
				alert("Ouch! That hurt!");
				var youHit = Math.floor(Math.random() * 2);
			}
		
		
	}
}
}

function runAway(){

	window.location="runaway.html"
}
