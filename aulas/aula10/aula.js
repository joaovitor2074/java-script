function jv(...valores){
    let res = 0

    for(let v of valores){
        res += v
    }
    return res
}

console.log(jv (10,25,20))
