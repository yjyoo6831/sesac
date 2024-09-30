package _00_lms_pratice._abstract;

public class Circle extends Shape {
    double radius=5;

    public Circle(String color, String type) {
        super(color,type);
    };

    @Override
    double calculateArea(){
        return Math.PI * radius * radius;
    }
}
