//async-await
const posts = [
	{title: 'post one',body:'this is post one'},
	{title: 'post two',body:'this is post two'}
]

function getPosts() {
	var output = '';
	var promise = new Promise(function(resolve,reject){
		setTimeout(()=> {
			for (var i = 0, len = posts.length; i < len; i++) {
				let post = posts[i];
				output += `<li>${post.title}</li>`;
			}
			resolve(output);
		}, 1000);
	})
	return promise;
}


function createPost(post){
	return new Promise((resolve,reject)=> {
		posts.push(post);

		const error = false;

		if(!error) {
			resolve();
		}else{
			reject('error! Something went Super wrong');
		}
	}, 2000)
}


async function init() {
	await createPost({title: 'Post Three', body: 'This is post three'});
		
    var result = getPosts();
	console.log(result); //prints promise
	
	result = await getPosts();
	console.log(result); //prints posts
	
}
//init();

//*********/
global.fetch = require("node-fetch");
async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	
	const data = await res.json();
	console.log(data);
}

fetchUsers();

