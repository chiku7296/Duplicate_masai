myform=document.getElementById("form")
let data=JSON.parse(localStorage.getItem("record"))||[]
myform.addEventListener("submit",function(e){
    e.preventDefault()
    un=document.getElementById("id")
    nam=document.getElementById("name")
    age=document.getElementById("age")
    
    
    if(age.value>40 || age.value<18){
        alert("enter valid age")
    }
    desg=document.getElementById("desg")
    prty=document.getElementById("prty")
    vaccine=document.getElementById("vaccine")

    let obj={}
    if(nam.value.length<4){
        alert("name length must greater than 4")
    }
   
    if(age.value>=18 && age.value<=40 && nam.value.length>=4){
        obj.uniq=un.value
        obj.name=nam.value
        obj.age=age.value
       
        
        obj.pri=prty.value
        obj.vac=vaccine.value
        data.push(obj)
        
    localStorage.setItem("record",JSON.stringify(data))
    }
   
 
    
   

})

