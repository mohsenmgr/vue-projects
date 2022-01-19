//promises
const posts = [
	{title: 'post one',body:'this is post one'},
	{title: 'post two',body:'this is post two'}
]

function getPosts() {
	var output = '';
	var promise = new Promise(function(resolve,reject){
		console.log("inside function getPosts");
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
		
		const error = true;
		
		if(!error) {
			resolve();
		}else{
			reject('error! Something went Super wrong');
		}
	}, 2000)
}

/*
createPost({title: 'Post threee', body: 'This is post three'})
.then(getPosts().then((output)=>{console.log(output)}))
.catch(error=> console.log(error))
;
*/

//promise.all
const promise1 = Promise.resolve('hello man');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=> {
	setTimeout(resolve,2000,'Goodbye');
});

global.fetch = require("node-fetch");

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
;

Promise.all([promise1, promise2, promise3,promise4]).then(values => console.log(values))
