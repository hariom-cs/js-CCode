let a  = 20
const b = 20
var c = 30
// console.log(a);
// console.log(b);
// console.log(c);
function one() {
    const username ="hariom"
    function two() {
        const website ="youtube"
        // console.log(username);
    }
    // console.log(website)//here give error-->ReferenceError: website is not defined
    two()
}
one()


if (true) {
    const username ="hariom"
    if (username === "hariom") {
        const website =" instagram"
        // console.log(username + website);//ok
        
    }
    // console.log(website);//ref. error   
}
// console.log(username);//ref. error



// +++++++++++++++++++important+++++++++++++++++
addone(4)   //no error
function addone(num) {
    return num + 1;
}
addone(7)   //no error



// addTwo(9)   //it will give reference error-- HOISTING CONCEPT USED
const addTwo = function (num) {
    return num + 2;
}
addTwo(5)   //HERE no error





//++++++++++++++++23.ARROW FUNCTION + THIS KEYWORD+++++++++++++
    // THIS KEYWORD-current context ko refer krta hai
    const user={
        username :"hariom",
        price:999,

        welcomeMsg:function () {
            console.log(`${this.username}, welcome to website`);
            console.log(this);  //OUTPUT==> { username: 'hariom', price: 999, welcomeMsg: [Function: welcomeMsg] }
            
        }
    }
    // user.welcomeMsg()
    // user.username = "sam"
    // user.welcomeMsg()
    
        //console.log(this);//refer to current context - or avi global k ander  koi object hi nhi hai esiliy empty ayega
                        //output--> {}
                // 1.->yhi this agr BROWSER k console me print kre toh ye " WINDOW OBJECT" show krega
                // 2.-> kyuki BROWSER k  ander jo  GLOBAL OBJECT hai wo  "WINDOW OBJECT " hi hai

//this' keyword inside fuction
function fun1() {
    let username="hariom"
    // console.log(this.username);//undefined
}
fun1()


//"this" keyword using variable
const hello = function () {
    let username="hariom"
    // console.log(this.username);//undefiend
    // console.log(this);
}
hello()



//  ARROW FUNCTION

    const test = ()=>{
        let username="hariom"
            // console.log(this.username);//undefined
        console.log(this);//object-->empty object =-> {}
        
    }   
    test();
    //interview QN.-  WHAT  IS THE DIFFERENCT BW ARROW FUN AND NORMAL FUNCITON -- CONTEXT OF THIS  KEYWORDS




//=================24===IIFE- Immediately invoked Function Expression
    (function() {//unnamed iife function
        console.log("iife executed");
    })();


    (function foo() {//Named iife function
        console.log("iife executed");
    })();


    // or
    (()=>{
        console.log("arrow fun iife executed");
    })();

    // parameter passing in iife function
    ((name)=>{
        console.log(`hello ${name}`);
    })(" hariom");

    



