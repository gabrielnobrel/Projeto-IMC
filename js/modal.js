//OBJECT LITERAL
export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open: function () {
    Modal.wrapper.classList.add("open");
  },
  close: function () {
    Modal.wrapper.classList.remove("open");
  },
};

Modal.buttonClose.onclick = () => {
  Modal.close();
};

//FECHAR O POPUP COM A TECLA ESC
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  // console.log(event.key); Para saber qual tecla está sendo pressionada
  if (event.key === "Escape") {
    Modal.close();
  }
}
