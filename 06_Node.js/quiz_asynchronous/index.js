let product, price;

function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink() {
  const startTime = performance.now(); // 측정 시작
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`고민 끝`);
      product = `제로콜라`;
      price = `3000원`;
      resolve();
    }, 3000);
    const endTime = performance.now(); // 측정 종료
    console.log(`pickDrink 실행 시간: ${endTime - startTime} ms`);
  }
  )
}

function pay(product, price) {
  const startTime = performance.now(); // 측정 시작
    setTimeout(function () {
      console.log(`상품명: ${product} // 가격: ${price}`);
      
    }, 5000);
    const endTime = performance.now(); // 측정 종료
    console.log(`pay의 실행 시간: ${endTime - startTime} ms`);
  }




async function exec() {
  try {
    goMart()
    await pickDrink().then(()=>{
      pay(product,price);
    })
    
  } catch (error) {
    console.error("Error!!!!!!!!!!!!!");
  }
}

exec();



/*
마트에 가서 어떤 음료를 살지 고민한다..
고민 끝
상품명: undefined // 가격: undefined
*/