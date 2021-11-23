alert("realize sua operação com alguns desses sinais : + - / *")
let primeiro_numero = parseInt(prompt("digite o primeiro numero"))
let sinal = prompt("digite o sinal ")
let segundo_numero = parseInt(prompt("digite o seu segundo numero"))
if(sinal === "*"){
    primeiro_numero * segundo_numero
    alert(`seu resultado e ${primeiro_numero * segundo_numero}`)
}
if(sinal === "-"){
    primeiro_numero - segundo_numero
    alert(`seu resultado e ${primeiro_numero - segundo_numero}`)
}
if(sinal === "+"){
    primeiro_numero + segundo_numero
    alert(`seu resultado e ${primeiro_numero + segundo_numero}`)
}
if(sinal === "/"){
    primeiro_numero / segundo_numero
    alert(`seu resultado e ${primeiro_numero / segundo_numero}`)
}