package team.lol.backend;
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.function.ToIntFunction;

/**
 * FunctionMain
 */
public class FunctionMain {
    private static List<Student> list = Arrays.asList(
        new Student("홍길동", 70, 92),
        new Student("신사임당", 95, 80)
    );

    public static void printString(Function<Student, String> func){
        for (Student std : list) {
            System.out.print(func.apply(std)+" ");
        }System.out.println();
    }

    public static void printInt(ToIntFunction<Student> func){
        for (Student std : list){
            System.out.print(func.applyAsInt(std)+" ");
        }System.out.println();
    }

    public static double avg(ToIntFunction<Student> func){
        int sum = 0;
        for (Student std : list) {
            sum += func.applyAsInt(std);
        }
        double avg = (double)sum/list.size();
        return avg;
    }

    public static void main(String[] args) {
        System.out.println("[학생 이름]");
        printString(t->t.getName());

        System.out.println("[영어 점수]");
        printInt(t->t.getEng());

        System.out.println("[수학 점수]");
        printInt(t->t.getMath());

        System.out.println("[영어 평균 점수]");
        System.out.println(avg(s->s.getEng()));

        System.out.println("[수학 평균 점수]");
        System.out.println(avg(s->s.getMath()));
    }
}





