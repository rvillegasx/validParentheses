const myArg = process.argv.slice(2);

// console.log('argumento', myArgs[0]);

const param = myArg[0];

let parentesis = 0;
let corchetes = 0;
let cuadrados = 0;

for(let i = 0; i < param.length; i++) {
    if (param.charAt(i) == '(') {
        parentesis = (parentesis + 1) + (corchetes + cuadrados);
    }
    if (param.charAt(i) == ')') {
        parentesis = (parentesis - 1) - (corchetes + cuadrados);
    }
    if (param.charAt(i) == '{') {
        corchetes = (corchetes + 1) + (parentesis + cuadrados);
    }
    if (param.charAt(i) == '}') {
        corchetes = (corchetes - 1) - (parentesis + cuadrados);
    }
    if (param.charAt(i) == '[') {
        cuadrados = (cuadrados + 1) + (corchetes + parentesis);
    }
    if (param.charAt(i) == ']') {
        cuadrados = (cuadrados - 1) - (corchetes + parentesis);
    }
}
if (parentesis == 0 && cuadrados == 0 && corchetes == 0) {
    console.log('valid');
} else {
    console.log('invalid');
}
