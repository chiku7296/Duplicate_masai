package com.masai;
import java.util.*;
public class Stack {
	
	public void push(int x,List<Integer> stack) {
		stack.add(x);
	}
	public void pop(List<Integer> stack) {
		stack.remove(stack.size()-1);
	}
	public void peek(List<Integer> stack) {
		System.out.println(stack.get(stack.size()-1));
	}
	public void empty(List<Integer> stack) {
		System.out.println(stack.isEmpty());
	}
	public void show(List<Integer> stack) {
	   for(Integer num : stack) {
		   System.out.print(num+" ");
	   }
	}
	
	
   public static void main(String args[]) {
	   List<Integer> list = new ArrayList();
	   Stack st = new Stack();
	   Scanner sc = new Scanner(System.in);
	   int ele=0;
	   do {
		   System.out.println("1. push, 2. pop ,3.peek 4.check empty, 5.show,6.exit");
		   int x =sc.nextInt();
		   ele=x;
		   switch(x) {
		   
		   case 1: 
			   System.out.println("enter element");
			   int elem=sc.nextInt();
			   st.push(elem, list);  
			    break;
		   case 2:
			   st.pop(list);
			   break;
		   case 3:
			   st.peek(list);
			   break;
		   case 4:
			   st.empty(list);
			   break;
			   
		   case 5:
			   st.show(list);
			   
			   break;
		   case 6:
			   System.out.println("thank you for using stack");
			   break;
		 default: 
			 System.out.println("invaild choice");
		   }
	   
   }while(ele!=6);
   }
}
