let posts = [
    {title:'Post One', body:'This is Post One',createdAt:new Date().getTime()},
    {title:'Post Two', body:'This is Post Two', createdAt: new Date().getTime()}
]

function getPosts()
{
    setTimeout(()=>
    {
        let output = ''
        posts.forEach((post)=>
        {
            output+= `<li>${post.title} Last edited ${post.createdAt} seconds ago</li>`
        })
        document.body.innerHTML = output
    },4000)
}
function createPost(post)
{
    let Create =  new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            posts.push({...post , createdAt : new Date().getTime()});
            const error = false;
            if(!error)
            {
                resolve()
            }
            else
            {
                reject('Something went wrong')
            }
        },2000)
    })
    let  updateLastUserActivityTime = new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {   
            posts.forEach((post)=>
        {
            post.createdAt = ((new Date().getTime()) - (post.createdAt))
        })
            resolve()
        })
    },3000)
    return  [Create , updateLastUserActivityTime]
}

function deletePost(){
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
        if(posts.length!=0)
        {
            posts.pop()
            console.log(posts)
    
            const error = false
                if(!error)
                {
                    resolve()
                }
                else
                {
                    reject('Something went wrong')
                }
        }
        else
        {
            reject('Error: Array is Empty')
        }
       
    },3000)
})
}

Promise.all(createPost({title:'Post Three', body:'This is Post Three'})).then().then(getPosts)




//  deletePost()
//  .then()
//  deletePost()
//  .then()
//  deletePost()
//  .then()
//  deletePost()
//  .then()
//  .catch(err=> console.log(err))

