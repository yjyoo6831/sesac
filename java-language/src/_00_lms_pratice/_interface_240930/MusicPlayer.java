package _00_lms_pratice._interface_240930;

public class MusicPlayer {
    public static void main(String[] args) {
          Mp3 mp3 = new Mp3();
          Cd cd = new Cd();

          mp3.play("아이유 블루");
        mp3.stop("아이유 블루");

        cd.play("꽃갈피");
        cd.stop("꽃갈피");
    }
}
