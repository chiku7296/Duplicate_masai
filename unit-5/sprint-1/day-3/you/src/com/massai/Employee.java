package com.massai;
import java.util.*;
class EmployeeOperations{
	static String getEmployeeWithMinimumSalary(List<Employee> employeeList) {
		double min = 453555353;
		String n="";
		for(Employee e: employeeList) {
			if(e.salary<min) {
				min=e.salary;
				n=e.name;
			}
		}
		return n;
	}
}

@FunctionalInterface
interface CreateEmployeeObject{
	Employee getObject(int employeeId, String name, double salary);
}

@FunctionalInterface
interface ShowDetails {
	String getEmployeeDetailsInString();
}

@FunctionalInterface
interface FindMin{
	String getMinSalariedEmployee(List<Employee> employeeList);
}


public class Employee {
int employeeId;
String name;
double salary;
public Employee(int employeeId, String name, double salary) {
	super();
	this.employeeId = employeeId;
	this.name = name;
	this.salary = salary;
}
@Override
public String toString() {
	return "Employee [employeeId=" + employeeId + ", name=" + name + ", salary=" + salary + "]";
}


public static void main(String[] args) {
	List<Employee> employee= new ArrayList();

	CreateEmployeeObject cr = Employee::new;
	employee.add(cr.getObject(145,"pravesh",120000));
	employee.add(cr.getObject(175,"praveen",1205600));
	employee.add(cr.getObject(147,"praveshika",1234530));
	employee.add(cr.getObject(1489,"priyanshu",1235350));
	employee.add(cr.getObject(14545,"prahi",127678600));
	Employee em= new Employee(175,"praveen",1205600);
	ShowDetails show = em::toString;
	System.out.println(show.getEmployeeDetailsInString());
	
	FindMin min = EmployeeOperations::getEmployeeWithMinimumSalary;
	System.out.println(min.getMinSalariedEmployee(employee));
}

}
