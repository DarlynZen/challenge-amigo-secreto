let listaDeAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo == ""){
        alert("Por favor ingrese un nombre");
    } else if (listaDeAmigos.includes(nombreAmigo)){
        alert("El amigo ya está en la lista");
    } else if (nombreAmigo.length > 50) {
        alert("El nombre no puede tener más de 50 caracteres");
    } else {
        listaDeAmigos.push(nombreAmigo);
        mostrarListaDeAmigos();
        limpiarCampoEntrada();
    }
}

function mostrarListaDeAmigos(){
    let lista = "Lista de amigos:\n";
    for (let i = 0; i < listaDeAmigos.length; i++){
        lista += (i + 1) + ". " + listaDeAmigos[i] + "\n";
    }
    asignarTextoElemento("listaAmigos", lista);
}

function asignarTextoElemento(idElemento, texto){
    let elementoHTML = document.getElementById(idElemento);
    elementoHTML.innerText = texto;
    return;
}

function sortearAmigo(){
    if (listaDeAmigos.length == 0){
        alert("No hay amigos en la lista para sortear");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[indiceAleatorio];
        asignarTextoElemento("resultado", "Tu amigo secreto es: " + amigoSorteado);
        limpiarLista();
    }
}

function limpiarCampoEntrada(){
    document.getElementById("amigo").value = "";
}

function limpiarLista(){
    document.getElementById("listaAmigos").innerText = "";
}