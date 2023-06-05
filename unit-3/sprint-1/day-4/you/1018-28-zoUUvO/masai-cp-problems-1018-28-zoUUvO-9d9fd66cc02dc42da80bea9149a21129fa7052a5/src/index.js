function totalPromotedStudents(data) {
  // {
  //   totalPromoted: 3,
  //   totalPromotedAvgAge: 10,
  //   totalPromotedUnder15: 3,
  //   totalAgePromotedMale: 9,
  //   totalPromotedFemaleAscByAge: [
  //     { name: 'Sophie', age: 8, promoted: true, gender: 'Female' },
  //     { name: 'Brantley', age: 14, promoted: true, gender: 'Female' }
  //   ]
  // }
let obj={};
let count=0
let tage=0
let uage=0
let mage=0
let farr=[]
data.filter((ele)=>{
  if(ele.promoted==true){
   count++
   tage+=ele.age
   if(ele.age<15){
  uage++
   }
   if(ele.gender=="Male"){
       mage+=ele.age
   }
   if(ele.gender=="Female"){
    farr.push(ele)
   }
  }
})
let far=farr.sort((a,b)=>{
return a.age -b.age
})
obj.totalPromoted=count
obj.totalPromotedAvgAge=Math.floor(tage/count)
obj.totalPromotedUnder15=uage
obj.totalAgePromotedMale=mage
obj.totalPromotedFemaleAscByAge=far


return obj
}

export { totalPromotedStudents };
