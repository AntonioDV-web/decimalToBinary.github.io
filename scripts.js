const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [ // los textos de las animaciones al escribir el numero 5 en la entrada
  {
    inputVal: 3,
    addElDelay: 1000,
    msg: 'Este método de división es común en programación y sistemas digitales porque convierte números decimales a binarios, esenciales en la representación de datos con 0 y 1.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: 'Luego, se organizan los restos desde el último al primero para formar el número binario. Así, si el número decimal es 13, los restos serán 1, 0, 1 y 1, dando como resultado el binario 1101..',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "Para convertir un número decimal a binario, se divide repetidamente entre 2 y se anota el residuo de cada división hasta que el cociente sea cero. Cada residuo representa un dígito binario.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
];

const decimalToBinary = (input) => { // funcion para realizar la conversion de decimal a binario
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
}

const showAnimation = () => { // funcion para las animaciones con su tiempo
  result.innerText = "Como se convierte un numero decimal a binario?";

  animationData.forEach((obj) => { // para setear el tiempo de cada animacion y el tiempo de eliminacion de cada animacion
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          ${obj.inputVal}
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  setTimeout(() => {
    result.textContent = decimalToBinary(5)
  }, 20000);
};

const checkUserInput = () => { // para verificar si el valor de entrada es el correcto al hacer click en el boton
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) { // con esta condicional if validaremos que no se ingrese ningun dato que no sea un numero decimal y numero positivo
    alert("Por favor escribe un numero mayoy o igual a 0 ");
    return;  // con return hacemos que la funcion termine y evitamos que se ejecute en algun otro momento
  }

  if (inputInt === 5) { // con esta condicional haremos la animacion al poner el numero 5
    showAnimation();
    return;
  }

    result.textContent = decimalToBinary(inputInt);
      numberInput.value = "" // para que se borre el numero ingresado anteriormente, y asi poder ingresar un numero nuevo
}

convertBtn.addEventListener("click", checkUserInput) 

numberInput.addEventListener("keydown", (e) => { // para hacer la conversion cuando se preciona la tecla enter o return
    if (e.key === "Enter") {
        checkUserInput();
      }  
})


