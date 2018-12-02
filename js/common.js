function sendRequest(options) {
	var xhr = new XMLHttpRequest();
	xhr.open(options.method, options.url);
	switch(options.method) {
		case 'GET':
			xhr.send();
			break;
		case 'POST':
			typeof options.body == 'undefined' ? xhr.send('') : xhr.send(options.body);
			break;
	}
	xhr.onload = function(response) {
		if(typeof options.onSuccess != 'function') return;
		options.onSuccess(response);
	}
}