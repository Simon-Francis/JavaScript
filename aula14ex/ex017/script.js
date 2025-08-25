
function calc() {
    var num = document.getElementById('num')
    var res = document.getElementById('p')
    var r = 0
    let c = 0

    if (num.value.length == 0) {
        alert('Por favor, digite um número para que possamos fazer a tabuada')
        res.innerHTML = "Aguardando valor..."
    } else {
        res.innerHTML = ""
        var n = Number(num.value)
    
    while (c <= 10) {
        r = n*c
        res.innerHTML += `${n} x ${c} = ${r}<br>`
        c += 1
    }
    }
        

   
}