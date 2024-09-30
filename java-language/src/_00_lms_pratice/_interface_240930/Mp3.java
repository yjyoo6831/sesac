package _00_lms_pratice._interface_240930;

public class Mp3 implements Music{
    @Override
    public void play(String song) {
        System.out.println("MP3 에서 '" + song + "' 음악 재생");
    }

    @Override
    public void stop(String song) {
        System.out.println("MP3 에서 '" + song + "' 음악 정지");
    }
}
