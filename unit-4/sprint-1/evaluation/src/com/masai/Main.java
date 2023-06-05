package com.masai;
import java.util.*;
class MyStack implements Stack{
	private int[] stack;
	private int top;
	final static int MAX_SIZE=5;
	MyStack(){
		stack= new int[MAX_SIZE];
		top=-1;
	}
	public void push(int x)throws OverflowException {
		if(top+1>MAX_SIZE) {
			throw new OverflowException();
		}
		else {
			stack[++top]= x;
		}
	}
	public int pop()throws UnderflowException{
		if(top-1<-1) {
			throw new UnderflowException();
		}
		else {
			int y=stack[top];
			stack[top]=0;
			--top;
			return y;
		
		}
	}
	public int peek()throws UnderflowException {
		if(top==-1) {
			throw new UnderflowException();
		}
		else {
			int y=stack[top];
		
			return y;
		}
	}
	public String toString() {
		return Stack.displayStackElements(stack);
	}
}
public class Main {
      public static void main(String[] args) {
    	  Scanner sc= new Scanner(System.in);
    	  int choice=0;
    	  Stack stack= new MyStack();
    	  do {
    		  System.out.println("1. push element in stack");
    		  System.out.println("2. pop element in stack");
    		  System.out.println("3. peek element in stack");
    		  System.out.println("4. display elements in stack");
    		  System.out.println("5. Exit from stack");
    		  System.out.println("Enter Selection");
    		  choice=sc.nextInt();
    		  int element=-1;
    		  try {
    			  switch(choice){
    				  case 1:
    			System.out.println("enter element");
    			element= sc.nextInt();
    			stack.push(element);
    			break;
    				  case 2:
    		    			
    		    			element= stack.pop();
    		    			System.out.println("poped element "+element);
    		    			break;
    				  case 3:
    		    			
    		    			element= stack.peek();
    		    	System.out.println("top element "+element);	
    		    	break;
    				  case 4: 
    					  System.out.println(stack);
    					  break;
    				  case 5:
    					  System.out.println("Bye Bye");
    					  break;
    					  
    				default:
    					System.out.println("invaild selection");
    			  }
    		    			
    			  }catch(UnderflowException | OverflowException ex) {
    				  System.out.println(ex.getMessage());
    			  }
    	  }while(choice!=5);
    		 sc.close() ;
    	  }
      }

