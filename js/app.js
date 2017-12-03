document.getElementById('submit-tweet').addEventListener('click',showTweet);
document.getElementById('tweet').addEventListener('keyup',availableCharacters);

function showTweet() {
	document.getElementById('tweets').style.display = 'block';
	var tweet = document.getElementById('tweet').value;
	//estas son los nuevos elementos a crear
	var contenedorTuit = document.createElement('article');
	//segun el cuadro de inspeccionar, esta variable es la que no esta definida, si era un <p> y para eso se ocupa???
	var tiut = document.createElement('p');
	tiut.innerHTML = tweet;
	// para decirle decirle donde lo va a colocar
	tuit.appendChild(contenedorTuit);
	contenedorTuit.appendChild(document.getElementById('tweets'));
}

function availableCharacters() {
	var tweet = document.getElementById('tweet').value;
	var availableCharacters = 140 - tweet.length;
	document.getElementById('submit-tweet').disabled = tweet.length > 0 ? false : true;
	document.getElementById('available-characters').innerHTML = availableCharacters;

}
