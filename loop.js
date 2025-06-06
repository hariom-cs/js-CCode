console.log("LoOp- for and break");
//for
for (let index = 0; index < 10; index ++) {
    const element = index ;
    // console.log(element);
}
// break --> out of the block(loop will be break)
// continue-->skip and don't go to out of the loop





//============WHILE LOOP============
//SYNTAX
// while (condition) {
    
// }







//HIGH ORDER (ARRAY LOOP)---->"FOR OF LOOP"

const arr2=[1,2,3,4,5];
for (const num of arr2) {
    // console.log(num);
    
}

const greeting = "Hello World";
for (const greet of greeting) {
    if(greet==" ")
        continue //space ignored
    // console.log(`each char of greeting is ${greet}`);
    
}




//forof loop on map
    //map in not iterable
const mp = new Map;
mp.set("in","india")
mp.set("us","united state of america")
mp.set("uk","england")

// console.log(mp);//  Map(3) {
                //     'in' => 'india',
                //     'us' => 'united state of america',
                //     'uk' => 'england'
                //   }
for (const [key,value] of mp) {
    // console.log(key+':-'+value);// in:-india
                                // us:-united state of america
                                // uk:-england
}




//forof on object---->not work
const myobj={
    game1:"nfs",
    game2:"bgmi",
    game3:"star-wars"
}
// for (const key of myobj) {
//     console.log(key);       //TypeError: myobj is not iterable
// }


//forin on object---->work
const myobject={
    game1:"nfs",
    game2:"bgmi",
    game3:"star-wars"
}
for (const key in myobject) {
    // console.log(myobject[key]); // nfs
                                // bgmi
                                // star-wars
                                
}


//forin on array
const arr1 =[12,12,11,121,12221]
for (const key in arr1) {
//    console.log(`index ${key} :- ${arr1[key]}`);
}





// =================FOR EACH ON ARRAY==============
const coding =["java","CPP","js","ruby","python","c"]
// method -01
    // coding.forEach(element => {
    //     console.log(element);//this  is function used in foreach loop
        
    // });


// method-02
    // coding.forEach(function itera(element) {
    //     console.log(element);
    // })

// method -03
    // function fun_call(element) {
    //     console.log(element);
    // }
    // coding.forEach(fun_call) //just give reference of the function


//note  - FOR-EACH METHOD HAVE MULTIPLE ARGUMENT
// EG-
    // coding.forEach((key,idx,arr)=>{
    //     console.log(key, idx,arr);
        
    // })
                                // java 0 [ 'java', 'CPP', 'js', 'ruby', 'python', 'c' ]
                                // CPP 1 [ 'java', 'CPP', 'js', 'ruby', 'python', 'c' ]
                                // js 2 [ 'java', 'CPP', 'js', 'ruby', 'python', 'c' ]
                                // ruby 3 [ 'java', 'CPP', 'js', 'ruby', 'python', 'c' ]
                                // python 4 [ 'java', 'CPP', 'js', 'ruby', 'python', 'c' ]
                                // c 5 [ 'java', 'CPP', 'js', 'ruby', 'python', 'c' ]




//+++++++++++++++++++****IMPORTANT****+++++++++++++++++++++++++++ 
// iteration over array of object using for-each
    const mycoding=[
        {
            language_name:"java-script",
            file_name:".js"
        },
        {
            language_name:"java",
            file_name:".java"
        },
        {
            language_name:"python",
            file_name:".py"
        },
        {
            language_name:"C Plus Plus",
            file_name:".cpp"
        }
    ]

    mycoding.forEach((item) => {
        console.log(item.language_name,item.file_name);
        
        
    });
