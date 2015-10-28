alert("Watch out!! There's a dragon coming!! Will you stay and fight the dragon?");
var name = prompt("What is your name brave knight?");
alert("Welcome valiant " + name + ". Prepare for battle.");

var slaying = true;
var youHit = Math.floor(Math.random() * 2); // sets to either 
// 0 (false) or 1 (true) 
var damageThisRound = Math.floor(Math.random() * 5 + 1);// sets
// to random number between 1  up to and including 5
var totalDamage = 0;

while(slaying){
	if(youHit){
		alert("You hit the dragon by " + damageThisRound + " !");
		totalDamage += damageThisRound;
			if (totalDamage >= 4) {
				alert("You have defeated the dragon!");
				alert("Valiant " + name + " will be remembered for all times");
				slaying = false;
			} else{
				youHit = Math.floor(Math.random() * 2);
			};
	}
	else{
		alert("The dragon has defeated you.");
		alert("RIP valiant " + name);
		slaying = false;
	}
}

