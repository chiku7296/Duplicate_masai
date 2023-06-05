
// bookcount=document.getElementById("book-count")
qr=JSON.parse(localStorage.getItem("bookmark-list"))||[]
display(qr)
// gr=JSON.parse(localStorage.getItem("buy-list"))||[]
// lr=JSON.parse(localStorage.getItem("bookmark-list"))||[]
function display(pr){
    body=document.getElementById("body")
    
    for(let i=0;i<pr.length;i++){
    
        tr=document.createElement("tr")
        td1=document.createElement("td")
        td2=document.createElement("td")
        td3=document.createElement("td")
        td4=document.createElement("td")
        td5=document.createElement("td")
       
        td8=document.createElement("td")


        td1.innerHTML=pr[i].name
        td2.innerHTML=pr[i].ath
        td3.innerHTML=pr[i].des
        td4.innerHTML=pr[i].dt 
        td5.innerHTML=pr[i].cat 
       
        td8.innerHTML=pr[i].prc


        tr.append(td1,td2,td3,td4,td5,td8)
        body.append(tr)
    }
}
