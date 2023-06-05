package com.masaischool.Lawyer;

import java.util.List;

public interface CourtDAO {
		List<Lawyer> getLawyerList();
		Lawyer findLawyerById(int id);
		String saveLawyer(Lawyer lawyer);
		String deleteLawyerById(int id);
		String updateLawyerExperience(int id, int experience);
}

