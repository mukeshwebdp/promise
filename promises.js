const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

// const requestUrl = 'https://api.github.com/users/mukeshwebdp'
// const xhr = new XMLHttpRequest()
// xhr.open('GET',requestUrl)
// xhr.send()
// xhr.onreadystatechange = function(){
//     const data = JSON.parse(this.responseText)
//     if(xhr.readyState === 4){
//         console.log(data.name);
//     }
// }

// without decleared Promise create
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async take 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Promise consumed two');
})