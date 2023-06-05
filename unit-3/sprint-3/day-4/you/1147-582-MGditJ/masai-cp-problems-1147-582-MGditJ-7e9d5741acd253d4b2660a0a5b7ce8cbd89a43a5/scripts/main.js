// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

loginUserButton.addEventListener("click",function(){
  let userobj={
  "username":loginUserUsername.value,
    "password": loginUserPassword.value
  }
 fetchdata(userobj)
  async function fetchdata(obj){
    try {
      var res= await fetch(userLoginURL,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      var data = await res.json()
      var h5=document.createElement("h5")
      h5.setAttribute("class","notification info")
      h5.innerHTML=`hey ${loginUserUsername.value}, welcome back!`
      notificationWrapper.append(h5)
    
      userAuthToken=data.accessToken
      userId=data.user.id
     localStorage.setItem("localAccessToken",data.accessToken)
     localStorage.setItem("userId",data.user.id)

    
    } catch (error) {
      console.log(error)
    }
  }
})
getTodoButton.addEventListener("click",function(){
 fetchtodo()
 async function fetchtodo(){
  try {
    var resp= await fetch(urlAllTodosOfUser,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userAuthToken
      }
    })

    var  todo= await resp.json()
    console.log(todo)
    mainSection.innerHTML=""
    mainSection.append(todolist(todo))
         
  } catch (error) {
    console.log(error)
  }
 }
})
 

function todolist(main){
  var todiv=document.createElement("div")
      todiv.setAttribute("class","todo-list-wrapper")
      todiv.setAttribute("id","todo-list-wrapper")
   for(let i=0;i<main.length;i++){
    
          var label=document.createElement("label")
          var input=document.createElement("input")
   input.setAttribute("class","todo-item-checkbox")
   input.setAttribute("data-id",main[i].id)
   input.setAttribute("type","checkbox")
   if(main[i].completed==true){
    input.setAttribute("checked","")
   }
   
   input.addEventListener("click",function(){
   
    if(main[i].completed==true){
      let ob={
        completed:false
      }
      
      inp(main[i].id,ob)
    }
    else{
      let  ob={
        completed:true
      }
      inp(main[i].id,ob)
    }
    
    async function inp(id,ob){
     try {
       var resp= await fetch(`${urlTodosBase}${id}`,{
         method:'PATCH',
         headers:{
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + userAuthToken
         },
         body: JSON.stringify(ob)

       })
   
       var  todo= await resp.json()
       
            
     } catch (error) {
       console.log(error)
     }
    }
   })
  //  label.innerHTML=main[i].title
   label.append(input,main[i].title)
   todiv.append(label)
    
   

   }
   return todiv   
}







