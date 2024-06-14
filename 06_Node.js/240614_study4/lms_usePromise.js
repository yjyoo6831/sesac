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
            else  reject('call function error')
    
        }, 1000);
    })
}

function back() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let txt='back';
            console.log(txt);
            if (txt) resolve(txt)
            else  reject('back function error')

        }, 1000)
    })
}

function hell() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let message='callback hell'
            if (message) resolve(message)
            else  reject('hell function error')
    
        }, 1000);
    })
}

call('kim')
    .then((name) => {
        console.log(name+'반가워');
        return back()
    })
    .then(function (txt) {
        console.log(txt + '을 실행했구나');
        return hell()
    })
    .then(function (message) {
        console.log('여기는' + message);
    })
    .catch(function (err) {
        console.log("Error !!!!!!!!!! ", err);
    })