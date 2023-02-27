const button = document.querySelector("#button");
const texto = document.querySelector("#input")
const message = document.getElementById("message");
const messageError = document.getElementById("message-e");

function validatePassoword(text){
    if(text == "asd"){
        return true
    }
    return false
}

button.addEventListener("click", ()=>{
    const textoInput = document.getElementById("input");
    if(validatePassoword(textoInput.value)){
        // message.classList.toggle("message-color");
        message.style.cssText = "display: flex";
    }else{
        textoInput.value = "";
        messageError.style.cssText = "display: flex";
    }   
})

message.addEventListener("click", ()=>{
    message.style.cssText = "display: none";
})

messageError.addEventListener("click", ()=>{
    messageError.style.cssText = "display: none";
})
