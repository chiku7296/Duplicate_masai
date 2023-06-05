// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ -------
const UserUrl=`${baseServerURL}/users`
var MainSection=document.getElementById("data-list-wrapper")
MainSection.setAttribute("class","data-list-wrapper")
var MainPage=document.getElementById("pagination-wrapper")
    MainPage.setAttribute("class","pagination-wrapper")

window.addEventListener("load",function(){
     fetchdata(1)
})
async function fetchdata(pagenumber){
try {
  var res= await fetch(`${baseServerURL}/users?_limit=10&_page=${pagenumber}`)
   var Totalbutton=Math.ceil(res.headers.get("X-Total-Count")/10)
     
  var data= await res.json()
  button(Totalbutton)
  //  MainPage.innerHTML=""
  //  MainPage.append(button(Totalbutton))
  MainSection.innerHTML=""
  MainSection.append(mainCard(data))
} catch (error) {
  console.log(error)
}
}

function button(total){
  MainPage.innerHTML=""

  for(let j=1;j<=total;j++){
       var  btn=document.createElement("button")
        btn.setAttribute("class","pagination-button")
        btn.setAttribute("data-page-number",j)
        btn.innerHTML=j
        btn.addEventListener("click",function(){
          fetchdata(j)
        })
         MainPage.append(btn)
  }
}



function mainCard(data){
var maincardlist=document.createElement("div")
maincardlist.setAttribute("class","card-list")
for(let i=0;i<data.length;i++){
  var maincard=document.createElement("div")
    maincard.setAttribute("class","card")
    maincard.setAttribute("id",data[i].id)
  var cardimg=document.createElement("div")
  cardimg.setAttribute("class","card__img")
  var img=document.createElement("img")
      img.setAttribute("src",data[i].avatar)
      img.setAttribute("alt","Ad Minister image")
   var cardbody=document.createElement("div") 
      cardbody.setAttribute("class","card__body")  
    var h=document.createElement("h3")  
    h.setAttribute("class","card__item card__title")
    h.innerHTML=`${data[i].firstname} ${data[i].lastname}`
    var des=document.createElement("div")
        des.setAttribute("class","card__item card__description")
        des.innerHTML=data[i].email
        cardimg.append(img)
        cardbody.append(h,des)
    maincard.append(cardimg,cardbody)
    maincardlist.append(maincard)    
}
return maincardlist
}

    