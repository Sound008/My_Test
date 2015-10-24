var HP = 100;
var hits = 0;



function Destroy() {
	hits++
	document.getElementById('hitpoints').innerHTML = "You took down " + hits + "/100 of his HP.";

		if(hits === 100)
			alert("Congrats! You have successfully defeated the evil Jefflord. Do not stop this page from creating additional dialogues.")

		else if(hits === 150)
			alert("Stop, he's already dead.")
		else if(hits === 200)
			alert("Last. Warning. Stop. Now.")
		else if(hits === 201)
			alert("Screw you.")
};
