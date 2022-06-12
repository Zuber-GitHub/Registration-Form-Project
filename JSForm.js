let formName = document.getElementsByTagName("form")[0]
let display = formName.addEventListener('submit',sendData)
let count_01 = 0


document.addEventListener('DOMContentLoaded', function(){
    for (let i = 0; i < localStorage.length; i++) {
        
        if(i==localStorage.length-1)

        {   count_01+=1
            
            const keyval = localStorage.key(i);
            
            const val = localStorage.getItem(keyval)
            let newVal = JSON.parse(val)
            
            document.getElementById("fname").value = newVal.Name
            
        }
    
    }

}

)
function sendData(e)


{   
    // count_01+=1
    e.preventDefault()
    let infoObj= {
    "Name": document.getElementById("fname").value,
    "Email": document.getElementById("email").value,
    "Phone": document.getElementById("phone").value,
    "Time":  document.getElementById("birthdaytime").value,
    "count_01":count_01
    
    }
    
    let serializedObj = JSON.stringify(infoObj)
    let newName = localStorage.setItem(infoObj.Name,serializedObj)
    let reloadObj = localStorage.getItem(infoObj.Name)
    let reloadString = JSON.parse(reloadObj)
    let li = document.createElement('li')
    li.className = 'listItems'
    li.appendChild(document.createTextNode(reloadString.Name + " " + 'Email is:' +  reloadString.Email))
    let mainClass = document.querySelector('#users')
    mainClass.appendChild(li)
    function createDelButton()
    {
        let button = document.createElement('button')
        button.innerHTML = "Delete"
        button.className = 'deleteButton'
        button.id = 'deleteButton'
        button.setAttribute('title','Deletes the User')
        button.style.backgroundColor = 'red'
        button.style.border = 'solid 1px orange'
        button.style.alignContent = 'right  '       
        li.appendChild(button)
        return button
    }
    let buttonActive = createDelButton()
    
    function createEditBtn()
    {
        let editBtn = document.createElement('button')
        editBtn.innerHTML = "Edit"
        editBtn.className = 'editButton'
        editBtn.id = 'editButton'
        editBtn.setAttribute('title','Edit the User details')
        editBtn.style.backgroundColor = 'white'
        editBtn.style.border = 'solid 1px orange'
        li.appendChild(editBtn)
        return editBtn
    }
    let retEdit = createEditBtn()
    


    buttonActive.addEventListener('click', deleteButton)
    function deleteButton()
    {   if(confirm('Are you sure?'))
        {
            mainClass.removeChild(li)
            localStorage.removeItem(reloadString.Name)

            
        }
        
    }
    
    retEdit.addEventListener('click', function(){
        let editUserName = prompt('Edit Name')
        let editUserEmail = prompt('Edit Email')
        li.textContent = editUserName + " " + 'Email is:' + editUserEmail 
        let newButton = createDelButton()
        newButton.addEventListener('click',function()
        {
            deleteButton()
        })
        let newEditBtn = createEditBtn()
        newEditBtn.addEventListener('click',function()
        {
            let editUserName = prompt('Edit Name')
            let editUserEmail = prompt('Edit Email')
            li.textContent = editUserName + " " + 'Email is:' + editUserEmail 
            let newButton = createDelButton()
            newButton.addEventListener('click',function()
            {
                deleteButton()
            })
        })
        
        
      

        

        // deleteButton()

        
      
    
        
        

    })
  

    
    
    
    
    
    
//     localStorage.setItem('The Name is',document.getElementById("fname").value)
//     localStorage.setItem('The Email is',document.getElementById("email").value)
//     localStorage.setItem('The Phone Number is',document.getElementById("phone").value)
//     localStorage.setItem('The Meeting time is',document.getElementById("birthdaytime").value)
// 
    
}
// let reloadObj = localStorage.getItem("Info")
// let reloadString = JSON.parse(reloadObj)
// document.getElementById("fname").value = reloadString.Name
// document.getElementById("email").value = reloadString.Email
// document.getElementById("phone").value = reloadString.Phone
// document.getElementById("birthdaytime").value = reloadString.Time


//Adding a Comment line

