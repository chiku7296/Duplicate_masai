package com.Problem_3;
import java.util.*;
import java.util.stream.Collectors;
public class Main {
    public static void main(String[] args) {
		List<Player> play = new ArrayList();
		play.add(new Player(23,56.75f,"ABC"));
		play.add(new Player(24,60.75f,"BCD"));
		play.add(new Player(32,62.75f,"CDE"));
		
		play.add(new Player(21, 51.75f, "DEF"));
		play.add(new Player(35, 72.75f, "EFG"));
		play.add(new Player(38, 74.75f, "FGH"));
		
		play.add(new Player(39, 65.25f, "GHI"));
		play.add(new Player(42, 74.42f, "HIJ"));
		play.add(new Player(18, 55.56f, "IJK"));
		play.add(new Player(56, 49.25f, "JKL"));
		
		boolean str =play.stream().anyMatch(t->t.getWeight()<50.00 );
		if(str) {
			System.out.println("one more player is underweight");
		}else {
			System.out.println("All player fit");
		}
//		float f = play.stream().forEach(t->t.getWeight()).collect(Collectors.a);
		float sum=0;
		int count=0;
		for(Player p : play) {
			sum+=p.getWeight();
			count++;
		}
		System.out.println("Average is  "+sum/count);
		System.out.println("sum is "+sum);
		
		
		List<Player> lis = play.stream().sorted((a,b)->(int)b.getWeight()-(int)a.getWeight() ).collect(Collectors.toList());
		
		List<Player> sort=lis.stream().skip(4).limit(8).collect(Collectors.toList());
		System.out.println("largest weight of player is  "+sort.get(0).weight);
		boolean atr =play.stream().anyMatch(t->t.getAge()>18 && t.getAge()<60 );
		if(str) {
			System.out.println("Team Contains young and middle aged player  	");
		}else {
			System.out.println("Team Contains kid and Old aged player");
		}
	}
    
}




