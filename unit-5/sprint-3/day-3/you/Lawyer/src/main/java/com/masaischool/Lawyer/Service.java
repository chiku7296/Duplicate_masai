package com.masaischool.Lawyer;
import java.util.*;
import java.util.List;
import java.sql.*;
public class Service implements CourtDAO{

	@Override
	public List<Lawyer> getLawyerList()  {
	
		List<Lawyer> lp = new ArrayList<Lawyer>();
	  try {
		  List<Lawyer> lw = new ArrayList<Lawyer>();
		  Connection con = App.createConnection();
		
		  String query = "Select * from Lawyer where experience>5";
		  PreparedStatement ps = con.prepareStatement(query);
		  ResultSet rs = ps.executeQuery();
		  while(rs.next()) {
				
			 int id = rs.getInt("lw_id");
			 String name = rs.getString("name");
			 String email = rs.getString("email");
			 String address = rs.getString("address");
			 int exp = rs.getInt("experience");
			 lw.add(new Lawyer(id,name,email,address,exp));
		  }
		
		  return lw;
	} catch (Exception e) {
		e.printStackTrace();
	}
		return lp;
	
	

	}

	@Override
	public Lawyer findLawyerById(int id) {
		
	int count =0;
		 try {
			Connection  con = App.createConnection();
			  String query = "Select * from Lawyer where lw_id=?";
			  PreparedStatement ps = con.prepareStatement(query);
			  ps.setInt(1,id);
			
			  ResultSet rs = ps.executeQuery();
			if(rs.next()) {
				count++;
			}
		 return new Lawyer(rs.getInt("lw_id"),rs.getString("name"),rs.getString("email"),rs.getString("address"),rs.getInt("experience"));
			  
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new Lawyer(1,"","","",1);
		}
			
		
		  
		  
	}

	@Override
	public String saveLawyer(Lawyer lawyer) {
		int count=0;
		try {
			Connection con = App.createConnection();
			  String query = "Insert Into Lawyer(lw_id,name,email,address,experience) values(?,?,?,?,?)";
			  PreparedStatement ps = con.prepareStatement(query);
			ps.setInt(1,lawyer.getId());
			ps.setString(2,lawyer.getName());
			ps.setString(3,lawyer.getEmail());
			ps.setString(4, lawyer.getAddress());
			ps.setInt(5, lawyer.getExperience());
			if(ps.executeUpdate()>0) {
				count++;
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
		if(count>0) {
		 return "successfully added";
		}else {
			return "something went wrong";
		}
			
		}
	}

	@Override
	public String deleteLawyerById(int id) {
		try {
			  
			  Connection con = App.createConnection();
			  
			  String query = "delete from  Lawyer where lw_id=?";
			  PreparedStatement ps = con.prepareStatement(query);
			  ps.setInt(1, id);
			if(ps.executeUpdate()>0) {
				return "successfully deleted";
			}else {
				return "something went wrong";
			}
		} catch (Exception e) {
			e.printStackTrace();
			
				return "something went wrong";
			
		}
	}

	@Override
	public String updateLawyerExperience(int id, int experience) {
		try {
			  
			  Connection con = App.createConnection();
			  
			  String query = "update  Lawyer Set experience=? where lw_id=?";
			  PreparedStatement ps = con.prepareStatement(query);
			  ps.setInt(1, experience);
			  ps.setInt(2, id);
			if(ps.executeUpdate()>0) {
				return "successfully updated";
			}else {
				return "something went wrong";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "something went wrong";
		}
	}

}
