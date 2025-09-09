let num = document.getElementById('num')
let res = document.getElementById('res')


function clicar() {
    if (num.value.length == 0)
        alert("Favor digitar um número primeiro")

    else {
        let valor = Number(num.value)
        for (let cont = 1; cont <= valor ; cont ++) {
            res.innerHTML += `${cont}, `
        }
    }
}
num.focus()