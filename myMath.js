module.exports = {
    sayHello: function(text){
        console.log('Hello there!' + text);
    },
    sum: function(num1, num2){
        return num1 + num2;
    },
    greater: function(num1, num2){
        //return the greter of num1 and num2
        if(num1 > num2){
            return num1;
        }
        return num2;
    },
    isEven: function(num){
        // var res = num % 2; // % is a symbol for the residue meaning the extra numeric values in division
        // return num % 2 === 0;
        
        //for (i=0;i<=20;i++){
        if(num % 2 === 0){
            return true;
        }
        return false;
    
    }
};