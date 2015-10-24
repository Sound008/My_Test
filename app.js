var HP = 100;
var hits = 0;



function Destroy() {
	hits++
	document.getElementById('hitpoints').innerHTML = "You took down " + hits + "/100 of his HP.";

		if(hits === 100)
			alert("Congrats! You have successfully defeated the evil Jefflord. Do not stop this page from creating additional dialogues.")

		if(hits === 150)
			alert("Stop, he's already dead.")
		if(hits === 200)
			alert("Last. Warning. Stop. Now.")
		if(hits === 201)
			alert("Screw you.")
};
