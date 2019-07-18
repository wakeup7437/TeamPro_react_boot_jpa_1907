package team.lol.backend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * ArrayList
 */
public class ArrayListStudy {

    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("하위1");
        al.add("하위2");
        al.add("하위3");
        for(String s:al){
            System.out.println(s);
        }

        Iterator hi = al.iterator();
        while(hi.hasNext()){
            System.out.println(hi.next());
        }

        HashMap<String,Integer> a = new HashMap<String,Integer>();
        a.put("one", 1);
        a.put("two", 2);
        a.put("three", 3);
        a.put("four", 4);

        
        
    }
}