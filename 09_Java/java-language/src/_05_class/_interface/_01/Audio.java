package _05_class._interface._01;

public class Audio implements RemoteControl {
    // 필드
    private int volume;

    // 인터페이스의 추상메서드 구현
    @Override
    public void turnOn() { System.out.println("Audio 를 켭니다."); }

    @Override
    public void turnOff() { System.out.println("Audio 를 끕니다."); }

    @Override
    public void setVolume(int volume) {
        // 필드
        int volume1;
        if (volume > RemoteControl.MAX_VOLUME) {
            volume1 = RemoteControl.MAX_VOLUME;
        } else if (volume < RemoteControl.MIN_VOLUME) {
            volume1 = RemoteControl.MIN_VOLUME;
        } else {
            volume1 = volume;
        }
        System.out.println("현재 Audio 볼륨: " + volume1);
    }
}