new Vue({
	el: '#app',
	data: {
		title: 'Test Vue App',
		pageTitle: 'Main page',
		linkToGithub: 'https://github.com/lofi4ever',
		pageDescription: ''
	},
	created() {
		sendRequest({
			method: 'GET',
			url: '/get_description',
			onSuccess: function(response) {
				console.log(response);
			}
		});
	}
});