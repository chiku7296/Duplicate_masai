// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;

// Append div to main section
let mainSection = document.getElementById("data-list-wrapper");

//  add employees
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");

//Sorting 
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

//Filter 
let filterLessThan1LBtn = document.getElementById("filter-less-than-1L");
let filterMoreThanEqualLBtn = document.getElementById(
  "filter-more-than-equal-1L"
);

// Update employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

//Update Salary
let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById(
  "update-score-employee-salary"
);
let updateScoreEmpSalaryButton = document.getElementById(
  "update-score-employee"
);

//Employee Data
let employeesData = [];
   

// ########

window.addEventListener("load",()=>{
  // e.preventDefault()
   fetchdata()
})

updateScoreEmpSalaryButton.addEventListener("click",function(){
  var obj={
    
    salary:updateScoreEmpSalary.value
  }
  fetch(employeeURL+`/${updateScoreEmpId.value}`,{
          method:'PATCH',
          headers:{
          'Content-Type':'application/json'},
          body: JSON.stringify(obj)
    
         }).then((res)=> {
          return res.json()
         }).then((data)=>{
          // mainSection.append(maincard(data))
         }).catch((error)=>{
          console.log(error)
         })
  fetchdata()




})
updateEmpUpdateBtn.addEventListener("click",function(){
  var obj={
    id:updateEmpIdInput.value,
    name:updateEmpNameInput.value,
    image:updateEmpImageInput.value,
    department:updateEmpDeptInput.value,
    salary:updateEmpSalaryInput.value
  }
  fetch(employeeURL+`/${updateEmpIdInput.value}`,{
          method:'PATCH',
          headers:{
          'Content-Type':'application/json'},
          body: JSON.stringify(obj)
    
         }).then((res)=> {
           res.json()
         }).then((data)=>{
          fetchdata()
          // mainSection.append(maincard(data))
         }).catch((error)=>{
          console.log(error)
         })
 




})
async function fetchdata(){
      try {
       var  res=  await fetch(employeeURL)
        var  data= await res.json()
        mainSection.innerHTML=""
          mainSection.append(maincard(data))
        
      } catch (error) {
        console.log(error) 
      }
} 
sortAtoZBtn.addEventListener("click",function(){
  fetchdata()
  async function fetchdata(){
    try {
     var  res=  await fetch(employeeURL)
      var  data= await res.json()
      data.sort((a,b)=>{
        return a.salary-b.salary
      })
      mainSection.innerHTML=""
      mainSection.append(maincard(data))
      
    } catch (error) {
      console.log(error) 
    }
} 
 
})
sortZtoABtn.addEventListener("click",function(){
  fetchdata()
  async function fetchdata(){
    try {
     var  res=  await fetch(employeeURL)
      var  data= await res.json()
      data.sort((a,b)=>{
        return b.salary-a.salary
      })
      mainSection.innerHTML=""
      mainSection.append(maincard(data))
      
    } catch (error) {
      console.log(error) 
    }
} 
 
})
filterLessThan1LBtn.addEventListener("click",function(){
  fetchdata()
  async function fetchdata(){
    try {
     var  res=  await fetch(employeeURL)
      var  data= await res.json()
      var less1=data.filter((ele)=>{
        if(ele.salary<100000){
          return ele
        }
        else{
          return false
        }
      })
      mainSection.innerHTML=""
      mainSection.append(maincard(less1))
      
    } catch (error) {
      console.log(error) 
    }
}
})
filterMoreThanEqualLBtn.addEventListener("click",function(){
  fetchdata()
  async function fetchdata(){
    try {
     var  res=  await fetch(employeeURL)
      var  data= await res.json()
      var great=data.filter((ele)=>{
        if(ele.salary>=100000){
          return ele
        }
        else{
          return false
        }
      })
      mainSection.innerHTML=""
      mainSection.append(maincard(great))
      
    } catch (error) {
      console.log(error) 
    }
}
})
empCreateBtn.addEventListener("click",function(){
  var obj={
    name:empNameInput.value,
    image:empImgInput.value,
    department:empDeptInput.value,
    salary:empSalaryInput.value
  }
  fetch(employeeURL,{
          method:'POST',
          headers:{
          'Content-Type':'application/json'},
          body: JSON.stringify(obj)
    
         }).then((res)=> {
          return res.json()
         }).then((data)=>{
          // mainSection.append(maincard(data))
         }).catch((error)=>{
          console.log(error)
         })
  fetchdata()




})

function maincard(data) {
  var cardlist=document.createElement("div")
  cardlist.setAttribute("class","card-list")
  cardlist.innerHTML=""
  for(let i=0;i<data.length;i++){
    var card=document.createElement("div")
    var cardimg=document.createElement("div")
    var img=document.createElement("img")
    var cardbody=document.createElement("div")
    var cardtitle=document.createElement("h3")
    var cardsal=document.createElement("div")
    var edit=document.createElement("a")

    card.setAttribute("data-id",data[i].id)
    card.setAttribute("class","card")
    cardimg.setAttribute("class","card-img")
    cardbody.setAttribute("class","card-body")
    cardtitle.setAttribute("class","card-title")
    cardsal.setAttribute("class","card-salary")
    edit.setAttribute("data-id",data[i].id)
    edit.setAttribute("class","card-link")
    edit.setAttribute("src","#")
    img.setAttribute("src",data[i].image)

    cardtitle.innerHTML=data[i].name
    cardsal.innerHTML=data[i].salary
    edit.innerHTML="Edit"
   
    cardbody.append(cardtitle,cardsal,edit)
    cardimg.append(img)
    card.append(cardimg,cardbody)
    cardlist.append(card) 
  }
  return cardlist
  
}
      
     









