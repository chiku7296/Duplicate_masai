myform=document.getElementById("form")
task=document.getElementById("name")
des=document.getElementById("desc")
sdt=document.getElementById("start")
edt=document.getElementById("end")
prt=document.getElementById("priority")

ar=JSON.parse(localStorage.getItem("task-list"))||[]
myform.addEventListener("submit",function (e){
    e.preventDefault()
    
    let obj={}
    obj.name=task.value
    obj.des=des.value
    obj.std=sdt.value
    obj.edt=edt.value
    obj.prt=prt.value

    ar.push(obj)

   localStorage.setItem("task-list",JSON.stringify(ar))
})