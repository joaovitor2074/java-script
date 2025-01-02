function* contator(){
    let i = 0

    while(true){
        yield i++
        if(i>5)
            break
    }
}
const itp = contator()
for(let c of itp){
    console.log(c)
}
