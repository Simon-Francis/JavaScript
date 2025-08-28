function soma(n1, n2) { 
    return n1+n2 //somente n1 recebeu um valor, n2 será undefined
}

console.log(soma(2)) //só foi defino o valor de n1


function soma2(m1=0, m2=0) { //se n1 e/ou n2 não receberem valores, será considerado valor 0(zero)
    return m1+m2
}

console.log(soma2(9))