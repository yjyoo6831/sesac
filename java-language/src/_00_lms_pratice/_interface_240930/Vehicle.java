package _00_lms_pratice._interface_240930;

import java.util.ArrayList;

public abstract class Vehicle {
    String name;
    int maxSpeed;

    abstract void move();

    public String getName() {
        return name;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public static void main(String[] args){
        Car car = new Car();
        Airplane airplane = new Airplane();

        ArrayList<Vehicle> vehicles = new ArrayList<Vehicle>();
        vehicles.add(car);
        vehicles.add(airplane);

        for(Vehicle vehicle : vehicles){
            vehicle.move();
//            System.out.println(vehicle instanceof Airplane);
            if(vehicle instanceof Airplane){
                airplane.fly();
            }
        }
    }
}
