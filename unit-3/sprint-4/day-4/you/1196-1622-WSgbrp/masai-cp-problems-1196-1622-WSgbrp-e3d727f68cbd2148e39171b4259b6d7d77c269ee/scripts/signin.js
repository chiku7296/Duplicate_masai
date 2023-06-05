import { baseServerURL } from "../templateConstants.js"; // Make no Changes here

var myform=document.getElementById("form")
var email=document.getElementById("email")
var pswrd=document.getElementById("password")
var auth=JSON.parse(localStorage.getItem("auth"))||[]
myform.addEventListener("submit",function (e){
    e.preventDefault()
        
  fetchdata()
  async function fetchdata(){
    var  obj={}
    
    obj.email=email.value
    obj.password=pswrd.value
    try {
       var  res=await fetch(`${baseServerURL}/login`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        
       })
        var data= await res.json()

        console.log(data.accessToken)
        
           let pr={}
           pr.auth=data.accessToken
        auth.push(pr)
       
        localStorage.setItem("auth",JSON.stringify(auth))
        
        if(auth[0].auth==data.accessToken){
            location="./index.html"
        }
        else{

        }
    } catch (error) {
        console.log(error)
    }
  }
   
 
    
})