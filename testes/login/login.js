function jv(){
    let usuario = document.getElementById("usuario")
    let senha = document.getElementById("senha")
    let res = document.getElementById("res")

    if(usuario.value == ""){
       alert("digite seu usuario")
       return
    }else if (usuario.value == "thaynara"|| usuario.value == "Thaynara" || usuario.value =="THAYNARA" ){
        alert("usuario ok")
        
    }else{
        res.innerHTML="usuario incorreto"
        return
    }

    if(senha.value == ""){
        alert("digite sua senha")
        return
    }else if(senha.value != "02042011"){
        res.innerHTML="senha incorreta"
        return
    }else{
        res.innerHTML="senha ok tbm esse treco deu certo"
    }
    
}