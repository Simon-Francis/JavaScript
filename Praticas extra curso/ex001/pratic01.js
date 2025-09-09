let num = document.getElementById('num')
let res = document.getElementById('res')



function clicar() {
    if (num.value.length == 0) {
        window.alert('Favor digitar um número.')

    } else {
        let valor = Number(num.value)
        if (valor % 2 == 1){
        res.innerHTML = `O número ${valor} é ímpar.`
        }else {
        res.innerHTML = `O número ${valor} é par.`
            }
    }
}