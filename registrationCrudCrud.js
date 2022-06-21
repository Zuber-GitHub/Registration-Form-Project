document.addEventListener('DOMContentLoaded', reload)
function reload(e)
{   

    axios.get("https://crudcrud.com/api/809d6c5a0256484781ba1737c902e016/userDetails").
    then(displayData =>
        {
            for(let i=0; i<displayData.data.length; i++)
            {
                showOutput(displayData.data[i])
            }
        })
}

let getCallBtn = document.getElementById('clicked')
getCallBtn.addEventListener('click', postUserData)
function postUserData(event01)
{   
    event01.preventDefault()
    console.log('Button is working')
    let canName = document.getElementById('fname').value
    let canEmail = document.getElementById('email').value              
    let canPhone = document.getElementById('phone').value
    let canTime = document.getElementById('birthdaytime').value
    let userObj = {"Name": canName, "Email":canEmail,"Phone":canPhone,"Time":canTime}
    function addUserToCrudCrud()
    {
        axios.post("https://crudcrud.com/api/809d6c5a0256484781ba1737c902e016/userDetails", userObj)
    }
    addUserToCrudCrud()
    showOutput(userObj)

}

function showOutput(obj)
{
    
    let mainClass = document.getElementById('users')
    let childClass = document.createElement('li')
    childClass.textContent = `${obj.Name}  -  ${obj.Email}  -  ${obj.Phone}  -  ${obj.Time}`
    mainClass.append(childClass)
    let editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    editBtn.style.backgroundColor = 'green'
    childClass.appendChild(editBtn)
    let delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'
    delBtn.style.backgroundColor = 'red'
    childClass.appendChild(delBtn)
    delBtn.addEventListener('click', ()=>
    {
        if(confirm('Delete User Info?'))
            {
                axios.get('https://crudcrud.com/api/809d6c5a0256484781ba1737c902e016/userDetails')
                .then(deleteObj =>
                    {
                        let results = [];

                        let toSearch = obj.Email;

                        for(var i=0; i<deleteObj.data.length; i++) {
                        for(key in deleteObj.data[i]) {
                            if(deleteObj.data[i][key].indexOf(toSearch)!=-1) {
                            results.push(deleteObj.data[i]);
                            }
                        }
                        }
                        let delId = results[0]._id
                        console.log(delId)
                        let delUrl = `https://crudcrud.com/api/809d6c5a0256484781ba1737c902e016/userDetails/${delId}`
                        console.log(delUrl)
                        axios.delete(delUrl)
 
                    })


                mainClass.removeChild(childClass)
                
                
            }
             }
             )
    editBtn.addEventListener('click', ()=>
    {   

                

            
       
        let newName = prompt('Add Name', 'Name Here')
        let newEmail = prompt('Add Email', 'Email Here')
        let newPhone = prompt('Add Phone Number','Phone Number Here')
        let newTime = prompt('Add Meeting Time','YYYY-MM-DD HH:MM')
        childClass.textContent = `${newName}  -  ${newEmail}  -  ${newPhone}  -  ${newTime}`          
        let obj01 = {Name:newName,Email:newEmail,Phone:newPhone,Time:newTime}
        childClass.append(delBtn)
        childClass.appendChild(editBtn)


        
        
        axios.get('https://crudcrud.com/api/809d6c5a0256484781ba1737c902e016/userDetails')
        .then(editObj =>
        {
            let results = [];
 
            let toSearch = obj.Email;
 
            for(let i=0; i<editObj.data.length; i++) 
            {
                for(key in editObj.data[i]) 
                {
                    if(editObj.data[i][key].indexOf(toSearch)!=-1) 
                    {
                        results.push(editObj.data[i]);
                    }
                }
            }
            let editId = results[0]._id
            console.log(editId)
            let editUrl = `https://crudcrud.com/api/809d6c5a0256484781ba1737c902e016/userDetails/${editId}`
            console.log(editUrl)
            axios.put(editUrl, obj01)
              
        }
        )

    })
}












// document.addEventListener('DOMContentLoaded', Reload)
// function Reload(event01)
// {   
//     if(localStorage.length!=0)
//     {

//         for (let i = 0; i < localStorage.length; i++) 
//         {
//             const key = localStorage.key(i);
//             let x = localStorage.getItem(key)
//             let y = JSON.parse(x)
//             function fillList(object01)
//             {
//                 let mainClass = document.getElementById('users')
//                 let childClass = document.createElement('li')
//                 childClass.textContent = `${y.Name}  -  ${y.Email}  -  ${y.Phone}  -  ${y.Time}`
//                 mainClass.append(childClass)
                
//                 let editBtn = document.createElement('button')
//                 editBtn.textContent = 'Edit'
//                 editBtn.style.backgroundColor = 'green'
//                 editBtn.style.position = 'absolute'
//                 editBtn.style.cssFloat = 'right'
//                 childClass.appendChild(editBtn)
//                 let delBtn = document.createElement('button')
//                 delBtn.textContent = 'Delete'
//                 delBtn.style.backgroundColor = 'red'
//                 delBtn.style.position = 'absolute'
//                 delBtn.style.marginLeft = '350px'
//                 childClass.appendChild(delBtn)
//                 delBtn.addEventListener('click', ()=>
//                 {
//                     if(confirm('Delete User Info?'))
//                     {
//                         mainClass.removeChild(childClass)
//                         localStorage.removeItem(y.Email)
//                     }
//                 })
//                 editBtn.addEventListener('click', ()=>
//                 {   
                    
//                     localStorage.removeItem(y.Email)
//                     let newName = prompt('Add Name',y.Name)
//                     let newEmail = prompt('Add Email',y.Email)
//                     let newPhone = prompt('Add Phone Number',y.Phone)
//                     let newTime = prompt('Add Meeting Time','YYYY-MM-DD HH:MM')
//                     childClass.textContent = `${newName}  -  ${newEmail}  -  ${newPhone}  -  ${newTime}`          
//                     let obj01 = {Name:newName,Email:newEmail,Phone:newPhone,Time:newTime}
//                     let obj01_serialized = JSON.stringify(obj01)
//                     localStorage.setItem(newEmail,obj01_serialized)
//                     childClass.append(delBtn)
//                     childClass.appendChild(editBtn)


//                 })
//             }

//             fillList(y)
        
//         }  
//     }         
        
//         let getCallBtn = document.getElementById('clicked')
//         getCallBtn.addEventListener('click',fetchData)
//         function fetchData(event02)
//         {   
//             event02.preventDefault()  
//             let canName = document.getElementById('fname').value
//             let canEmail = document.getElementById('email').value 
//             let canPhone = document.getElementById('phone').value
//             let canTime = document.getElementById('birthdaytime').value
//             let y = {Name:canName,Email:canEmail,Phone:canPhone,Time:canTime}
//             let mainClass = document.getElementById('users')
//             let childClass = document.createElement('li')
//             childClass.textContent = `${y.Name}  -  ${y.Email}  -  ${y.Phone}  -  ${y.Time}`
//             mainClass.append(childClass)
//             x = JSON.stringify(y)
//             localStorage.setItem(y.Email,x)
//             let editBtn = document.createElement('button')
//             editBtn.textContent = 'Edit'
//             editBtn.style.backgroundColor = 'green'
//             editBtn.style.position = 'absolute'
//             editBtn.style.cssFloat = 'right'
//             childClass.appendChild(editBtn)
//             let delBtn = document.createElement('button')
//             delBtn.textContent = 'Delete'
//             delBtn.style.backgroundColor = 'red'
//             delBtn.style.position = 'absolute'
//             delBtn.style.marginLeft = '350px'
//             childClass.appendChild(delBtn)
//             delBtn.addEventListener('click', ()=>
//                 {
//                     if(confirm('Delete User Info?'))
//                     {
//                         mainClass.removeChild(childClass)
//                         localStorage.removeItem(y.Email)
                    
//                     }
//                 })
//                 editBtn.addEventListener('click', ()=>
//                 {       
//                     if(localStorage.length!=0)
//                     {
//                         localStorage.removeItem(y.Email)
//                     }
//                     let newName = prompt('Add Name',y.Name)
//                     let newEmail = prompt('Add Email',y.Email)
//                     let newPhone = prompt('Add Phone Number',y.Phone)
//                     let newTime = prompt('Add Meeting Time','YYYY-MM-DD HH:MM')
//                     childClass.textContent = `${newName}  -  ${newEmail}  -  ${newPhone}  -  ${newTime}`          
//                     let obj01 = {Name:newName,Email:newEmail,Phone:newPhone,Time:newTime}
//                     let obj01_serialized = JSON.stringify(obj01)
//                     localStorage.setItem(newEmail,obj01_serialized)
//                     childClass.append(delBtn)
//                     childClass.appendChild(editBtn)


//                 })


    
//     }
   
// }



