let claro = "Claro";
let amov = "Amov";
let opitel = "Opitel";
let horaActual = new Date();
let h = horaActual.getHours();
let m = horaActual.getMinutes();
let s = horaActual.getSeconds();
let ms = horaActual.getMilliseconds();
let time = (m + s + ms).toString();
let sl1 = time.slice(-1);
let sl2 = time.slice(-2);
let sl3 = time.slice(-3);
function passwordGenerator(empresa, hora, segundoAdicionalUnDigito, minuto, segundoAdicionalDosDigito, segundo, milesungoAdicional, milisegundo) {
    let time = empresa.concat((hora + segundoAdicionalUnDigito + minuto + segundoAdicionalDosDigito + segundo + milesungoAdicional + milisegundo).toString());
    return time;
}

let prueba = passwordGenerator(amov, h, sl1, m, sl2, s, sl3, ms)


let prueba2 = prueba.substring(0, 10);

function removeCharsInRange(prueba2, start, end) {
   
       if (start === undefined) {
                start = Math.floor(prueba2.length / 2);
    }
    if (end === undefined) {
        end = start + 1;
        
    } return prueba2.slice(0, start) + prueba2.slice(end);

    
}
console.log(removeCharsInRange(prueba2, undefined, undefined))

