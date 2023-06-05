package com.Problem_5;
import java.util.*;

public class Trainee {
String traineeId;
String name;
double rating;
public Trainee(String traineeId, String name, double rating) {
	super();
	this.traineeId = traineeId;
	this.name = name;
	this.rating = rating;
}
public String getTraineeId() {
	return traineeId;
}
public void setTraineeId(String traineeId) {
	this.traineeId = traineeId;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public double getRating() {
	return rating;
}
public void setRating(double rating) {
	this.rating = rating;
}
@Override
public String toString() {
	return "Trainee [traineeId=" + traineeId + ", name=" + name + ", rating=" + rating + "]";
}

}
