//Variables

let numeroMaximo = parseInt(prompt("Usuario dame el numero maximo que deseas poner en el juego "));
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + numeroMinimo;
console.log(numeroSecreto);
let numeroUsuario = 0;
let MaxIntentos=3;
let intentos = 1;
//let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`ingresa el numero del 1 al ${numeroMaximo} porfavor :`));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez ': 'veces'  }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;
        //palabraVeces = 'veces';
        if(intentos > MaxIntentos ){
            alert(`LLegastes el numero maximo de intentos : ${MaxIntentos}`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}