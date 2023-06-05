package day_3.masai;

public class SimpleInterest {
	double a;
	double p;
	double r;
	double total;
    void setValues(double pa,double tp,double ir) {
       a= pa;
       p=tp;
       r=ir;
      System.out.println(getInterestAmount());
       
    }
    double getInterestAmount(){
    	total=(a*p*r/100);
    	
       return Math.round(total*100)/100.0;
    }
    
} 
  

class SimpleInterestTester{
    public static void main(String args[]){
        SimpleInterest siOne = new SimpleInterest();
        SimpleInterest siTwo = new SimpleInterest();
        siOne.setValues(1005, 2, 7.5);
        siTwo.setValues(1235.50, 2.5, 8.25);
    }
}


