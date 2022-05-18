const myArg = process.argv.slice(2);

const param = myArg[0];

let parentesis = BigInt(0);
let corchetes = BigInt(0);
let cuadrados = BigInt(0);
if (param.length > 1) {
    for(let i = 0; i < param.length; i++) {
        if (param.charAt(i) == '(') {
            parentesis = (parentesis + BigInt(1)) + BigInt(corchetes + cuadrados);
        }
        if (param.charAt(i) == ')') {
            if (parentesis == 0) {
                parentesis = BigInt(-1);
                continue;
            }
            parentesis = (parentesis - BigInt(1)) - BigInt(corchetes + cuadrados);
        }
        if (param.charAt(i) == '{') {
            corchetes = (corchetes + BigInt(1)) + BigInt(parentesis + cuadrados);
        }
        if (param.charAt(i) == '}') {
            if (corchetes == 0) {
                corchetes = BigInt(-1);
                continue;
            }
            corchetes = (corchetes - BigInt(1)) - BigInt(parentesis + cuadrados);
        }
        if (param.charAt(i) == '[') {
            cuadrados = (cuadrados + BigInt(1)) + BigInt(corchetes + parentesis);
        }
        if (param.charAt(i) == ']') {
            if (cuadrados == 0) {
                cuadrados = BigInt(-1);
                continue;
            }
            cuadrados = (cuadrados - BigInt(1)) - BigInt(corchetes + parentesis);
        }
    }
} else {
    parentesis = BigInt(1);
}

if (parentesis == 0 && cuadrados == 0 && corchetes == 0) {
    console.log('valid');
} else {
    console.log('invalid');
}
