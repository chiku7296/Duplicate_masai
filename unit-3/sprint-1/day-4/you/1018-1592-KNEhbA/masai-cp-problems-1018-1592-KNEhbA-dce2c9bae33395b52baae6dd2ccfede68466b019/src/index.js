const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
// consider 20 yrs old and less to be young
// consider 21-40 yrs old to be mid
// consider 41 and greater to be old.
function getVotersSummary(voters) {
  // write your code here.
  let youngp=0 
  let youngv=0
  let youngmidp=0
  let youngmidv=0
  let oldv=0
  let oldp=0
  let pr=voters.reduce((pre,cur)=>{
    if(cur.age<=20){
        youngp++
        pre.numYoungPeople=youngp
        if(cur.voted==true){
            youngv++
        }
            pre.numYoungVotes=youngv
        
    }
    else if (cur.age>20 && cur.age<=40){
      youngmidp++
      pre.numMidsPeople=youngmidp
      if(cur.voted==true){
        youngmidv++
    }
    pre.numMidVotesPeople=youngmidv
    }
    else if (cur.age>40){
      oldp++
      pre.numOldsPeople=oldp
      if(cur.voted==true){
        oldv++
    }
    pre.numOldVotesPeople=oldv
    }
    return pre
  },{})
  return pr
}

/*
If we pass the provided voters array to the function, we expect to return the following output: 


{ numYoungVotes: 0,
 numYoungPeople: 2,
 numMidVotesPeople: 4,
 numMidsPeople: 6,
 numOldVotesPeople: 3,
 numOldsPeople: 4
}

*/

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    getVotersSummary,
  };
}
