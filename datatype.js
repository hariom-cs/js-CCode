"use strict";//treat this code as a neweer version of js
// alert("hello")- we are using node js not browser so this dont work

// let x;       // Now x is undefined
// console.log(typeof(x));

// x = 5;       // Now x is a Number
// console.log(typeof(x))

// x = "John";  // Now x is a String 
// console.log(typeof(x))





// // 6\\datatype conversion
// let score =23;


// let score1 ="23";
// console.log(typeof score);//number
// console.log(typeof (score1));//string
// let valInNumber = Number(score1) //type conversion
// console.log(typeof  valInNumber); //number

// console.log("");
// let num = "12a";
// console.log("12a is ->"+typeof num);//string
// console.log("convesion 12a from string to number is- "+Number(num));
// console.log("Type of NaN - "+typeof(Number(num)));//number but it should not

// console.log("");
// let num1 = null;
// console.log("type of null is - "+ typeof num1);
// console.log("No. conversion of null is - "+Number(num1)); // -0
// console.log("type of converted no. is " + typeof Number(num1)); 

// console.log("");
// let num2 = undefined;
// console.log("value of num2 is -"+num2);
// console.log("type of undefined -" +typeof num2);
// console.log("conversion to number-"+ Number(num2));
// console.log("type  of  "+Number(num2)+ " is - " + typeof Number(num2));


// console.log("");
// let num3 = true; //
// console.log("value of num3 is :"+num3); 
// console.log("type of "+num3+" is :" +typeof num3);
// console.log("conversion to number:"+ Number(num3)); // false = 0,true  = 1
// console.log("type  of  "+Number(num3)+ " is : " + typeof Number(num3));

// // conversion - many type read documentation
// // "33" => 33
// // "33a" -> NaN
// // true => 1; flase => 0








// //------------7-\\why String to number conversion is confusion//--------------
// let str1 = "hello"
// console.log("1"+2);
// console.log(1 + 2 + "4");


// let value = true;
// console.log(typeof value);// boolean
// value = String(value); // now value is a string "true"
// console.log(typeof value);// string









// ///////// ------------8\\Comparison of datatypes in javascript//--------------

// //-> if you are comparing two datatypes ensure that the datatype should be the same for both numbers
    // console.log("2">1); //true -but not the write way

    // console.log(null > 0); //false
    // console.log(null >= 0); //true
    // console.log(null == 0); //false
    // console.log(null < 0); //false


    // console.log(undefined < 0); //false
    // console.log(undefined <= 0); //false
    // console.log(undefined == 0); //false
// //NOTE- THE REASON  IS THAT THE EQULITY CHECK '==' AND COMPARISION '>', '< ', '>=', '<=' WORK DIFFERENTLY.
// //COMPARISION CONVERT NULL TO A NUMBER TREATING IT AS A "0".
// // 
// // THATS WHY 
// //          "console.log(null >= 0);" IS "TRUE" 
// // AND      "console.log(null == 0);" IS "FALSE".


/////===================================lec-09==================
//interview Notes on datatypes
// refers notes






// //==============================Lec-11===================================
// //==============================String===================================
    // const name="hariom"
    // const repocount = 30
    // console.log(name + repocount + "Value");
    // console.log(`hello my name is ${name} and my reposcount is ${repocount}`);








//==============================Lec-12===================================
//==============================Number and Math===================================
    // const balance = new Number (100)
    // console.log(balance);   //[Number: 100]

    // const score = 102;
    // console.log(score);

    // console.log(typeof balance.toString()); //string
    // console.log(balance.toFixed(2)); //100.00 //used for precision value

    // const otherNumber = 123.6754;
    // console.log(otherNumber.toPrecision(3));//i.e. i need precise value and need to fucus on 3 value w/c is given in argument.
    //                                         //o/p-> 124
    // console.log(otherNumber.toPrecision(2));//1.2e+2   == 1.2x10^2 = 120
    // console.log(otherNumber.toPrecision(4));//123.7

    // const num2 = 10000000;
    // console.log(num2.toLocaleString('en-IN')); //1,00,00,000


    

// ++++++++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++++++
    
    // console.log(Math);
    // console.log(Math.abs(-112));//112
    // console.log(Math.round(4.3));//4
    // console.log(Math.ceil(4.23));//5
    // console.log(Math.floor(4.90));//4
    // //have many methods like {max, min, random, etc.}


    // console.log(Math.random());//return random value bw 0 to 1
    // console.log(Math.random()*10 + 1);//+1 for safe case of 0.01-- return by this-> Min Value = 1;
    //                                   // * by 10 to get value b/w 1 to 10
    
    // console.log(Math.floor(Math.random()*10 + 1)); //   7
    
    // //important formula
    // const min = 10
    // const max = 20
    // console.log(Math.floor(Math.random() * (max - min + 1) + min));
    
    
    //// pass--> pCe=.sHIL0=C<6h)








//==============================Lec-13===================================
//==============================Date and time===================================

    // let myDate = new Date();
    // console.log(myDate); //2025-05-17T05:33:24.769Z
    // console.log(myDate.toString());//Sat May 17 2025 11:04:15 GMT+0530 (India Standard Time)
    // console.log(myDate.toDateString());//Sat May 17 2025
    // console.log(myDate.toLocaleString());//5/17/2025, 11:05:27 AM
    
    // let myCreatedDate = new Date("01-13-2003");
    
    // const myTimestamp = Date.now();
    // console.log(myTimestamp);
    // console.log(myCreatedDate.getTime());
    

    // let newDate = new Date();
    // console.log(newDate);
    // console.log(newDate.getDay());
    // console.log(newDate.getMonth()+1);
    
    // // *****
    // newDate.toLocaleString('default',{
    //     weekday:"long",
    // })




//==============================Lec-14===================================
//==============================Arrays===================================
    // let myArr = new Array();
    // myArr = ["a", "b" ,2, "hariom"]
    // console.log(myArr);
    
    const marvel_heros = ["thor", "ironman", "spiderman"];
    const dc_heros = ["superman", "flash", "batman"];
    // console.log(marvel_heros);
    // console.log(dc_heros);
    

    // marvel_heros.push(dc_heros);//ye array ko as a data element 
    //                             //le  liye hai...kyuki array me koi v data element daal skte at a time
    // console.log(marvel_heros);          // [ 'superman', 'flash', 'batman' ]        
    // console.log(marvel_heros[3][1]);    //flash
    


                ////Method -1 to merge two array
                // ==============================
    //console.log(marvel_heros.concat(dc_heros));//it will create a new array
    // like the following--and "marvel_heros" dont change..
    const con_heros = marvel_heros.concat(dc_heros);
    // console.log(con_heros);

                //method - 2 using spread
    const new_arr = [...dc_heros, ...marvel_heros]
    // console.log(new_arr);
    

                //nested-array
    const anot_arr  =[1,2,3,[4,5,6],7,[6,7,[4,5]]];
    // console.log(anot_arr);
    const real_anot_arr = anot_arr.flat(Infinity);
    // console.log(real_anot_arr);
    
    // //read arrary method about ==>  .from(), .isArray(), .of()
    
    





//==============================object==================
//=============================16=======================
    // syntax
        const regular_user = {
            email:"hariomcs@gmail.com",
            fullname:{
                userfullname:{
                    firstname:"hariom",
                    lastname:"kumar"
                }
            }
        }
        // console.log(regular_user.fullname.userfullname.firstname);
        //optional chaining also can be used if fullname not exit it will retrun ow it will leave.


     //combine object--- METHOD - 01 - ASSIGN OPERATOR
    const obj1 ={1:"a", 2:"b"}
    const obj2 ={3:"a", 5:"b"}
    const newobj=Object.assign({},obj1,obj2);
    // console.log(newobj);

    // Method -2 using spread operator
    const newobjt = {...obj1, ...obj2}
    // console.log(newobjt);


    const tinder_user ={}
    tinder_user.id ="123abc"
    tinder_user.name = "hariom"
    tinder_user.isloggdin = false
        // console.log(tinder_user);
    //have to extract key as an array
    const arrKey=Object.keys(tinder_user);
    // console.log(arrKey);
    //insteast of keys we can write value to extract value of the object

    //.entries==>harek [key:"value"] ka ek alg array bna deta hai
    


            //OBJECT DE-STRUCTURING
    const course = {
        coursename :"js in hindi",
        price : "999",
        courseinst:"hairom"
    }
    //generally we access like this below but using de-str help to write clean code--
    // console.log(course.courseinst);

    const{courseinst} = course//object de-str done
    // console.log(courseinst);
    


//================function==================
    
    function loginUser(username) {
        if(!username){//it will take "undefined" if value is not provided in the parameter.
            console.log("enter name...");
            return
        }

        return `${username} just logged in...`
    }
    // console.log(loginUser("hariom"));
    

    const user ={
        username : "hariom",
        price:199
    }
    function handle_obj(anyobject) {
        console.log(`username is ${anyobject.username} and  price is ${anyobject.price}`);

    }  
    handle_obj(user)//username is hariom and  price is 199
    //we  can pass directly object like 
    handle_obj({
        username:"hariom",
        price:200
    }) //username is hariom and  price is 200
