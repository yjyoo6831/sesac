// 1. 아래와 같이 오브젝트, 불리언(boolean) 
// 데이터 타입 순으로 설정하는 튜플 만들어보기
let olimplic_newgame: [object, boolean] = [
    {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
console.log(olimplic_newgame);

//2. olimpic_newgame[1]=false; 를 했을 때 
// 변경되지 않도록 수정할 수 없는 데이터 만들기

let olimplic_newgame1: readonly[object, boolean] = [
  {
  name: "쇼트트랙",
  type: "혼성 계주",
},
true,
];

console.log(olimplic_newgame1);

// * typescipt interface 실습 
interface Game{
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
}

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
}


console.log("HeroGame_A > ", heroGame_A);
console.log("HeroGame_B > ", heroGame_B);
