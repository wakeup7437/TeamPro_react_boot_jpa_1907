package team.lol.backend;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

/**
 * PredicateMain
 */
public class PredicateMain {
    private static List<Student> list = Arrays.asList(
        new Student("홍길동", "남자", 65, 80),
        new Student("황진이", "여자", 92, 72),
        new Student("김삿갓", "남자", 85, 73),
        new Student("유관순", "여자", 78, 95)
    );

    public static double avg(Predicate<Student> predicate){
        int count = 0, sum = 0;
        for (Student std : list) {
            if(predicate.test(std)){
                count ++;
                sum += std.getMath();
            }
        }
        return (double) sum/count;
    }
    public static void main(String[] args) {
        double maleAvg = avg(t->t.getGender().equals("남자"));
        System.out.println(maleAvg);

        double femaleAvg = avg(t->t.getGender().equals("여자"));
        System.out.println(femaleAvg);
    }
}





