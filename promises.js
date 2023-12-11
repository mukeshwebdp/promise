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
        //API

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

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asyne task 3');
        resolve({name: 'Mukesh',email: 'mukeshwebdp@gamil.com'})
    },1000)
})

promiseThree.then(function(users){
    console.log(users);
})

const promisefour = new Promise(function(resolve,reject){
   setTimeout(function(){
    const error = false;
    console.log('Async task 4');
    if(!error){
        resolve({username: 'Mukesh',email : 'mukesh@gmial.com'})
    }else{
        reject('Error: Something went wrong')
    }
   },1000)
})

promisefour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(){
    console.log('error');
}).finally(function(){
    console.log('The promise is either resolved or rejected');
})