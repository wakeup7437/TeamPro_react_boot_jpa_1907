package team.lol.backend;

import java.util.function.Consumer;
import java.util.function.Function;

public class ConsumerAndThenExample {
    public static void main(String[] args) {
        Consumer<Member> consumerA = (m) ->{
            System.out.println("consumerA : " + m.getName());
        };
        Consumer<Member> consumerB = (m) ->{
            System.out.println("consumerB : " + m.getId());
        };
        consumerA.accept(new Member("홍길동","hong",null));
        Consumer<Member> consumerAB = consumerA.andThen(consumerB);
        consumerAB.accept(new Member("홍길동","hong",null));
    }
    
}