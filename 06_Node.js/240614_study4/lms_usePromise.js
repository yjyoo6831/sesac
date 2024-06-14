// function call(name, cb) {
//     setTimeout(function() {
//         console.log(name);
//         cb(name);
//     }, 1000);
// }

// function back(cb) {
//     setTimeout(function() {
//         console.log('back');
//         cb('back');
//     }, 1000)
// }

// function hell(cb) {
//     setTimeout(function() {
//         cb('callback hell');
//     }, 1000);
// }

// call('kim', function (name) {
//     console.log(name + '반가워');
//     back(function (txt) {
//         console.log(txt + '을 실행했구나');
//         hell(function (message) {
//             console.log('여기는' + message);
//         });
//     });
// });

// 2. callback - > promise 로 변경하기
function call(name) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            console.log(name);
            if (name) resolve(name)
            else reject('call function error')

        }, 1000);
    })
}

function back() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let txt = 'back';
            console.log(txt);
            if (txt) resolve(txt)
            else reject('back function error')

        }, 1000)
    })
}

function hell() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let message = 'callback hell'
            console.log(message);
            if (message) resolve(message)
            else reject('hell function error')

        }, 1000);
    })
}

// call('kim')
//     .then((name) => {
//         console.log(name+'반가워');
//         return back()
//     })
//     .then(function (txt) {
//         console.log(txt + '을 실행했구나');
//         return hell()
//     })
//     .then(function (message) {
//         console.log('여기는' + message);
//     })
//     .catch(function (err) {
//         console.log("Error !!!!!!!!!! ", err);
//     })

//promise 사용하기 (2)

async function exec() {
    let name = 'kim';
    let backm = 'back';
    let msg = 'callback hell'
    try {

        await call(name);
        console.log(name + '반가워');
        await back();
        console.log(backm + '을 실행했구나');
        await hell();
        console.log('여기는' + msg);
        dd

    } catch (error) {
        console.log(error);
    }
}
// exec();

//promise 사용하기 (3)

function setColor(color) {
    return new Promise(function (resolve, reject) {
        const col=color;
        setTimeout(()=>{
            
            document.body.style.backgroundColor = col;
            resolve();
            console.log(col,"complete ");
        },1000);
        
    })
}
async function chgColor() {
    try {
        await setColor('red')
        await setColor('orange')
        await setColor('yellow')
        await setColor('blue')
    } catch (error) {
        console.log("Error !!!!!!!!!! ", err);
    }
    
}
chgColor();

// setColor()
//     .then((color) => {
//         return setColor('red')
//     })
//     .then((color) => {
//         return setColor('orange')
//     })
//     .then((color) => {
//         return setColor('yellow')
//     })
//     .then((color) => {
//         return setColor('green')
//     })
//     .then((color) => {
//         return setColor('blue')
//     })
//     .catch(function (err) {
//         console.log("Error !!!!!!!!!! ", err);
//     })

