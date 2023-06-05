body=document.getElementById("body")
tc=document.getElementById("task-count")
flt=document.getElementById("filter")
qr=JSON.parse(localStorage.getItem("task-list"))||[]
display(qr)
gr=JSON.parse(localStorage.getItem("priority-list"))||[]
function display(pr){
    body.innerHTML=""
    let sum=0
    for(let i=0;i<pr.length;i++){
        sum++
        tc.innerHTML=sum
tr=document.createElement("tr")
td1=document.createElement("td")
td2=document.createElement("td")
td3=document.createElement("td")
td4=document.createElement("td")
td5=document.createElement("td")
td6=document.createElement("td")

td1.innerHTML=pr[i].name
td2.innerHTML=pr[i].des
td3.innerHTML=pr[i].std
td4.innerHTML=pr[i].edt
td5.innerHTML=pr[i].prt
td6.innerHTML="Add"

td6.addEventListener("click",function(){
 let ar=qr.filter((ele)=>{
    if(ele.name==pr[i].name){
        gr.push(pr[i])
       localStorage.setItem("priority-list",JSON.stringify(gr)) 
    }
    else{
        return ele
    }

 })
 display(ar)
 localStorage.setItem("task-list",JSON.stringify(ar))
 qr=JSON.parse(localStorage.getItem("task-list"))
})
tr.append(td1,td2,td3,td4,td5,td6)
body.append(tr)
    }
}
flt.addEventListener("change",function(){
lr=qr.filter((ele)=>{
    if(flt.value==ele.prt){
        return ele
    }
    else if (flt.value==""){
        return ele
    }
})
display(lr)
})