const soma=(...valores) =>{
    const somar = val =>{
        let res = 0
        for(let v of val)
            res += v
        return res
    }
    
    return somar(valores)
}

console.log(soma(1,2,3,4))