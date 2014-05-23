setInterval(function() {
	document.getElementById('campic').src = 'camera.php?' + (new Date).getTime();
}, 1000);
