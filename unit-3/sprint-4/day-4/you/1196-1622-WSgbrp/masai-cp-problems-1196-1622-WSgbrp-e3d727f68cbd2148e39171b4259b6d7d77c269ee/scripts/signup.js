import { baseServerURL } from "../templateConstants.js"; // Make no Changes here

var myform=document.getElementById("form")
var nam=document.getElementById("name")
var email=document.getElementById("email")
var pswrd=document.getElementById("password")

myform.addEventListener("submit",function (e){
    e.preventDefault()
        
  fetchdata()
  async function fetchdata(){
    var  obj={}
    obj.username=nam.value
    obj.email=email.value
    obj.password=pswrd.value
    try {
       var  res=await fetch(`${baseServerURL}/register`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        
       })
        var data= await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
  }
   
 
    
})