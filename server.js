const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	let {url} = req;
	console.log(url);
	switch(url) {
		case '/':
			let stream = fs.createReadStream('index.html');
			stream.pipe(res);
			break;
		case 'get_description':
			res.end('Description from the server');
	}
}).listen(3000);