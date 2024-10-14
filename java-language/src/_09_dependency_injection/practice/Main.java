package _09_dependency_injection.practice;

public class Main {
    public static void main(String[] args) {

        NotificationService per = new EmailNotificationService();
        NotificationService per1 = new SMSNotificationService();

        // 1. 생성자 이용
        OrderService ser = new OrderService(per);

        // 2. setter이용
        OrderService ser1 = new OrderService(per1);
        ser1.setSMSNotificationService(per);


        ser.processOrder();
        System.out.println("---");
        ser1.processOrder();

    }
}
