




























function contar() {
var ini = document.getElementById('ini')
var fim = document.getElementById('fim')
var pas = document.getElementById('pas')
var res = document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert('[ERRO] Faltam dados')
} else {
    res.innerHTML = 'Contando:  '
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)

    if (p <= 0) {
        alert('Passo inválido! Considerando Passo = 1')
        p = 1
    }

    if (i < f) {
    // contagem crescente
    for(let c = i; c <= f; c+= p) {
        res.innerHTML += `${c}  \u{1F480}`    
    }
    } else {
    // contagem regressiva
        for(let c = i; c>= f; c -= p) {
        res.innerHTML += `${c}   \u{1F480}`
        }
    }
    }
}