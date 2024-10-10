package _00_lms_pratice._abstract;

import java.util.ArrayList;

public class ShapeEx {
    public static void main(String[] args) {
        ArrayList<Shape> shapes = new ArrayList<>();

        Circle circle = new Circle("Red", "Circle");
        Rectangle rectangle = new Rectangle("Blue", "Rectangle");

        shapes.add(circle);
        shapes.add(rectangle);
        for(Shape i : shapes) {
            System.out.println("=== " + i.getType() + " === ");
            System.out.println("도형의 색상: " + i.getColor());
            System.out.println("도형의 넓이: " + i.calculateArea());
        }
    }
}
