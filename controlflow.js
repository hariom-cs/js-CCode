//control flow
    //topic- if, if-else, switch
    //switch syntax:
        // switch (key) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }


    const userEmail ="hariomcse01@gmail.com"
    if (userEmail) {
        console.log("got user");
        
    }
    else{
        console.log("dont");
        
    }


// false value->false, 0 , -0, bigint, 0n, "", null, undefiend, nan
//truthy values-> "a", 'false', " ", [],{}, function(){}

const emptyObj={}
if(Object.keys(emptyObj).length ===0){
    console.log("object is empty");
}


//****nullish coalescing  operator(??):null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

val1 = undefined ?? 15


console.log(val1);



//ternary opertor
//condtion ? true : false
const iceprice =100;
iceprice<=80?console.log("less than 80"):console.log("more than 80");

