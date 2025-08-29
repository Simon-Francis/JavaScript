
function parimp(n) {
    if(n%2 == 0) { // se n dividido por 2 sobrar 0
        return 'Par'
    } else {
        return 'ímpar'
    }
}

let res = parimp(10)
console.log(res)