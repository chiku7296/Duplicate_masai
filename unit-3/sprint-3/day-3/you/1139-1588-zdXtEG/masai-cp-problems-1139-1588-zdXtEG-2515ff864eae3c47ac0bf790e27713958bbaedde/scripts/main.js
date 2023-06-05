// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// use base url from the above to make api call for different end points


// append data your coffee card to mainSection below
let mainSection = document.getElementById("data-list-wrapper");
  window.addEventListener("load",function(){
    fetchdata()
    
  })
  async function fetchdata(){
    try {
      var res=await fetch(`${baseServerURL}/coffee`)
      var data=await res.json()
      
      mainSection.append(coffe(data))
    
    } catch (error) {
      console.log(error)
    }
  }

  function coffe(data){
     var cardlist=document.createElement("div")
     cardlist.setAttribute("class","card-list")
     cardlist.innerHTML=""
     for(let i=0;i<data.length;i++){
       var maincard=document.createElement("div")
       maincard.setAttribute("class","card")
       maincard.setAttribute("data-id",i+1)
      var cardimg=document.createElement("div")
          cardimg.setAttribute("class","card__img")
      var img=document.createElement("img")  
          img.setAttribute("src",data[i].image)  
     var maincardbody=document.createElement("div")
          maincardbody.setAttribute("class","card__body")   
      var h2=document.createElement("h2")
        h2.setAttribute("class","card__item card__title")
        h2.innerHTML=data[i].title
     var maincarddes=document.createElement("div")
        maincarddes.setAttribute("class","card__item card__description")
      maincarddes.innerHTML=data[i].description
var maincardind=document.createElement("div")
      maincardind.setAttribute("class","card__item card__ingredients")
      var ul=document.createElement("ul")
      for(let j=0;j<data[i].ingredients.length;j++){
        var li=document.createElement("li")
           
        li.append(data[i].ingredients[j])
      }
  var maincardprice=document.createElement("div")  
      maincardprice.setAttribute("class","card__item card__price")  
      maincardprice.innerHTML=data[i].price


      cardimg.append(img)
      ul.append(li)
      maincardind.append(ul) 
      maincardbody.append(h2,maincarddes,maincardind,maincardprice)
      maincard.append(cardimg,maincardbody)

      cardlist.append(maincard)
     }
     return cardlist
  }
 