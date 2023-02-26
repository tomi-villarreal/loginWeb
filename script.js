const button = document.querySelector("#button");
const texto = document.querySelector("#input")

function validatePassoword(text){
    if(text == "asd"){
        return true
    }
    return false
}

button.addEventListener("click", ()=>{
    const textoInput = document.getElementById("input");
    if(validatePassoword(textoInput.value)){
        alert("Contraseña correcta");
    }else{
        textoInput.value = "";
        alert("Contraseña incorrecta");
    }
})

