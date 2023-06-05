package com.masai;

public interface Stack {
void push(int element) throws OverflowException;
int pop() throws UnderflowException;
int peek() throws UnderflowException;
static String displayStackElements(int stack[]) {
	StringBuilder str = new StringBuilder();
	for(int i=0;i<stack.length;i++) {
		if(stack[i]!=0) {
		str.append(stack[i]+" ");
		}
	}
	String ptr=str.toString();
	return ptr;
}
}
