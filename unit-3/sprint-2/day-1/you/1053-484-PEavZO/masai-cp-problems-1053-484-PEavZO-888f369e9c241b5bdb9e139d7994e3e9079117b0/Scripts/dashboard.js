body=document.getElementById("body")
bookcount=document.getElementById("book-count")
qr=JSON.parse(localStorage.getItem("book-list"))||[]
display(qr)
gr=JSON.parse(localStorage.getItem("buy-list"))||[]
lr=JSON.parse(localStorage.getItem("bookmark-list"))||[]
function display(pr){
    body.innerHTML=""
    sum=0
    bookcount.innerHTML=sum
    for(let i=0;i<pr.length;i++){
        sum++
        bookcount.innerHTML=sum
        tr=document.createElement("tr")
        td1=document.createElement("td")
        td2=document.createElement("td")
        td3=document.createElement("td")
        td4=document.createElement("td")
        td5=document.createElement("td")
        td6=document.createElement("td")
        td7=document.createElement("td")
        td8=document.createElement("td")


        td1.innerHTML=pr[i].name
        td2.innerHTML=pr[i].ath
        td3.innerHTML=pr[i].des
        td4.innerHTML=pr[i].dt 
        td5.innerHTML=pr[i].cat 
        td6.innerHTML="Buy"
        td7.innerHTML="Add"
        td8.innerHTML=pr[i].prc

        td6.addEventListener("click",function(){
            ar=qr.filter((ele)=>{
                if(ele.name==pr[i].name){
                  gr.push(ele)
    localStorage.setItem("buy-list",JSON.stringify(gr))
                }
                else{
                    return ele
                }
            })
            display(ar)
            localStorage.setItem("book-list",JSON.stringify(ar))
            qr=JSON.parse(localStorage.getItem("book-list"))
        })
        td7.addEventListener("click",function(){
            ar=qr.filter((ele)=>{
                if(ele.name==pr[i].name){
                  lr.push(ele)
    localStorage.setItem("bookmark-list",JSON.stringify(lr))
                }
                else{
                    return ele
                }
            })
            display(ar)
            localStorage.setItem("book-list",JSON.stringify(ar))
            qr=JSON.parse(localStorage.getItem("book-list"))
        })

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        body.append(tr)
    }
}
flit=document.getElementById("filter")
flit.addEventListener("change",function(){
    dr=qr.filter((ele)=>{
        if(flit.value==ele.cat){
            return ele
        }
        else if (flit.value==""){
            return ele
        }
    })
    display(dr)
})