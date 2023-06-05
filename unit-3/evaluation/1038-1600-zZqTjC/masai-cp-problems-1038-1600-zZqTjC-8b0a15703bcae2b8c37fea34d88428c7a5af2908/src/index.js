// Problem 1. `createBook` factory function (3 Marks)
// you are not allowed to use the this keyword in the createBook function.
function createBook(title,author,pageCount,price,ISBN) {
  let obj={}
obj.title=title
obj.author=author
obj.pageCount=pageCount
obj.price=price
obj.ISBN=ISBN

obj.getPrice=()=>{
 return price
}
obj.increasePrice=(p)=>{
  price+=p
  return price
}
obj.decreasePrice=(p)=>{
price-=p
return price
}
obj.isExpensive=()=>{
  return price>=500
}


return obj

}

// Example invocation
// let book1 = createBook("The Catcher in the Rye", "J.D. Salinger", 224, 350.00, "9780316769488")
// console.log(book1)
// console.log(book1.getPrice()) // 350
// console.log(book1.increasePrice(300)) //650
// console.log(book1.isExpensive()) // true
// console.log(book1.decreasePrice(400)) // 250
// console.log(book1.isExpensive()) // false



// Problem 2. `CreateBook` constructor function (1 Marks)
function CreateBook(title,author,pageCount,price,ISBN) {
  let obj={}
obj.title=title
obj.author=author
obj.pageCount=pageCount
obj.price=price
obj.ISBN=ISBN

obj.getPrice=()=>{
 return price
}
obj.increasePrice=(p)=>{
  price+=p
  return price
}
obj.decreasePrice=(p)=>{
price-=p
return price
}
obj.isExpensive=()=>{
  return price>=500
}


return obj
}

// Example invocation
// let book1 = new CreateBook("The Catcher in the Rye", "J.D. Salinger", 224, 350.00, "9780316769488")
// console.log(book1)
// console.log(book1.getPrice()) // 350
// console.log(book1.increasePrice(300)) //650
// console.log(book1.isExpensive()) // true
// console.log(book1.decreasePrice(400)) // 250
// console.log(book1.isExpensive()) // false



// Problem 3. `Book` class (1 Marks)
class Book {

}

// Example invocation
// let book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 224, 350.00, "9780316769488")
// console.log(book1)
// console.log(book1.getPrice()) // 350
// console.log(book1.increasePrice(300)) //650
// console.log(book1.isExpensive()) // true
// console.log(book1.decreasePrice(400)) // 250
// console.log(book1.isExpensive()) // false




// Problem 4. 4 Marks

let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];

let areasDirectory = areas.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let exampleInputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
    strIngredient1: "digestive biscuits",
    strIngredient2: "butter",
    strIngredient3: "Bramley apples",
    strIngredient4: "butter, softened",
    strIngredient5: "caster sugar",
    strIngredient6: "free-range eggs, beaten",
    strIngredient7: "ground almonds",
    strIngredient8: "almond extract",
    strIngredient9: "flaked almonds",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/3oz",
    strMeasure3: "200g/7oz",
    strMeasure4: "75g/3oz",
    strMeasure5: "75g/3oz",
    strMeasure6: "2",
    strMeasure7: "75g/3oz",
    strMeasure8: "1 tsp",
    strMeasure9: "50g/1¾oz",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
    strIngredient1: "Milk",
    strIngredient2: "Oil",
    strIngredient3: "Eggs",
    strIngredient4: "Flour",
    strIngredient5: "Baking Powder",
    strIngredient6: "Salt",
    strIngredient7: "Unsalted Butter",
    strIngredient8: "Sugar",
    strIngredient9: "Peanut Butter",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "200ml",
    strMeasure2: "60ml",
    strMeasure3: "2",
    strMeasure4: "1600g",
    strMeasure5: "3 tsp",
    strMeasure6: "1/2 tsp",
    strMeasure7: "25g",
    strMeasure8: "45g",
    strMeasure9: "3 tbs",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: ""
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
    strIngredient1: "plain flour",
    strIngredient2: "chilled butter",
    strIngredient3: "cold water",
    strIngredient4: "raspberry jam",
    strIngredient5: "butter",
    strIngredient6: "caster sugar",
    strIngredient7: "ground almonds",
    strIngredient8: "free-range egg, beaten",
    strIngredient9: "almond extract",
    strIngredient10: "flaked almonds",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/2½oz",
    strMeasure3: "2-3 tbsp",
    strMeasure4: "1 tbsp",
    strMeasure5: "125g/4½oz",
    strMeasure6: "125g/4½oz",
    strMeasure7: "125g/4½oz",
    strMeasure8: "1",
    strMeasure9: "½ tsp",
    strMeasure10: "50g/1¾oz",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  }
];

let exampleInputArray2 = [
  {
    idMeal: "52768",
    strMeal: "aaa",
    Category: 1,
    Area: 2,
    strIngredient1: "a",
    strIngredient2: "b",
    strIngredient3: "c",
    strIngredient4: "d",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "275g/6oz",
    strMeasure2: "25g/3oz",
    strMeasure3: "220g/7oz",
    strMeasure4: "25g/3oz",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  },

  {
    idMeal: "53049",
    strMeal: "bbb",
    Category: 1,
    Area: 1,
    strIngredient1: "Milk",
    strIngredient2: "Oil",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "100ml",
    strMeasure2: "10ml",
    strMeasure3: "",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: ""
  },
  {
    idMeal: "52767",
    strMeal: "ccc",
    Category: 2,
    Area: 2,
    strIngredient1: "x",
    strIngredient2: "y",
    strIngredient3: "z",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "275g/6oz",
    strMeasure2: "25g/2½oz",
    strMeasure3: "2-4 tbsp",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  }
];

function massageArray(inputArray) {
  
let pr=[]
for(var i=0;i<inputArray.length;i++){
let obj={}
let ar=[]

for(let j=1;j<11;j++){
  var obj1={}
  var a="strIngredient"+`${j}`
  var b="strMeasure"+`${j}`
  if(inputArray[i][a]==null || inputArray[i][a]==""||inputArray[i][b]==null || inputArray[i][b]==""){
      
  }
  else{
  obj1.ingredient=inputArray[i][a]
  obj1.measure=inputArray[i][b]
  }
ar.push(obj1)
}

obj.productId=inputArray[i].idMeal
obj. productTitle=inputArray[i].strMeal
obj. Category=categoriesDirectory[inputArray[i].Category]
if(areas[0].id==inputArray[i].Area){
  obj.Area=areas[0].name
}
else{
  obj.Area=areas[1].name
}
// obj.Area=areas[c].name
obj.Ingredients=[ar]
pr.push(obj)

}
return pr
}

// Example Invocation
// let obj2 =  massageArray(exampleInputArray2);
// console.log(JSON.stringify(obj2));

export { createBook, CreateBook, Book, categoriesDirectory, areas, massageArray, exampleInputArray }
