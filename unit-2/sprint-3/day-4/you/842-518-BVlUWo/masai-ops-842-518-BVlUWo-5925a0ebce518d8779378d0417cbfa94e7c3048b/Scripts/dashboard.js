select=document.getElementById("filter")
span=document.getElementById("task-count")
tbody=document.getElementById("body")
data=JSON.parse(localStorage.getItem("task-list"))||[]


display(data);


qr=JSON.parse(localStorage.getItem("priority-list"))||[]

function display(pr){
    
    span.innerHTML=pr.length
    tbody.innerHTML=""
for(let i=0; i<pr.length;i++){
    tr=document.createElement("tr")
    td1=document.createElement("td")
    td2=document.createElement("td")
    td3=document.createElement("td")
    td4=document.createElement("td")
    td5=document.createElement("td")
    td6=document.createElement("td")
    td1.innerHTML=pr[i].n
    td2.innerHTML=pr[i].d
    td3.innerHTML=pr[i].s
    td4.innerHTML=pr[i].e
    td5.innerHTML=pr[i].sl
    td6.innerHTML="Add"
    
     td6.addEventListener("click",function(){
      
    
       
      lr=pr.filter((ele)=>{
        if(ele==pr[i]){
        qr.push(pr[i])
        
        localStorage.setItem("priority-list",JSON.stringify(qr))
            return false;
        }
        else{
            return true;
        }
    
        
      })
      
      localStorage.setItem("task-list",JSON.stringify(lr))
      display(lr)
     })
    tr.append(td1,td2,td3,td4,td5,td6)
    tbody.append(tr)
}
}
select.addEventListener("change",function(){
    if(select.value=="Low"){
        vr=data.filter((ele)=>{
            if(ele.sl=="Low"){
                return true;
            }
        })
        // console.log(vr)
        display(vr)
    }
    else  if(select.value=="High"){
        vr= data.filter((ele)=>{
            if(ele.sl=="High"){
                return true;
            }
        })
        display(vr)
    }
    else  if(select.value=="Medium"){
        vr=data.filter((ele)=>{
            if(ele.sl=="Medium"){
                return true;
            }
        })
        display(vr)
    }
    else{
        display(data)
    }
})

