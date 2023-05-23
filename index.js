// var a = 10
// function aa() {
    
//     console.log(b);
//     function b() {
//         console.log(a);
//     }return b
// }

// aa()

// var x = 5;
// function a(){
//     b()
 
    
//     function b() {
//            var y = 10
//         console.log(y);//
//         c()
//         function c() {
//             console.log(x);//
//         }
//     }
// }
// var x = 100

// a()




// let & const\
// // console.log(a);
// let a = 100
// var b = 1
// let b;
// b = 100
// b = 200
// console.log(b);
// const
// const a = 100
// a = a + 100

// {
//     var a = 100
//     let b = 1000
//     const c = 1
//     console.log(a);
//     console.log(b);//blocked scoped
//     console.log(c);
// }
// var a = "a"
// let b = "b"
// const c = "c"
// console.log(a);
// console.log(b);
// console.log(c);

//closure

// var a = 10//gec
// function aa() {//aa
//     var y = 1000
//     b()
//     function b() {
//         var x = 100
//         console.log(y);//b
//     }
// }
// // console.log(x);

// aa()



// var fun1 = a()
// console.log(fun1());

// function outer() {
//     function inner() {
//     console.log(x);
//     }
//     return inner;
//     var x = 20;
    
 
    
//     }
    
// var innerFunc = outer();
    
// innerFunc();
function outer() {

    var x = 10;
    
    function inner() {
    
    var y = 5;
    
    console.log(x + y);
    
    x = 20;
    
    }
    
    return inner;
    
    }
    
var innerFunc = outer();
    
innerFunc();
    
innerFunc();


function a() {
    var x = 100
    function b() {
        y = 10
        function c() {
            console.log(x,y);
        }
        return c
    }
    return b;
}