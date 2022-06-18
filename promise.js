const posts =
[
    {title : 'Post one' , body : 'This is post one' , createdAt : new Date().getTime()},
    {title : 'Post two' , body : 'This is post two' , createdAt : new Date().getTime()}

];


function getPosts()
{
    return new Promise((resolve, reject) =>{
        setInterval(() =>
        {
            let output = ''
            posts.forEach((post) =>
            {
                output+= `<li>${post.title} Last Edited ${post.createdAt} seconds ago</li>`;
            });
            document.body.innerHTML = output;
            // console.log(output);
            resolve()

        }, 4000)
    })
    
    
}

function createPost(post){
    return new Promise((resolve,reject) =>
    {
        setTimeout(() =>
        {
            posts.push({...post ,createdAt : new Date().getTime() });
            

            const error = false;

            if(!error){
                resolve()
            }else{
                reject('Error: Somthing is worng ')
            }
        },1000)
    })

    let updateLastUserActivityTime = new Promise((resolve, reject) => {
        setTimeout(() => {

            posts.forEach((post) => {
                post.createdAt = (new Date().getTime() - post.createdAt)/1000;
            })
            
            const error = false
    
            if(!error){
                resolve()
            }else{
                reject('Something went wrong')
            }
        }, 2000);
    })

    return  updateLastUserActivityTime;

}

function delectePost(){
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {

            if(posts.length !=0)
            {
                posts.pop(posts.length -1);
                const error = false
                if(!error){
                    resolve('')
                }else{
                    reject('Something went wrong')
                }
            }else{
                
                reject('Array is Epmty now')
            }
        },1000)
    })
}

// Promise.all(createPost({title:'Post three', body:'This is post three'}))
// .then(posts)
// .then(getPosts)

// .catch(err => console.log(err));


// updateLastUserActivityTime()
// .then(getPosts)

// delectePost()
// .then()
// delectePost()
// .then()
// delectePost()
// .then()
// delectePost()
// .then()
// .catch(err => console.log(err));

//Convert the createPost , deletePost you wrote previously into async await completely

async function printPosts(){

    await createPost({title:'Post three', body:'This is post three'})
    await getPosts()
    await createPost({title:'Post 4', body:'This is post 4'})
    await getPosts()
    await createPost({title:'Post 5', body:'This is post 5'})
    await getPosts()
    await delectePost()
}
printPosts()
