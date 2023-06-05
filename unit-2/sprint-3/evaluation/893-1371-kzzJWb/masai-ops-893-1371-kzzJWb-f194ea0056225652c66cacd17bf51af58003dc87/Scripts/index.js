myform=document.getElementById("form")
nam=document.getElementById("name")
mob=document.getElementById("phone")
emails=document.getElementById("email")
slc=document.getElementById("category")
slt=document.getElementById("type")

ar=[]
myform.addEventListener("submit",function(e){
e.preventDefault()
n=nam.value
m=mob.value
e=emails.value
c=slc.value
t=slt.value

let obj={n,m,e,c,t}
ar.push(obj)
localStorage.setItem("Helpers",JSON.stringify(ar))
})
