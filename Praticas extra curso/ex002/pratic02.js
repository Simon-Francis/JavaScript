let num = document.getElementById('num')
let res = document.getElementById('res')


function clicar() {
    if (num.value.length == 0)
        alert("Favor digitar um número primeiro")
    else {
        let valor = Number(num.value)
        res.innerHTML = `o valor digitado foi ${valor} e seu dobro é ${2*valor}.`   
    }
}
num.focus()