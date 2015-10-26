var HP = 100;
var hits = 100;



function Destroy() {
	hits--
	document.getElementById('hitpoints').innerHTML = "HP Left: " + hits + ".";

		if(hits === 0)
			alert("Congrats! You have successfully defeated the evil Jefflord. Do not stop this page from creating additional dialogues.")

		else if(hits === -50)
			alert("Stop, he's already dead.")
		else if(hits === -200)
			alert("Last. Warning. Stop. Now.")
		else if(hits === -201)
			alert("Screw you.")
};
