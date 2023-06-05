
// Problem 1. 
class Account {
constructor(id,balance){
  this.id=id
  this.balance=balance
}
deposit(amount){
this.balance+=amount
}
withdraw(amount){
  if(amount<=this.balance){
  this.balance-=amount
  }
}
getBalance(){
  return this.balance
}
}

class SavingsAccount extends Account {
constructor(id,balance,interesRate){
  super(id,balance)
  this.interesRate=interesRate
}
setInterestRate(interesRate){
  this.interesRate=interesRate
}
addInterest(){
  this.balance+=this.balance*(this.interesRate/100)
}
withdraw(amount){
  if(amount<=this.balance){
  this.balance-=amount
  }
} 
}

class CheckingAccount extends Account {
constructor(id, balance, overdraftLimit){
  super(id,balance)
  this.overdraftLimit=overdraftLimit
} 
withdraw(amount){
  let av=this.balance+this.overdraftLimit
  if(amount<=av){
    this.balance-=amount
  }
}
setOverdraftLimit(limit){
  this.overdraftLimit=limit
}
}

// Problem 2.

function Animal(name, type) {
this.name=name
this.type=type
Animal.prototype.makeSound=function(){
 return  "Animal is making a sound"
}
}

function Mammal(name, type, hasFur) {
Animal.call(this,name,type)
this.hasFur=hasFur
Mammal.prototype.makeSound=function(){
  return  "Mammal is making a sound"
 }
Object.setPrototypeOf(Mammal.prototype,Animal.prototype)
}

function Dog(name, type, hasFur, breed) {
Mammal.call(this,name,type,hasFur)
this.breed=breed
Dog.prototype.makeSound=function(){
  return   "Woof Woof!"
 }
Object.setPrototypeOf(Dog.prototype,Mammal.prototype)

}

// Problem 3.
class Character {
constructor(name,health,attackPower){
  this.name=name
  this.health=health
  this.attackPower=attackPower
}
 attack(obj){
  
  obj.health-=this.attackPower
 }

 
 isAlive(){
  if(this.health>0){
    return true
  }
  else{
    return false
  }
 }

}

class Warrior extends Character {
  
constructor(name,health,attackPower,weapon,armor){
  super(name,health,attackPower)
      this.weapon=weapon
      this.armor=armor
}
attack(obj){
  if(this.weapon==="sword"){
    this.attackPower+=10
  }
  obj.health-=this.attackPower
}
defend(){
  this.health+=10
}


}

// Problem 4.

class Person {
constructor(name,age){
  this.name=name
  this.age=age
}
introduce(){
   console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`)
}
}

class Student extends Person {
constructor(name,age,grade){
  super(name,age)
  this.grade=grade
}
study(){
  return `${this.name} is studying`
}
}

class Teacher extends Person {
constructor(name, age, subject, students){
  super(name,age)
  this.subject=subject
  this.students=[]
}
addStudent(student) {
this.students.push(student)
}
teach(){
 console.log( `${this.name} is teaching ${this.subject}.`)
}

}

class MathTeacher extends Teacher {
constructor(name,age,subject){
  super(name,age)
   this.subject="Math"
  
}
assignHomework(){
   console.log(`${this.name} assigned homework to their ${this.subject} class.`)
}
}
class HighSchoolMathTeacher extends MathTeacher {
constructor(name, age,department){
  super(name,age)
  this.subject="Math"
  this.department=department  
}
introduce(){
  console.log(`Hi, my name is ${this.name}, I'm a ${this.department} ${this.subject} teacher and I'm ${this.age} years old.`)
}
averageStudentAge(){
  let total=0
  let count=0
  for(i=0;i<this.students.length;i++){
    count++
total+=this.students(i)
  }
  let average=total/count
  console.log(`The average age of my ${this.subject} students is ${average}`)
}
}

export { 
  Dog, Mammal, Animal, 
  Character, Warrior,
  Account, SavingsAccount, CheckingAccount,
  Person, Student, Teacher, MathTeacher, HighSchoolMathTeacher
}
