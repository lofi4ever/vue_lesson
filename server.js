const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	let {url, method} = req;
	console.log(url, method);
	if(url == '/') {
		let stream = fs.createReadStream('index.html');
		stream.pipe(res)
	} else if(url == '/get_description') {
		res.end('description from server');
	} else {
		try {
			if(method == 'GET') {
					let stream = fs.createReadStream(`${__dirname}${url}`);
					stream.pipe(res);
			}
		} catch(err) {
			res.end('file not found');
			console.log(`the err is ${err}`);
		}
	}
	req.on('error', (err) => console.log(`the request error is: ${error}`));
	res.on('error', (err) => console.log(`the response error is: ${error}`));
}).listen(3000);