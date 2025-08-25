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

    for(let c = i; c <= f; c+= p) {
        res.innerHTML += `${c} `
    }
}
    

}