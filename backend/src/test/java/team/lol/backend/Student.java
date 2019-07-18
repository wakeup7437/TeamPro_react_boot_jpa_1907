package team.lol.backend;
public class Student{
    private String name;
    private String gender;
    private int eng;
    private int math;

    public Student(String name, int eng, int math) {
        this.name = name;
        this.eng = eng;
        this.math = math;
    }

    public Student(String name, String gender, int eng, int math) {
        this.name = name;
        this.gender = gender;
        this.eng = eng;
        this.math = math;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @return the eng
     */
    public int getEng() {
        return eng;
    }

    /**
     * @return the math
     */
    public int getMath() {
        return math;
    }

    /**
     * @return the gender
     */
    public String getGender() {
        return gender;
    }
}