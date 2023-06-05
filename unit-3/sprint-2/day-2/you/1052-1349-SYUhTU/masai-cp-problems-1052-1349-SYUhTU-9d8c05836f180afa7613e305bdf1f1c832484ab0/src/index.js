/*
## Problem 1.
*/


function productFactory(name, price) {
   
productFactory.prototype.increasePrice=(k)=>{
    productFactory.prototype.price=price
  return productFactory.prototype.price+=k
}
productFactory.prototype.decreasePrice=(j)=>{
    productFactory.prototype.price=price
   return productFactory.prototype.price-=j
 }
 productFactory.prototype.displayInfo=()=>{
   return `${name} costs Rs.${productFactory.prototype.price}`
 }


   
let  obj={}
  obj=Object.create(productFactory.prototype)
    return obj
}



    


// example invocation
// let p1 = new productFactory("Notebook", 10);
// p1.increasePrice(200)
// console.log(p1.price)
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();

// p1.displayInfo();

/*
## Problem 2.
*/
function ProductConstructor(name, price) {
    productFactory.prototype.increasePrice=(k)=>{
        productFactory.prototype.price=price
      return productFactory.prototype.price+=k
    }
    productFactory.prototype.decreasePrice=(j)=>{
        productFactory.prototype.price=price
       return productFactory.prototype.price-=j
     }
     productFactory.prototype.displayInfo=()=>{
       return `${name} costs Rs.${productFactory.prototype.price}`
     }
    
    
       
    let  obj={}
      obj=Object.create(productFactory.prototype)
        return obj
}

// example invocation
// let p1 = new ProductConstructor("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

/*
## Problem 3.
*/
class ProductClass {
    
}
// ProductClass.prototype.increasePrice=(k)=>{
//     productFactory.prototype.price=price
//   return productFactory.prototype.price+=k
// }
// ProductClass.prototype.decreasePrice=(j)=>{
//     productFactory.prototype.price=price
//    return productFactory.prototype.price-=j
//  }
//  ProductClass.prototype.displayInfo=()=>{
//    return `${name} costs Rs.${productFactory.prototype.price}`
//  }
       
    
    
       
    


// let p1 = new Product("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

export {productFactory, ProductConstructor, ProductClass}