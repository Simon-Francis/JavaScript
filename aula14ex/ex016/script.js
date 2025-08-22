function contar() {
var ini = document.getElementById('ini')
var fim = document.getElementById('fim')
var pas = document.getElementById('pas')

if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert('[ERRO] Faltam dados')
} else {
    alert('TUDO OK!')
}
    

}