var rp = require("request-promise");

var options = {
    url: "http://localhost:7333/go",
    body: {
        name: "lhm",
        password: "123456"
    },
    method: "POST",
    json: true
}

// rp(options).then(function(res){
//     console.log(res)
// }).catch(function(err){
//     console.log(err)
// })

function test(){
    return new Promise((resolve,reject) => {
        rp(options).then(function(res){
            resolve(res);
        }).catch(function(err){
            reject.log(err)
        })
    })
}


// var s = test().then(function(data){
//     console.log(data)
// })

//上面这种或者下面这种
var s;
async function test1(){
    s = await test();
    console.log(s)
}

test1()