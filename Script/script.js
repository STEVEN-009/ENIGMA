var  enc = document.querySelector("#enc");
var  des = document.querySelector("#des");
var copiar = document.querySelector("#copiar")

var result = document.querySelector("#result")
var defaul = document.querySelector("#default")

var texto = document.querySelector("#texto")
var resultado = document.querySelector("#resultado")

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];

function encriptar(){
    if(texto.value != ""){ //Verifica que no este vacio
        resultado.value = texto.value.toLowerCase(); //Convierte el string a minusculas
    for(let i=0; i < matrizCodigo.length; i++) {
        if(resultado.value.includes(matrizCodigo[i][0])) { 
            resultado.value = resultado.value.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 
        }   //Verifica si hay elementos de la matriz en el string             
    }
    result.style.display = "flex";
    defaul.style.display = "none";
    } else{
        swal("Debes ingresar un texto primero", "",{
            className: "back",
        })
    }
    
}
function desencriptar(){
    if(texto.value != ""){
        resultado.value = texto.value.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++) {
        if(resultado.value.includes(matrizCodigo[i][1])) {
            resultado.value = resultado.value.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }                
    }
    result.style.display = "flex";
    defaul.style.display = "none";
    } else{
        swal("Debes ingresar un texto primero", "",{
            className: "back",
        })
    }

    
}
function copiarTexto(){
    resultado.select();
    navigator.clipboard.writeText(resultado.value)
    texto.value = "";
    result.style.display = "none";
    defaul.style.display = "flex";

    swal("Texto copiado", "", "success", {
        className: "back",
      });
}
enc.onclick =  encriptar;
des.onclick =  desencriptar;
copiar.onclick = copiarTexto;