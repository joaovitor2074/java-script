const long = document.getElementById("long")
const lati = document.getElementById("lati")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarlocalizacao,errolocalizacao)
    

}else{
    console.log("geogolocalizacao nao suportada")
}
function mostrarlocalizacao(pos){
    long.innerHTML = pos.coords.longitude
    lati.innerHTML = pos.coords.latitude
}
function errolocalizacao(){
    console.log("erro ao obter a localizacao")
}


 