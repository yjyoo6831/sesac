package _00_lms_pratice._abstract;

public abstract class Shape {
    String color;
    String type;
    public Shape(String color, String type) {this.color = color; this.type = type;}

    abstract double calculateArea();

    public String getColor() {return color;}

    public String getType() {return type;}
}
