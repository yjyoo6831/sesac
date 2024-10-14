package _09_dependency_injection.practice;

public class SMSNotificationService implements NotificationService{
    public void processOrder() {
        System.out.println("Order processed successfully");
        System.out.println("Sending SMS notification Your order has been processed");
    }
}
