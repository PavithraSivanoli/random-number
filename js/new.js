button=document.createElement("button");
button.setAttribute("onclick","random(50)");
button.innerText="run";
document.body.appendChild(button);

function random(max) 
{
	var number = max * Math.random();
	randomNumber = parseInt(number);
	document.write(number);
}