package team.lol.backend;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.IntSupplier;

public class ConsumerMain{
    public static void main(String[] args) {
        Consumer<String> consumer = t -> System.out.println(t + "world");
        consumer.accept("hello");

        BiConsumer<String, String> bigConsumer = 
                (t, u) -> System.out.println(t + u);
        bigConsumer.accept("hello", "world");

        IntSupplier ints = () -> (int)(Math.random()*6)+1;
        System.out.println("주사위의 눈의 수: "+ints.getAsInt());
    }
}

