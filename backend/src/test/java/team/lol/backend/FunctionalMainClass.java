package team.lol.backend;
class FunctionalMainClass{
    public static void main(String[] args) {
        // FunctionalInterfaceEx ex =
        //             new FunctionalInterfaceEx(){
        //                 @Override
        //                 public void method() {
        //                     System.out.println("람다 이전 방식");
        //                 }
        //             };
        // FunctionalInterfaceEx ex = () -> { 
        //     System.out.println("람다 이후 방식"); };
        FunctionalInterfaceEx ex = () -> System.out.println("람다 이후 방식");
        ex.method();

        // FunctionalInterfaceEx2 ex2 = (x) -> {
        //     System.out.println(x+2);
        // };
        FunctionalInterfaceEx2 ex2 = x -> System.out.println(x+2);
        ex2.method(2);

        // FunctionalInterfaceEx3 ex3 = (x, y) -> {
        //     int result = x + y;
        //     return result;
        // };
        // FunctionalInterfaceEx3 ex3 = (x, y) -> x + y;
        FunctionalInterfaceEx3 ex3 = (x, y) -> sum(x, y);
        System.out.println(ex3.method(3, 5));
    }

    public static int sum(int x, int y){
        return (x+y);
    }
}