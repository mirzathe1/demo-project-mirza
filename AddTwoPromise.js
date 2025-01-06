function promises(promise1,promise2){
    return new Promise(async(resolve,reject)=>{
        let number1= await promise1();
        let number2 = await promise2();

        resolve(number1+number2);

    })
}

promise1 = new Promise(resolve => setTimeout(() => resolve(2),49)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

await promises(promise1,promise2);

