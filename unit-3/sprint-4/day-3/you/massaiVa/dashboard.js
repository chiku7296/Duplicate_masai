body=document.getElementById("body")
filter=document.getElementById("filt")
sort=document.getElementById("sort")
let record=JSON.parse(localStorage.getItem("record"))||[]
let vac=JSON.parse(localStorage.getItem("vaccine"))||[]
let tempp=JSON.parse(localStorage.getItem("temp"))||[]
display(record)
function display(data){
    body.innerHTML=""
    for(let i=0;i<data.length;i++){
        tr=document.createElement("tr")
        tr.setAttribute("id","tr")
        td1=document.createElement("td")
        td2=document.createElement("td")
        td3=document.createElement("td")
        td5=document.createElement("td")
        td6=document.createElement("td")

        td7=document.createElement("td")
        td8=document.createElement("td")

        td1.innerHTML=data[i].uniq
        td2.innerHTML=data[i].name
        td3.innerHTML=data[i].age
        td5.innerHTML=data[i].pri
        td6.innerHTML=data[i].vac

        td7.innerHTML="Delete"
        td7.style.backgroundColor="red"
        td8.style.backgroundColor="green"
        td8.innerHTML="Vaccineted"

        td7.addEventListener("click",function(){
            let lr=record.filter((ele)=>{
                if(ele.uniq==data[i].uniq){
                    return false
                }
                else{
                    return true
                }
            })
            display(lr)
            localStorage.setItem("record",JSON.stringify(lr))
         
            record=JSON.parse(localStorage.getItem("record"))
        })
        
        td8.addEventListener("click",function(){
            let lr=record.filter((ele)=>{
                if(ele.uniq==data[i].uniq){
                    return false
                }
                else{
                    return true
                }
            })
            record.filter((ele)=>{
                if(ele.uniq==data[i].uniq){
                    vac.push(ele)
                    localStorage.setItem("vaccine",JSON.stringify(vac))
                    return true
                }
                
            })
            display(lr)
          
            
            localStorage.setItem("record",JSON.stringify(lr))
            record=JSON.parse(localStorage.getItem("record"))
        })
        tr.append(td1,td2,td3,td5,td6,td7,td8)
        body.append(tr)
    }
    localStorage.setItem("temp",JSON.stringify(data))
    tempp=JSON.parse(localStorage.getItem("temp"))
}
filter.addEventListener("change",function(){
    filt=record.filter((ele)=>{
        if(ele.vac==filter.value){
            return true
        }
        else{
            return false
        }
    })
    display(filt)
    localStorage.setItem("temp",JSON.stringify(filt))
    
})
sort.addEventListener("change",function(){
   if(sort.value=="LH"){
    srt=tempp.sort((a,b)=>{
        return a.age-b.age
    })
}
else if(sort.value=="HL"){
    srt=tempp.sort((a,b)=>{
        return b.age-a.age
    })   
} 
   
    display(srt)
})