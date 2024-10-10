package _00_lms_pratice._abstract;

public class Rectangle extends Shape {
    int width=3;
    int height=8;

    public Rectangle(String color, String type) {
        super(color, type);
    }

    @Override
    double calculateArea(){
        return (double)width*height;
    }
}
