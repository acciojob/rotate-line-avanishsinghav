//your JS code here. If required.
let angle = 0;
function rotateline(){
	let line = document.getElementById("line");
	if(line){
		angle += 2;
		line.style.transform = `rotate(${angle}deg)`
	}
}
setInterval(rotateLine, 20);