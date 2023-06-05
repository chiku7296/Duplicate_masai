function Listing(name, category, imageUrl, price) {
  this.name=name
  this.category=category
  this.imageUrl=imageUrl
  this.price=price
  this.sold=false
}

function getFormData() {
  let name=document.getElementById("name")
  let category=document.getElementById("category")
  let imageUrl=document.getElementById("image")
  let price=document.getElementById("price")
  addListing(name,category,imageUrl,price)
}

function addListing(input, category, image, price) {
      product=JSON.parse(localStorage.getItem("Products"))||[]
      let obj=new Listing(input, category, image, price)
      product.push(obj)
      localStorage.setItem("Products",JSON.stringify(product))
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  myform=document.getElementById("form")
  myform.addEventListener("submit",(e)=>{
e.preventDefault()
getFormData()
  })
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
