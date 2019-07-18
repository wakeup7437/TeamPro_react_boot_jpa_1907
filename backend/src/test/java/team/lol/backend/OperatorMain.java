package team.lol.backend;
import java.util.function.IntBinaryOperator;

/**
 * OperatorMain
 */
public class OperatorMain {
    private static int[] scores = {92, 84, 35, 62, 73};

    public static int maxOrMin(IntBinaryOperator operator){
        int result = scores[0];
        for (int score : scores) {
            result = operator.applyAsInt(result, score);
        }
        return result;
    }

    public static void main(String[] args) {
        int max = maxOrMin((a,b) -> ((a>=b)?a:b));
        int min = maxOrMin((a,b)->((a<=b)?a:b));
        System.out.println("max : "+max+"   min : "+min);
    }
    
}



