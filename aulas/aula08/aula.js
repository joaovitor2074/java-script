function jv(){
    let n1 = 1  
    let n2 = 1
    let res = n1*n2
    if(res %2==0){
        return"par"
    }else{
        return"impar"
    }
}

let res = jv()

console.log(res)