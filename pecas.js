var lista=["Motor","Ar condicionado","Amortecedor"]

if (lista.length < 10) {
    console.log("É possível cadastrar mais peças")
    }
    else {
        console.log("Não há mais espaço na lista")
    }
let peso = 120;
if(peso<100){
    console.log("A peça deve pesa 100g no mínimo")}
    else {
        console.log("A peça possui peso adequado")
    }
let nomepeca = "";
if (nomepeca.length>3){
    console.log("Nome da peça adequado")}
else if(nomepeca.length==0){
    console.log("É preciso colocar um nome na peça")
}
else {
    console.log("Nome deve ter mais de 3 caracteres")
}

switch(nomepeca.length){
    case 0:
    console.log("Dê nome a peça")
    break;

    case 1:
    case 2:
    case 3:
    console.log("Nome precisa ter mais de 3 caracteres")

    default:
        console.log("Nome a peça está adequado")
        break;
}