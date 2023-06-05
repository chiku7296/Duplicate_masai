tbody=document.getElementById("body")
slt=document.getElementById("filter")
data=JSON.parse(localStorage.getItem("Helpers"))||[]
display(data)
function display(data){
   tbody.innerHTML=""
   
    for(let i=0;i<data.length;i++){
  
    tr=document.createElement("tr")
    td1=document.createElement("td")
    td2=document.createElement("td")
    td3=document.createElement("td")
    td4=document.createElement("td")
    td5=document.createElement("td")
    if(data[i].t=="Volantier") {
    td1.innerHTML=data[i].n 
    td2.innerHTML=data[i].m 
    td3.innerHTML=data[i].e 
  
    td4.innerHTML=data[i].c
    td5.innerHTML="Delete"
    tr.append(td1,td2,td3,td4,td5)
    tbody.append(tr)
   }
    td5.addEventListener("click",function(){
        sr=data.filter((ele)=>{
            if(ele==data[i]){
            
                return false
            }
            else{
                return true;
            }
        })
        localStorage.setItem("Helpers",JSON.stringify(sr))
        display(sr)
    })
    

    }
   }


slt.addEventListener("change",function(){
    
        if(slt.value=="Covid helper fund"){
            pr=data.filter((ele)=>{
                if(ele.c==slt.value && ele.t=="Volantier"){
                    return true
                }
            })
            display(pr)
        }
       else if(slt.value=="Orphanage helper fund"){
            pr=data.filter((ele)=>{
                if(ele.c==slt.value && ele.t=="Volantier"){
                    return true
                }
            })
            display(pr)
        }
        else if(slt.value=="Ukrain war helper fund"){
            pr=data.filter((ele)=>{
                if(ele.c==slt.value && ele.t=="Volantier"){
                    return true
                }
            })
            display(pr)
        }
        else if(slt.value=="Old age home helper fund"){
            pr=data.filter((ele)=>{
                if(ele.c==slt.value && ele.t=="Volantier"){
                    return true
                }
            })
            display(pr)
        }
        else {
            pr=data.filter((ele)=>{
                if( ele.t=="Volantier"){
                    return true
                }
            })
            display(pr)
        }
    
})

