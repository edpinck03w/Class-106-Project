var mathLib = require('./myMath'); // using a ./ means reference a file in the same folder

//function homework(){
    //print the first 20 even numbers
//}

function init(){

    console.log('Hello World!');

    let age = 90;
    console.log(age);
    
    let name = "Edward Pinckney";
    console.log('My name is ' + name);
    console.log(`My name is ${name}`);

    mathLib.sayHello('a paramater value'); // executes the function that is declared on the module
    var res = mathLib.sum(21, 21);
    console.log(res);

    var g = mathLib.greater(89745623, 7452125);
    console.log(g);
    
    console.log(mathLib.greater(-1, -2));
    console.log(mathLib.greater((2*3), -2));

    console.log('Is even: ' + mathLib.isEven(42));
    console.log('Is even: ' + mathLib.isEven(33));

    //homework();
}




init();