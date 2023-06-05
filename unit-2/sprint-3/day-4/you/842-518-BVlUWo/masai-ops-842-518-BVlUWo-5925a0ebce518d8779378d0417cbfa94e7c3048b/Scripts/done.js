tbody=document.getElementById("body")


gata=JSON.parse(localStorage.getItem("done-list"))||[]
display(gata)
function display(pr){
    tbody.innerHTML=""
for(let i=0; i<pr.length;i++){
    tr=document.createElement("tr")
    td1=document.createElement("td")
    td2=document.createElement("td")
    td3=document.createElement("td")
    td4=document.createElement("td")
    td5=document.createElement("td")
    
    td1.innerHTML=pr[i].n
    td2.innerHTML=pr[i].d
    td3.innerHTML=pr[i].s
    td4.innerHTML=pr[i].e
    td5.innerHTML=pr[i].sl
   
    
     
     
    
    tr.append(td1,td2,td3,td4,td5)
    tbody.append(tr)
}
}