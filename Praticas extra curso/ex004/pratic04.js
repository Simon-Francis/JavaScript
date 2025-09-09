let num = document.getElementById('num')
let res = document.getElementById('res')


function clicar() {

    if (num.value.length == 0) {
        alert("Favor digitar um número primeiro")
    
    } else {
        res.innerHTML = ''
        let valor = Number(num.value)

        for (let cont = 0; cont <= 10; cont++) {
            let item = document.createElement('option')
            item.text += `${valor} * ${cont} = ${valor*cont}`
            res.appendChild(item)

        }
    }

}
num.focus()