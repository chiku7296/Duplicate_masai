


tbody=document.getElementById("body");


gata=JSON.parse(localStorage.getItem("priority-list"))||[]
display(gata);
gr=JSON.parse(localStorage.getItem("done-list"))||[]

function display(pr){
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
        
      sr=pr.filter((ele)=>{
        if(ele==pr[i]){
        gr.push(pr[i])
       
    localStorage.setItem("done-list",JSON.stringify(gr))
    
            return false;
        }
        else{
            return true;
        }
      })
      localStorage.setItem("priority-list",JSON.stringify(sr))
      display(sr)
     })
    tr.append(td1,td2,td3,td4,td5,td6)
    tbody.append(tr)
}
}