function fib(n){

    if(n>=3){
        const finalNum = fib(n-1)+fib(n-2); 
        // fib(4)+fib(3)//
        console.log(finalNum);
        return finalNum;
        
    }
    else {
        console.log(1);
        return 1;
    }
}

fib(5)