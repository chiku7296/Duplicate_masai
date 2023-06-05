myform=document.getElementById("form")
email=document.getElementById("email")
pswrd=document.getElementById("pswrd")

token=JSON.parse(localStorage.getItem("token"))||[]
myform.addEventListener("submit",function(e){
    e.preventDefault()
   if(email.value=="eve.holt@reqres.in" && pswrd.value=="cityslicka"){
         location="./employe.html"
         alert("Log in successfull")
         let obj={}
         obj.email=email.value
         obj.pswrd=pswrd.value
         token.push(obj)
         localStorage.setItem("token",JSON.stringify(token))
   }
   else{
    alert("Enter correct details")
   }
})