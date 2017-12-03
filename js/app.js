document.getElementById('submit-tweet').addEventListener('click',showTweet);
document.getElementById('tweet').addEventListener('keyup',availableCharacters);

function showTweet() {
	document.getElementById('tweets').style.display = 'block';
	var tweet = document.getElementById('tweet').value;
	document.getElementById('tweet-content').innerHTML = tweet;	
}

function availableCharacters() {
	var tweet = document.getElementById('tweet').value;
	var availableCharacters = 140 - tweet.length;
	document.getElementById('submit-tweet').disabled = tweet.length > 0 ? false : true;
	document.getElementById('available-characters').innerHTML = availableCharacters;

}