

 
function Product(name, brand, price, description, sold) {
 this.name=name
 this.brand=brand
 this.price=price
 this.description=description
 this.sold=false
 Product.prototype.changePrice=(value)=>{
  return this.price=value
  
 }
 Product.prototype.toggleStatus=()=>{
  if(this.sold==false){
    this.sold=true
    return this.sold=true
  }
  else if(this.sold==true){
    this.sold=false
    return false
  }
}
}

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
