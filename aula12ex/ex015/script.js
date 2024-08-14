function verificar(){
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoForm = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if(anoForm.value.length == 0 || anoForm.value > anoAtual || anoForm.value < 0){
        alert('Erro: Ano de nascimento inválido!\nVerifique os dados inseridos e tente novamente.')
    }else{
        let sexForm = document.getElementsByName('radsex')
        let idade = anoAtual - Number(anoForm.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'img')
        if (sexForm[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 13){
                img.setAttribute('src','./assets/img/menino.jpg')
            }else if(idade < 24){
                img.setAttribute('src', './assets/img/jovem homem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', './assets/img/homem adulto.jpg')
            }else{
                img.setAttribute('src', './assets/img/homem idoso.jpg')
            }
        }else if(sexForm[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 13){
                img.setAttribute('src', './assets/img/menina.jpg')
            }else if(idade < 24){
                img.setAttribute('src', './assets/img/jovem mulher.jpg')
            }else if(idade < 50){
                img.setAttribute('src', './assets/img/mulher adulto.jpg')
            }else{
                img.setAttribute('src', './assets/img/mulher idosa.jpg')
            }
        }
        res.innerHTML = `Foi detectado ${genero} com ${idade} anos.`
        res.appendChild(img)
        res.style.textAlign = 'center'
        res.style.display = 'flex'
        res.style.flexDirection  = 'column'
        res.style.alignItems = 'center'
    }
}