// Problem statement 1

let exampleInputArray1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

function getUsersObj(users) {
 let us= users.reduce((prev,item)=>{
    prev[item.name]=item.id
    
    return prev
  },{})
  return us
}
// { John: 1, Pete: 2, Mary: 3 }

let output = getUsersObj(exampleInputArray1);
console.log(output);


// Problem statement 2
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let exampleInputArray2 = [ john, pete, mary ];

function getMassagedUsers(users){
    // your solution here.
    let ps=users.reduce((prev,item)=>{
         let obj={}
         let fullNam=`${item.name} ${item.surname}`
         obj.fullName=fullNam
         obj.id=item.id
         prev.push(obj)
         return prev
    },[])
    return ps
}

let output2 = getMassagedUsers(exampleInputArray2);
console.log(output2)

export {
  getUsersObj,
  exampleInputArray1,
  getMassagedUsers,
  exampleInputArray2
}