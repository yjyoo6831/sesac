package _09_dependency_injection.practice;

public class EmailNotificationService implements NotificationService {
    public void processOrder() {
        System.out.println("Order processed successfully");
        System.out.println("Sending email notification Your order has been processed");
    }
}
