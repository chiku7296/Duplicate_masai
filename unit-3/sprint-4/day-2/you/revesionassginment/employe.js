var body=document.getElementById("body")
 var h=document.createElement("h1")
  var sort=document.getElementById("sort")
  var filt=document.getElementById("filt")

window.addEventListener("load",function(){
    var token=JSON.parse(localStorage.getItem("token"))||[]
    if(token.length>0){
    if(token[0].email=="eve.holt@reqres.in" && token[0].pswrd=="cityslicka"){
      
    fetchdata(1)
   
      
    }
}
    else{
        h.innerHTML="Sorry Login first!"
        h.style.margin="20vh 30vw"
        h.style.color="red"
        
        body.append(h)
    }
})
async function fetchdata(pagenumber){
    try {
       var  res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?limit=10&page=${pagenumber}`)

       var  employee=await res.json()
      
        var  data=employee.data
        filter(data)
        display(data)
    } catch (error) {
        console.log(error)
    }
}
function filter(data){
filt.addEventListener("change",function(){
    let pr=data.filter((ele)=>{
     if(filt.value==ele.department){
         return ele
     }
     else{
         return false
     }
    })
          display(pr)
   })
}
 function display(data){
    body.innerHTML=""
    h.innerHTML="Token:-QpwL5tke4Pnpja7X4"
    logout=document.createElement("button")
    logout.innerHTML="LOG OUT"
    logout.setAttribute("class","logout")
    logout.addEventListener("click",function(){
        let pr=[]
        localStorage.setItem("token",JSON.stringify(pr))
        location="./index.html"
    })
    var fundiv=document.createElement("div")
        fundiv.setAttribute("class","fundiv")
        sort.addEventListener("change",function(){
          if(sort.value=="LtoH"){
            let lr=data.sort((a,b)=>{
                return a.salary-b.salary
            })
            display(lr)
          }
          else{
            let lr=data.sort((a,b)=>{
                return b.salary-a.salary
            })
            display(lr)
          }
    
        })
      
        fundiv.append(sort,filt,logout)
    body.append(h,fundiv)

    var promain=document.createElement("div")
    promain.setAttribute("class","main")
    promain.innerHTML=""
   for(let i=0;i<data.length;i++){
   
    main=document.createElement("div")
    img=document.createElement("img")
    h2=document.createElement("h2")
    p1=document.createElement("p")
    p2=document.createElement("p")
    p3=document.createElement("p")
    img.style.width="100px"
  
    img.setAttribute("src",data[i].image)
    h2.innerHTML=`Name:-${data[i].name}`
    p1.innerHTML=`Salary:-${data[i].salary}`
    p2.innerHTML=`Gender:- ${data[i].gender}`
    p3.innerHTML=`Department:-${data[i].department  }`
    
    main.append(img,h2,p1,p2,p3)
    promain.append(main)
    body.append(promain)
   }
    button()
 }
 function button(){
var bdiv=document.createElement("div")
bdiv.setAttribute("class","btn")
    for(let j=1;j<8;j++){
        btn=document.createElement("button")
        btn.innerHTML=j
        btn.setAttribute("id",j)

        btn.addEventListener("click",function(){
            fetchdata(j)
        })
        bdiv.append(btn)

    }
    body.append(bdiv)
 }

 




