// Global Constants and variables
const STATIC_PASSWORD_MESSAGE = document.querySelector("#password");
const GENERATE_PASSWORD = document.querySelector("#update-btn");
const COPY_BTN = document.querySelector("#copy-btn");
const RANGE_BAR = document.querySelector(".number");
const VICIDIAL_CHECK_BOX = document.querySelector("#vicidial-checkbox");
const PICKER_VALUE_BOX = document.querySelector("#quantity");
const MINUS_BTN = document.querySelector(".minus-btn");
const ADDITION_BTN = document.querySelector(".addition-btn");
let savedPassword = "";
let generatePasswordText;
let passwordCopiedText;
let customizedPassword = "";

//addEventListener
GENERATE_PASSWORD.addEventListener("click", obtainCurrentTime);

COPY_BTN.addEventListener("click", () => {
  COPY_PASSWORD(STATIC_PASSWORD_MESSAGE.textContent);
  timeOutFun();
  copiedSuccessfully();
});

RANGE_BAR.addEventListener("input", () => {
  PICKER_VALUE_BOX.value = RANGE_BAR.value;
  if (RANGE_BAR.value >= 12) {
    VICIDIAL_CHECK_BOX.checked = true;
  } else {
    VICIDIAL_CHECK_BOX.checked = false;
  }
  obtainCurrentTime();
});

PICKER_VALUE_BOX.addEventListener("input", () => {
  RANGE_BAR.value = PICKER_VALUE_BOX.value;
  if (PICKER_VALUE_BOX.value >= 12) {
    VICIDIAL_CHECK_BOX.checked = true;
  } else {
    VICIDIAL_CHECK_BOX.checked = false;
  }
  obtainCurrentTime();
});
//para generar el codigo automatiucamente al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {
  obtainCurrentTime();
});

VICIDIAL_CHECK_BOX.addEventListener("click", activateVicidialLength);

ADDITION_BTN.addEventListener("click", incrementTheLength);

MINUS_BTN.addEventListener("click", decrementTheLength);

function obtainCurrentTime() {
  let currentHour = new Date();
  let claroName = "Claro";
  let hour = currentHour.getHours();
  let minute = currentHour.getMinutes();
  let second = currentHour.getSeconds();
  let millisecond = currentHour.getMilliseconds();
  let customizedTime = (minute + second + millisecond).toString();
  let sliceOneDigit = customizedTime.slice(-1);
  let sliceTwoDigits = customizedTime.slice(-2);
  let sliceThreeDigits = customizedTime.slice(-3);

  function passwordGenerator(
    companyName,
    hour,
    oneAditionalSec,
    minute,
    twoAditionalSec,
    second,
    aditionalMillisecond,
    millisecond
  ) {
    let modifiedTime = companyName.concat(
      (
        hour +
        oneAditionalSec +
        minute +
        twoAditionalSec +
        second +
        aditionalMillisecond +
        millisecond
      ).toString()
    );
    return modifiedTime;
  }

  let uncutPassword = passwordGenerator(
    claroName,
    millisecond,
    sliceOneDigit,
    second,
    sliceTwoDigits,
    millisecond,
    sliceThreeDigits,
    second
  );
  let inputBoxValue = document.getElementById("quantity").value;

  if (inputBoxValue == 15) {
    customizedPassword = STATIC_PASSWORD_MESSAGE.textContent =
      uncutPassword.substring(0, 15);
    document.querySelector("#message").textContent = "Strong💪";
  } else if (inputBoxValue == 14) {
    customizedPassword = STATIC_PASSWORD_MESSAGE.textContent =
      uncutPassword.substring(0, 14);

    document.querySelector("#message").textContent = "Strong💪";
  } else if (inputBoxValue == 13) {
    customizedPassword = STATIC_PASSWORD_MESSAGE.textContent =
      uncutPassword.substring(0, 13);
    document.querySelector("#message").textContent = "Strong💪";
  } else if (inputBoxValue == 12) {
    customizedPassword = STATIC_PASSWORD_MESSAGE.textContent =
      uncutPassword.substring(0, 12);
    document.querySelector("#message").textContent = "Strong💪";
  } else if (inputBoxValue == 11) {
    customizedPassword = STATIC_PASSWORD_MESSAGE.textContent =
      uncutPassword.substring(0, 11);
    document.querySelector("#message").textContent = "Strong💪";
  } else if (inputBoxValue == 10) {
    customizedPassword = STATIC_PASSWORD_MESSAGE.textContent =
      uncutPassword.substring(0, 10);
    document.querySelector("#message").textContent = "Strong💪";
  } else if (inputBoxValue == 9) {
    customizedPassword = STATIC_PASSWORD_MESSAGE.textContent =
      uncutPassword.substring(0, 9);
    document.querySelector("#message").textContent = "Weak😔";
  } else if (inputBoxValue == 8) {
    customizedPassword = STATIC_PASSWORD_MESSAGE.textContent =
      uncutPassword.substring(0, 8);
    document.querySelector("#message").textContent = "Weak😔";
  } else if (inputBoxValue == 7) {
    customizedPassword = STATIC_PASSWORD_MESSAGE.textContent =
      uncutPassword.substring(0, 7);
    document.querySelector("#message").textContent = "Weak😔";
  } else if (inputBoxValue == 6) {
    customizedPassword = STATIC_PASSWORD_MESSAGE.textContent =
      uncutPassword.substring(0, 6);
    document.querySelector("#message").textContent = "Weak😔";
  } else {
    document.querySelector("#message").textContent =
      "Wao, esta longitud no cumple con la norma PCI😔";
  }

  clearTimeout(generatePasswordText);
}

const COPY_PASSWORD = (valor) => {
  if (STATIC_PASSWORD_MESSAGE.textContent.length < 8) {
    document.querySelector("#message").textContent =
      "Wao, esta longitud no cumple con la norma PCI😔";
  } else {
    if (
      STATIC_PASSWORD_MESSAGE.textContent === "Generar password" ||
      savedPassword === valor
    ) {
      document.querySelector("#message").textContent =
        "Generar un password nuevo, por favor😀";
    } else {
      // Creamos un elemento de textarea temporal para copiar el texto al portapapeles se cofigura para que no se muestre..
      const TEMP_TEXTAREA = document.createElement("textarea");
      TEMP_TEXTAREA.style.position = "absolute";
      TEMP_TEXTAREA.style.left = "-9999px";
      TEMP_TEXTAREA.value = valor;
      document.body.appendChild(TEMP_TEXTAREA);
      TEMP_TEXTAREA.select();

      try {
        // Ejecutamos el comando 'copy' para copiar el texto al portapapeles
        document.execCommand("copy");
        document.querySelector("#message").textContent =
          "¡Password copiado exitosamente!✅";
        savedPassword = valor;
        timeOutFun();
        copiedSuccessfully();
      } catch (err) {
        // En caso de que ocurra un error al copiar (puede ser debido a restricciones del navegador)
        alert("Error al copiar el Password. Por favor, copie manualmente.");
      }
      document.body.removeChild(TEMP_TEXTAREA); // Eliminamos el textarea temporal del DOM
    }
  }
};

function timeOutFun() {
  generatePasswordText = setTimeout(GeneratePassTextFun, 30000);
}

function GeneratePassTextFun() {
  document.querySelector("#password").textContent = "Generar password";
}

function copiedSuccessfully() {
  passwordCopiedText = setTimeout(copiedEmptyString, 30000);
}

function copiedEmptyString() {
  document.querySelector("#message").textContent = "";
}

function activateVicidialLength() {
  if (VICIDIAL_CHECK_BOX.checked == true) {
    PICKER_VALUE_BOX.value = 12;
    RANGE_BAR.value = PICKER_VALUE_BOX.value;
    PICKER_VALUE_BOX.disabled = false;
    RANGE_BAR.disabled = false;
    obtainCurrentTime();
  } else if (VICIDIAL_CHECK_BOX.checked == false) {
    PICKER_VALUE_BOX.value = 8;
    RANGE_BAR.value = PICKER_VALUE_BOX.value;
    PICKER_VALUE_BOX.disabled = false;
    RANGE_BAR.disabled = false;
    obtainCurrentTime();
  }
}

function incrementTheLength() {
  if (PICKER_VALUE_BOX.value != 12) {
    ++PICKER_VALUE_BOX.value;
    RANGE_BAR.value = PICKER_VALUE_BOX.value;
    if (PICKER_VALUE_BOX.value >= 12) {
      VICIDIAL_CHECK_BOX.checked = true;
    }
    PICKER_VALUE_BOX.disabled = false;
    // ADDITION_BTN.style.backgroundColor = "red";
    obtainCurrentTime();
  }
}

function decrementTheLength() {
  if (PICKER_VALUE_BOX.value != 8) {
    --PICKER_VALUE_BOX.value;
    RANGE_BAR.value = PICKER_VALUE_BOX.value;
    VICIDIAL_CHECK_BOX.checked = false;
    PICKER_VALUE_BOX.disabled = false;
    // MINUS_BTN.style.backgroundColor = "blue";
    obtainCurrentTime();
  }
}
