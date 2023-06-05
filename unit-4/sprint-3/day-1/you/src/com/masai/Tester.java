package com.masai;



abstract class Science{
  private static int counter;
  
  private String registrationNumber;
  private float physicsTheoryMarks;
  private float physicsPracticalMarks;
  private float chemistryTheoryMarks;
  private float chemistryPracticalMarks;

 
    
  

  Science(String registrationPrefix, float physicsTheoryMarks, float physicsPracticalMarks, float chemistryTheoryMarks, float chemistryPracticalMarks){
	  counter=counter+1;
	  this.registrationNumber=registrationPrefix+this.counter;
  
   this.physicsTheoryMarks=physicsTheoryMarks;
   this.physicsPracticalMarks=physicsPracticalMarks;
   this.chemistryTheoryMarks=chemistryTheoryMarks;
   this.chemistryPracticalMarks=chemistryPracticalMarks;
  }
        float getphy(){
 return physicsTheoryMarks+physicsPracticalMarks+chemistryTheoryMarks+chemistryPracticalMarks;
        }
     String getreg(){
        return registrationNumber;
        }

  abstract public double getPercentage();
  abstract public String  getRegistrationNumber();
}

class ScienceMathsStudent extends Science{
  final static String MATHS_PREFIX = "SM";
  private float mathsMarks;

  ScienceMathsStudent(float mathsMarks, float physicsTheoryMarks, float physicsPracticalMarks, float chemistryTheoryMarks, float chemistryPracticalMarks){
super(
MATHS_PREFIX,
physicsTheoryMarks,
physicsPracticalMarks,
 chemistryTheoryMarks,
 chemistryPracticalMarks);
this.mathsMarks=mathsMarks;
  }

 

  @Override
  public double getPercentage(){
	 return 100*(mathsMarks+getphy())/300;
  }
  @Override
 public String getRegistrationNumber(){
	  return getreg();
  }
//
}

class ScienceBioStudent extends Science{
  final static String BIO_PREFIX = "SB";
  private float bioTheoryMarks;
  private float bioPracticalMarks;
//
// 
//
  ScienceBioStudent(float bioTheoryMarks, float bioPracticalMarks, float physicsTheoryMarks, float physicsPracticalMarks, float chemistryTheoryMarks, float chemistryPracticalMarks){
	  super(
			  
			  BIO_PREFIX,
			  physicsTheoryMarks,
			  physicsPracticalMarks,
			   chemistryTheoryMarks,
			   chemistryPracticalMarks);
			  this.bioTheoryMarks=bioTheoryMarks;
			  this.bioPracticalMarks= bioPracticalMarks;
  }
//
  @Override
  public double getPercentage(){
	  return 100*(bioTheoryMarks+getphy()+bioPracticalMarks)/300;
  }
  @Override
 public String  getRegistrationNumber(){
	  return getreg();
  }
}

class Tester{
  public static void main(String args[]){
    Science sc = null;
    sc = new ScienceMathsStudent(78, 55, 24, 58, 23);
    System.out.println("The total marks of student whose registration number " + sc.getRegistrationNumber() + " is " + sc.getPercentage());
    sc = new ScienceBioStudent(52, 23, 55, 24, 58, 23);
    System.out.println("The total marks of student whose registration number " + sc.getRegistrationNumber() + " is " + sc.getPercentage());
    sc = new ScienceBioStudent(49, 22, 54, 23, 59, 54);
    System.out.println("The total marks of student whose registration number " + sc.getRegistrationNumber() + " is " + sc.getPercentage());
    sc = new ScienceMathsStudent(83, 52, 23, 55, 26);
    System.out.println("The total marks of student whose registration number " + sc.getRegistrationNumber() + " is " + sc.getPercentage());
  }
//
}

//Output
//The total marks of student whose registration number SM1 is 68.33
//The total marks of student whose registration number SB2 is 78.33
//The total marks of student whose registration number SB3 is 87.00
//The total marks of student whose registration number SM4 is 79.67

