body=document.getElementById("body")

qr=JSON.parse(localStorage.getItem("done-list"))||[]
display(qr)

function display(pr){
    body.innerHTML=""
  
    for(let i=0;i<pr.length;i++){
        
tr=document.createElement("tr")
td1=document.createElement("td")
td2=document.createElement("td")
td3=document.createElement("td")
td4=document.createElement("td")
td5=document.createElement("td")


td1.innerHTML=pr[i].name
td2.innerHTML=pr[i].des
td3.innerHTML=pr[i].std
td4.innerHTML=pr[i].edt
td5.innerHTML=pr[i].prt





 
 
tr.append(td1,td2,td3,td4,td5)
body.append(tr)
    }
}