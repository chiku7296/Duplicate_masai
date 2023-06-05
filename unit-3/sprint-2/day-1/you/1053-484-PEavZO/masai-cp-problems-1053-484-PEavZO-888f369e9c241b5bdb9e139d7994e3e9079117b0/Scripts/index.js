
// form=document.getElementById("form")
nam=document.getElementById("name")
ath=document.getElementById("author")
des=document.getElementById("desc")
dt=document.getElementById("added")
cat=document.getElementById("category")
prc=document.getElementById("price")
qr=JSON.parse(localStorage.getItem("book-list"))||[]

form.addEventListener("submit",function (){
    

    let obj={}
    obj.name=nam.value
    obj.ath=ath.value
    obj.des=des.value
    obj.dt=dt.value
    obj.cat=cat.value
    obj.prc=prc.value

    qr.push(obj)
    localStorage.setItem("book-list",JSON.stringify(qr))

})