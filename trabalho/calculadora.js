let peso = Number(prompt("Digite seu peso"))
let altura = Number(prompt("Digite sua altura"))

let imc =(peso/(altura*altura))

if (imc <=0 ) {
window.alert("Digite um valor válido")

}
else if (imc <=18.5 ) {
window.alert("Abaixo do peso")
}

else if (imc >=18.5 && imc <24.9){
window.alert("Peso Normal")
}

else if (imc >=25.0 && imc <29.9){
window.alert("Sobrepeso")
}

else if (imc >=30.0 && imc <34.9) {
window.alert("Obesidade Grau I")
}

else if (imc >=35.0 && imc <39.9) {
window.alert("Obesidade Grau II (severa)")
}

else {
window.alert("Obesidade Grau III (mórbida)")

}
