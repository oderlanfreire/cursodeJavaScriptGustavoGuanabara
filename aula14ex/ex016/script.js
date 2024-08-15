function contando(){
    let inicio = document.getElementById('n1')
    let fim = document.getElementById('n2')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('Erro: dados faltantes!')
        res.innerHTML = 'Não foi possível contar o número de passos.'
    }else{
        res.innerHTML = 'Contando:<br>'
        let a = Number(inicio.value)
        let b = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo com valor inválido.')
        }
        if(a < b){
            for(let i = a; i <= b; i += p){
                res.innerHTML += `${i} \u{1F463} `
            }
        }else{
            for(let i = a; i >= b; i-= p){
                res.innerHTML += `${i} \u{1F463} `
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}