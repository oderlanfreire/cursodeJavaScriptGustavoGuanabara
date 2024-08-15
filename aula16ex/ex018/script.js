let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')

let vals = []

function isNum(num){
    if(Number(num) >= 1 && Number(num) <= 100){
        return true
    }else{
        return false
    }
}

function inList(num, list){
    if(list.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNum(num.value) && !inList(num.value, vals)){
       vals.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor adicionado: ${num.value}`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        alert('Valor inválido ou já cadastrado.')
    }
    num.value = ''
    num.focus()
}

function calcular(){
    if(vals.length == 0){
        alert('Erro, não é possível calcular sem valores')
    }else{
        let total = vals.length
        let maior = vals[0]
        let menor = vals[0]
        let soma = 0
        let media = 0

        for(v in vals){
            soma += vals[v]
            if(vals[v] > maior){
                maior = vals[v]
            }
            if(vals[v] < menor){
                menor = vals[v]
            }
        }
        media = parseFloat(soma/vals.length).toFixed(2)
        res.innerHTML = ''
        res.innerHTML += `<p>O total de elementos cadastrados é ${total}</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores cadastrados é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores cadastrados é ${media}</p>`
    }
}

//função para adicionar com enter
num.addEventListener('keypress', function(e){
    if(e.key  === 'Enter'){
        adicionar()
    }
})