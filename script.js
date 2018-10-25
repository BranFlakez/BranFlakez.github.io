// JavaScript Document
var songs = [
	[<p>test</p>]
	[<p><a href="https://www.google.com">test 2</a></p>]
]
function newSong() {
	var randomNumber = Math.floor(Math.random() * (songs.length));
	document.getElementById('songDisplay').innerHTML = songs[randomNumber];
}
