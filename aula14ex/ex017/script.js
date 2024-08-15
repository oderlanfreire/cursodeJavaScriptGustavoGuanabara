function gerarTabuada(){
    let num = document.getElementById('num')
    let tabuada = document.getElementById('seltabuada')

    if(num.value.length == 0){
        alert('Erro: campo Número em branco, insira um número')
    }else{
        let n1 = Number(num.value)
        tabuada.innerHTML = ''
        for(i = 1; i <= 10; i ++){
            let mult = document.createElement('option')
            mult.text = `${n1} * ${i} = ${n1*i}`
            mult.value = `tabuada${i}`
            tabuada.appendChild(mult)

        }
    }
}