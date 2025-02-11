class cursos{
    static curso = [ "java script" , "html" , "css" , "node" , "MySQL", "c++"]
    constructor(){}
    static gettodosc = () =>{
        return this.curso
    }
    static getcurso = (i_curso) =>{
        return this.curso[i_curso]
    }

    static addcurso=(novocurso)=>{
        this.curso.push(novocurso)
    }
    static apagarcursos = ()=>{
        this.curso = []
    }

}

export default cursos