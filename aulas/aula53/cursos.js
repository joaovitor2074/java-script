const cursos =["java script","html","css","aduino","c++"]

// const gettodos=()=>{
//     return cursos
// }

export default function gettodos(){
    return cursos
}
function getcurso(){
    return cursos[0]
}


export{cursos,getcurso}
// export default gettodos