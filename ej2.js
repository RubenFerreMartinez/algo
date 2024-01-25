// DIV PRINCIPAL
const divFondo = document.createElement("div");
divFondo.classList.add('flex');
document.body.append(divFondo);

//DIV INPUT
const divInput = document.createElement("div");
divInput.classList.add('flex');
const inputRandom = document.createElement("input");
inputRandom.setAttribute("type", "text");
inputRandom.setAttribute("disabled", "");
divInput.append(inputRandom);
divFondo.append(divInput);

// DIV CALCULADORA

const divCalculadora = document.createElement("div");
divCalculadora.classList.add('flex' ,'grid');

const inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("disabled", "");
inputPassword.classList.add('column3');
divCalculadora.append(inputPassword);

// BOTONES CALCULADORA ALEATORIOS
const botones = ["1", "2", "3", "4", "5", "6", "A", "B", "C"];
for(let i = 0; i <=8; i++){
    const numRandom = Math.floor(Math.random() * botones.length);
    const boton = document.createElement("button");
    boton.textContent = botones[numRandom];
    // boton.setAttribute("type", "button");
    boton.value = botones[numRandom];
    botones.splice(numRandom, 1);
    divCalculadora.append(boton);
}

// BOTONES CALCULADORA FIJOS
const btnX = document.createElement("button");
btnX.textContent = "X";
divCalculadora.append(btnX);
const btnValidar = document.createElement("button");
btnValidar.textContent = "Validar";
btnValidar.classList.add('column2');
divCalculadora.append(btnValidar);
divFondo.append(divCalculadora);

// GENERAR PASSWORD ALEATORIO
const opciones = ["1", "2", "3", "4", "5", "6", "A", "B", "C"];
let password = "";
for(let i=0; i<5;i++){
    const numRandom = Math.floor(Math.random() * opciones.length);
    password += opciones[numRandom];
}
inputRandom.value = password;

//PARRAFO PARA EL RESULTADO
const pResultado = document.createElement("p");
document.body.append(pResultado);

divCalculadora.addEventListener("click", e => {
    console.log(e.target.value);
    if(e.target.value){
        inputPassword.value += e.target.value;
    }

    if(e.target.textContent === "X"){
        inputPassword.value = inputPassword.value.slice(0, -1);
    }

    if(e.target.textContent === "Validar"){
        if(inputPassword.value === inputRandom.value){
            pResultado.textContent = "Contraseña correcta"
        }else{
            pResultado.textContent = "Contraseña incorrecta"
        }
    }
});