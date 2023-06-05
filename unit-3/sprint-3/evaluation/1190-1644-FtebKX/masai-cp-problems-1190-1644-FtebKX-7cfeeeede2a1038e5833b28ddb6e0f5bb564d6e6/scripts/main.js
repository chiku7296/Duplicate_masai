// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

let urlTodosBase = `${baseServerURL}/todos/`;
let mainSection = document.getElementById("data-list-wrapper");
let getTodoButton = document.getElementById("fetch-todos");
let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending");
let filterByCategoryWrapper = document.getElementById("filter-by-categories-wrapper");
let todoItems = [];
// fetch todo
getTodoButton.addEventListener("click",function (){
  fetchdata()
 
})
async function fetchdata(){
  try {
    var res=await fetch(urlTodosBase)
    var data= await res.json()
    console.log(data)
    mainSection.innerHTML=""
    mainSection.append(ftodo(data))
    localStorage.setItem("data",JSON.stringify(data))
  } catch (error) {
    console.log(error)
  }
}

function ftodo(data){
  var todolist=document.createElement("div")
      todolist.setAttribute("class","todo-list-wrapper")
      todolist.setAttribute("id","todo-list-wrapper")
      todolist.innerHTML=""
      for(let i=0;i<data.length;i++){
        var todolabel=document.createElement("label")
            todolabel.setAttribute("class","todo-item-label")
        var todoinp=document.createElement("input") 
            todoinp.setAttribute("class","todo-item-checkbox")  
            todoinp.setAttribute("data-id",data[i].id) 
            todoinp.setAttribute("type","checkbox")

 if(data[i].completed==true){
 todoinp.setAttribute("checked","")
    }
             todoinp.addEventListener("click",function(){
              if(data[i].completed==true){
                let obj={
                  completed:false
                }
                  fetch(`${urlTodosBase}${data[i].id}`,{
                    method:'PATCH',
                    headers:{
                      'Content-Type':'application/json'
                    },
                    body: JSON.stringify(obj)
                  })
              
              }
              else  if(data[i].completed==false){
                let obj={
                  completed:true
                }
                  fetch(`${urlTodosBase}${data[i].id}`,{
                    method:'PATCH',
                    headers:{
                      'Content-Type':'application/json'
                    },
                    body: JSON.stringify(obj)
                  })
              
              }
                
             })

            todolabel.append(todoinp,data[i].title)
        todolist.append(todolabel)    

      }
      return todolist
}

// sort part start
sortLowToHigh.addEventListener("click",function(){
  sort("asc")
})
    
sortHighToLow.addEventListener("click",function(){
  sort("desc")
})
  async function sort(s){
    try {
      var res=await fetch(`${urlTodosBase}?_sort=title&_order=${s}`)
      var data= await res.json()
      console.log(data)
      mainSection.innerHTML=""
      mainSection.append(ftodo(data))
      localStorage.setItem("data",JSON.stringify(data))
    } catch (error) {
      console.log(error)
    }
}
// filter part start
filterPending.addEventListener("click",function(){

  completed("false")
})
filterCompleted.addEventListener("click",function(){
  completed("true")
})
  async function completed(f){
    try {
      var res=await fetch(`${urlTodosBase}?completed=${f}`)
      
      var data= await res.json()
      console.log(data)
      mainSection.innerHTML=""
      mainSection.append(ftodo(data))
      localStorage.setItem("data",JSON.stringify(data))
    } catch (error) {
      console.log(error)
    }
  }
  // filter by category 
  var work=document.createElement("button")
      work.setAttribute("class","filter-by-category")
      work.setAttribute("data-id","Work")
      work.innerHTML="Work"
    var Chores=document.createElement("button")
      Chores.setAttribute("class","filter-by-category")
      Chores.setAttribute("data-id","Chores")  
      Chores.innerHTML="Chores"

      var Family=document.createElement("button")
      Family.setAttribute("class","filter-by-category")
      Family.setAttribute("data-id","Family")
      Family.innerHTML="Family"

      var Learning=document.createElement("button")
      Learning.setAttribute("class","filter-by-category")
      Learning.setAttribute("data-id","Learning")
      Learning.innerHTML="Learning"

      var Reset=document.createElement("button")
      
      Reset.setAttribute("class","filter-by-category-reset")
      Reset.setAttribute("data-id","Reset")
      Reset.innerHTML="Reset"
      filterByCategoryWrapper.append(work,Chores,Family,Learning,Reset)

      work.addEventListener("click",function(){
        var gata=JSON.parse(localStorage.getItem("data"))
       
     var lr=gata.filter((ele)=>{
          if(ele.category=="Work"){
            return ele
          }
          else{
            return false
          }
        })
        mainSection.innerHTML=""
        mainSection.append(ftodo(lr))
      })
      Family.addEventListener("click",function(){
        var gata=JSON.parse(localStorage.getItem("data"))
       
     var lr=gata.filter((ele)=>{
          if(ele.category=="Family"){
            return ele
          }
          else{
            return false
          }
        })
        mainSection.innerHTML=""
        mainSection.append(ftodo(lr))
      })
      Learning.addEventListener("click",function(){
        var gata=JSON.parse(localStorage.getItem("data"))
       
     var lr=gata.filter((ele)=>{
          if(ele.category=="Learning"){
            return ele
          }
          else{
            return false
          }
        })
        mainSection.innerHTML=""
        mainSection.append(ftodo(lr))
      })
      Chores.addEventListener("click",function(){
        var gata=JSON.parse(localStorage.getItem("data"))
       
     var lr=gata.filter((ele)=>{
          if(ele.category=="Chores"){
            return ele
          }
          else{
            return false
          }
        })
        mainSection.innerHTML=""
        mainSection.append(ftodo(lr))
      })
      Reset.addEventListener("click",function(){
        fetchdata()
       
     
      })
  


