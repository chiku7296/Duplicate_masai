import { baseServerURL } from "../templateConstants.js"; // Make no Changes here
var index=document.getElementById("index")
var stock=document.getElementById("stock")
var body=document.getElementById("body")
var page=document.getElementById("pagination")
var filt=document.getElementById("filter")   
var auth=JSON.parse(localStorage.getItem("auth"))||[]

index.addEventListener("click",function(e){
    e.preventDefault()
   if(auth.length>0){
    location="./index.html"
   }
   else{
    location="./signin.html"
   }
})
stock.addEventListener("click",function(e){
    e.preventDefault()
   if(auth.length>0){
    location="./newStock.html"
   }
   else{
    location="./signin.html"
   }
})
window.addEventListener("load",function(e){
e.preventDefault()
        fetchdata(1,5)
        pagedata()
    })
  async function fetchdata(pagenumber,limit){
    
    try {
       var  res=await fetch(`${baseServerURL}/stocks?_page=${pagenumber}&_limit=${limit}`,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${auth[0].auth}`
                
            }
            
        
       })
        var data= await res.json()

        console.log(data)
        display(data)
       
    
    } catch (error) {
        console.log(error)
    }
  }
   

function display(data){
   body.innerHTML=""
   for(let i=0;i<data.length;i++){
    let row=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    let td4=document.createElement("td")
    let td5=document.createElement("td")
    let td6=document.createElement("td")
    let td7=document.createElement("td")
    let td8=document.createElement("button")

    td1.innerHTML=data[i].name
    td2.innerHTML=data[i].category
    td3.innerHTML=data[i].sector
    td4.innerHTML=data[i].price
    td5.innerHTML=data[i].quantity
    td6.innerHTML=data[i].price*data[i].quantity
    td7.innerHTML=data[i].addDate
    td8.innerHTML="Sell"

    td8.addEventListener("click",function(){
        
        fetchdat(data[i].id)
   
        async function fetchdat(id){
          
          try {
             var  res=await fetch(`${baseServerURL}/stocks/${id}`,{
                  method:"DELETE",
                  headers:{
                      'Content-Type':'application/json',
                      Authorization: `Bearer ${auth[0].auth}`
                      
                  }
                  
              
             })
             fetchdata()
         
          } catch (error) {
              console.log(error)
          }
        }
       
    })

    row.append(td1,td2,td3,td4,td5,td6,td7,td8)
    body.append(row)
   }
}
function pagedata(){
     page.innerHTML=""
     fetch(`${baseServerURL}/stocks`,{
        method:"GET",
              headers:{
                  'Content-Type':'application/json',
                  Authorization: `Bearer ${auth[0].auth}`
                  
              }
    }).then((rep)=>{
        return rep.json()
     }).then((gata)=>{
        var a=Math.ceil(gata.length/10)
        for(let j=1;j<=a;j++){
            var  btn=document.createElement("button")
             btn.innerHTML=j
             btn.addEventListener("click",function(){
                 fetchdata(j,10)
             })
             page.append(btn)
           }
     }).catch((error)=>{
        console.log(error)
     })
    }   
    filt.addEventListener("change",function(){
        
    })
     
