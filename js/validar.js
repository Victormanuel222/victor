var formulario=document.getElementById("formulario");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    var nombre=document.getElementById("nombre").value;
    if(nombre==""){
        alert("Debes capturar tu nombre");
    }
    else{
        formulario.onsubmit();
    }
    console.log(nombre);
});



























