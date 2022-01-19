//callback
//older method until 2015


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

function createPost(post, callback) {
	setTimeout(()=>{
		posts.push(post);
		console.log("before calling getPosts");
		var prom = callback();
		prom.then((myvar)=>{
			console.log("Resolved!");
			console.log(myvar);
		})
	}, 2000);
}

//var prom = getPosts();
//console.log(prom);
//prom.then(function(myvar){
//	console.log(myvar);
//})

createPost({ title:'Post three', body: 'This is post three'},getPosts);




//promises
//2016



//async-await
//new method