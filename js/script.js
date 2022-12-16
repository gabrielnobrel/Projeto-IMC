import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateIMC, notNumber } from "./utills.js";

//VARIÁVEIS
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// //OBJECT LITERAL
// const Modal = {
//   wrapper: document.querySelector(".modal-wrapper"),
//   message: document.querySelector(".modal .title span"),
//   buttonClose: document.querySelector(".modal button.close"),

//   open: function () {
//     Modal.wrapper.classList.add("open");
//   },
//   close: function () {
//     Modal.wrapper.classList.remove("open");
//   },
// };

//EVENTOS
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  //PARA VERIFICAR SE É UM NÚMERO E QUE NÃO ESTÁ VAZIO NOS CAMPOS
  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotANumber) {
    // console.log("mostrar o erro");
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);

  displayResultMessage(result);
};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}

//FECHAR A JANELA DE ERRO AO DIGITAR
inputWeight.oninput = () => AlertError.close();
inputHeight.onpinut = () => AlertError.close();

//FECHAR O POPUP
Modal.buttonClose.onclick = () => {
  Modal.close();
};
