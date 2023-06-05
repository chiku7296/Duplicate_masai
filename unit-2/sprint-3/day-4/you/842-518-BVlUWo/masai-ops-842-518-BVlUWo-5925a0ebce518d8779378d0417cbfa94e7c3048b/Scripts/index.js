namel=document.getElementById("name")
des=document.getElementById("desc")
myform=document.getElementById("form")
start=document.getElementById("start")
end=document.getElementById("end")
select=document.getElementById("priority")

    
//  ar=JSON.parse(localStorage.getItem("task-list"))||[]
let ar=[]

myform.addEventListener("submit",function(e){
    e.preventDefault()
   
    n=namel.value
    d=des.value
    s=start.value
    e=end.value
    sl=select.value
    let obj={n,d,s,e,sl}
    ar.push(obj)
    localStorage.setItem("task-list",JSON.stringify(ar))

})