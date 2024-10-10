package _05_class._access_modifier._pack2;
import _05_class._access_modifier._pack1.B;
public class C {
    // A a;    // 같은 패키지가 아니므로 접근 X
    B b;
    // C 클래스는 A, B 클래스와 패키지가 다르므로 
    // default 제한자인 A클래스는 에러가 발생한다. 

    // public 제한자를 갖는 B클래스는 가능하다. (import 해야함.)
}
