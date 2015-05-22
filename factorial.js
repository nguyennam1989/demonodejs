/**
 * Created by nam on 21/05/2015.
 */
//n! .vi 3! =1*2*3 ,4!=3!*4,N!=(N-1)!*N
function factorial(n) {
    if (typeof(n) != "number") {
        return NaN;
    }

    if (n === parseInt(n)) {
        if (n <= 1) {
            return 1;
        } else {
            var result = 1;
            for (var i = 2; i <= n; i++){
                result *= i;
            }
            return result;
        }
    } else {
        return NaN;
    }
}

//Recursive function
function fact(n) {
    if (typeof(n) != "number") {
        return NaN;
    }

    if (n === parseInt(n)) {
        //Stack Overflow
        if (n <= 1) {  //End point of recursive function
            return 1;
        } else {
            return n * fact(n-1);
        }
    } else {
        return NaN;
    }
}

console.log(factorial({n: 4}));
console.log(fact(4));