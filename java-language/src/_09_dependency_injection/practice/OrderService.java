package _09_dependency_injection.practice;

public class OrderService {
    // 1. 생성자 주입 방식
    private final NotificationService emailNotificationService;

    public OrderService(NotificationService emailNotificationService) {
        this.emailNotificationService = emailNotificationService;
    }

    // 2. setter 주입방식
    private NotificationService smsNotificationService;

    public void setSMSNotificationService(NotificationService smsNotificationService) {
        this.smsNotificationService = smsNotificationService;
    }
    public void processOrder(){
        emailNotificationService.processOrder();

    }

}
