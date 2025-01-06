function One(fn){
    let isCalled= false;
    return function(...args){
        if(isCalled){
            return undefined;
        }
        else {
            isCalled =true;
            return fn(...args);
        }
    } 
}


function example(a,b,c){

    return a+b+c;
}

let result= One(example);

console.log(result(5,6,7));

console.log(result());
