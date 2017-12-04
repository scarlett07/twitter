document.getElementById('submit-tweet').addEventListener('click',showTweet);
document.getElementById('tweet').addEventListener('keyup',availableCharacters);

function showTweet() {
	document.getElementById('tweets').style.display = 'block';
	//obtenemos el mensaje que escribio el usuario
	var tweet = document.getElementById('tweet').value;
	//creamos el espacio donde lo colocaremos
	var pTweet = document.createElement('p');
	//metemos el mensaje en el lugar y le damos el estilo con una clase.
	pTweet.className = "tweet-content";
	pTweet.innerHTML = tweet;
	//creamos las variables que nos faltan, para que quede como en el html.
	var tweetContainer = document.createElement('article');
	tweetContainer.className = "tweet";
	//le decimos donde colocar estos nuevos elementos
	tweetContainer.appendChild(pTweet);
	//console.log(tweetContainer);
	document.getElementById("tweets").appendChild(tweetContainer);
	document.getElementById('tweet').value = "";
	console.log(document.getElementById('tweets'));
}

function availableCharacters() {
	//obtenemos el mensaje donde se contaran los carácteres.
	var tweet = document.getElementById('tweet').value;
	//creamos la variable donde se guardará el nuemero de caracteres que el usuarrio sobrepaso.
	var availableCharacters = 140 - tweet.length;
	document.getElementById('submit-tweet').disabled = tweet.length > 0 ? false : true;
	document.getElementById('available-characters').innerHTML = availableCharacters;
	document.getElementById('submit-tweet').disabled = availableCharacters <= 0 ? true : false;
	if(availableCharacters <= 20 && availableCharacters > 10) {
		document.getElementById('available-characters').style.color = 'red';
	} else if (availableCharacters <= 10) {
		document.getElementById('available-characters').style.color = 'blue';
	}
}
