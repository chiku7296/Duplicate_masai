myform=document.getElementById("form")
nam=document.getElementById("name")
desc=document.getElementById("desc")
type=document.getElementById("type")
course=document.getElementById("course")
sprint=document.getElementById("sprint")
sechd=document.getElementById("schedule")

let ls=JSON.parse(localStorage.getItem("assignments"))||[]
myform.addEventListener("submit",function(e){
    e.preventDefault()
     let obj={}
     obj.name=nam.value
     obj.desc=desc.value
     obj.type=type.value
     obj.course=course.value
     obj.sprint=sprint.value
     obj.sechd=sechd.value

     ls.push(obj)
     localStorage.setItem("assignments",JSON.stringify(ls))
        
    }) 
     

