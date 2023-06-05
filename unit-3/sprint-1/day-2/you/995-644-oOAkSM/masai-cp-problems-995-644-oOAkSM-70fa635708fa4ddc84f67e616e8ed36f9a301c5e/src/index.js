

function studentData(firstName,lastName,age,marksArray,...hobbies) {
  
  
  let fullName=`${firstName} ${lastName}`
  
  
  
  
  function getInfo(){
  let b=this.fullName+"'s"+" "+"age"+" "+"is"+" "+this.age+"."
  
    return b
    }
  function  getResult(){

    
  
           
          let obj={}
           let sum=0
           let count=0
           for(let k of marksArray){
               sum+=k
               count++
           }
           let d=sum/count
           if(d>=50){
             obj.r="Result: PASS"
           }
           else{
           obj.r='Result: FAIL'
           }
      return obj.r
    }

  return {fullName,age,hobbies,getInfo,getResult}
}



export {
  studentData 
}