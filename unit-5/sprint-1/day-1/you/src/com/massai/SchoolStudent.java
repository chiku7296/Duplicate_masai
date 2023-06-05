package com.massai;

public class SchoolStudent extends Student {
   String boardName;
	SchoolStudent(int roll, String name, String State,String boardName) {
		super(roll, name, State);
		this.boardName=boardName;
	}
	@Override
	public String toString() {
		return "SchoolStudent [boardName=" + boardName + ", roll=" + roll + ", name=" + name + ", State=" + State
				+ "]";
	}		
	
}
	


