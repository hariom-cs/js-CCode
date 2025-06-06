// create promise

const promiseOne= new Promise(function (resolve, reject) {
    //Do an async task
    //Do calls, eg. cryptography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve();                                      //after writting resolve it get connected to then
    },1000)
})

//consume promise
promiseOne.then(function () {
    console.log('Process consume');
    //.then() k ander ek callback milata hai wo function atometic ek  funciton receive krta hia--  return by the promise funciton
})



new Promise (function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async task 2 resolve");
    
    
})

const PromiseThree= new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task 3');
        resolve({user:'Hariom Kuar', email:'hariomcse01@gmail.com'});  //passing object through resolve will return to then function
    },1000)
})

PromiseThree.then(function (user) {
    console.log(user);
    
    console.log('Async 3 data is received');
    
})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let error = false
        if (!error) {
            resolve({username:'Hariom', Pass:'123456'})
        }
        else
            reject('something wrong');                                     /it will give error/
        
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
    
}).then((myusername)=>{                                   //ess then me uper wale then ka return value aayega---chaining bolte hai esko
    console.log(myusername);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log('The promise is either resolve or rejected!');      //this will always executed
    
})



//promise five

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error  = true;              //chane false it will perfectly work
        if(!error){
            resolve({userName:'Javascript', password:'55555'})
        }else{
            reject('JS not executed');
            
        }
    }, 1000);
});

//instead of then we can use async await
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()




// ========================qn- print data from api -> https://jsonplaceholder.typicode.com/users

    // async function getAllUsers() {
    //     try {
    //     const response= await fetch('https://jsonplaceholder.typicode.com/users'); //await krna pdega kyuki data ane me time lagega
    //         const data = await response.json()  //response ko json format me convert krege or esme v await krna pdega (it is just like waiting)
    //         console.log(data);
            
    //     } catch (error) {
    //         console.log("E: ", error);
            
    //     }
    // }
    // getAllUsers();


// task -> do the same task using then catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{

    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})