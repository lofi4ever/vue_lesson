new Vue({
	el: '#app',
	data: {
		title: 'Test Vue App',
		pageTitle: 'Main page',
		linkToGithub: 'https://github.com/lofi4ever',
		pageDescription: ''
	},
	created() {
		var it = this;
		var oReq = new XMLHttpRequest();
		oReq.onload = reqListener;
		oReq.open("get", "/get_description", true);
		oReq.send();

		function reqListener () {
			console.log(this.responseText);
			it.pageDescription = this.responseText;
		}
	}
});