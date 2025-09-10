let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')


function clicar() {
    
    
    if (n1.value.length == 0 || n2.value.length == 0){
        alert(`Favor digitar algum número nos campos.`)
            return
    } 
    num1 = Number(n1.value)
    num2 = Number(n2.value)
    
    if (num1 > num2){
        res.innerHTML = ''
        res.innerHTML = `${num1} é maior do que o ${num2}.`
    } else if (num2 > num1){
        res.innerHTML = ''
        res.innerHTML = `${num2} é maior do que o ${num1}.`
    } else {
        res.innerHTML = ''
        res.innerHTML = `${num1} e ${num2} são iguais.`
    }
   
}
