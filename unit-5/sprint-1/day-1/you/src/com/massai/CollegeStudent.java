package com.massai;

public class CollegeStudent extends Student {
	   String UniversityName;
		CollegeStudent(int roll, String name, String State,String UniversityName) {
			super(roll, name, State);
			this.UniversityName=UniversityName;
		}
		@Override
		public String toString() {
			return "CollegeStudent [UniversityName=" + UniversityName + ", roll=" + roll + ", name=" + name + ", State=" + State
					+ "]";
				
		}
}
