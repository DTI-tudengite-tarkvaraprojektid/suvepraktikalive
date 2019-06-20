// Funktsioon õige pusle pildi valimiseks, nupu vajutamisel pannakse value localstorage ka kutsutakse pusle avanemisel välja
var nupuValue;
function foo(nupp){
	nupuValue = nupp.value;
	console.log(nupuValue);
	localStorage.setItem("nupuvalue", nupuValue);
}

