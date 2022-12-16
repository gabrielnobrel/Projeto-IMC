//VERIFICAR CAMPOS
export function notNumber(value) {
  return isNaN(value) || value == "";
}

//IMC
export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
