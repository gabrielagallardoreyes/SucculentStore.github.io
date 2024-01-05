function cambiar(elemento){
    elemento.src = "images/assets/succulents-2.jpg";
}

function vacio(elemento){
    alert("Your cart is empty!");
}

function eliminar(){
    var elemento_cookie = document.querySelector(".cookies");
        elemento_cookie.remove();
    }