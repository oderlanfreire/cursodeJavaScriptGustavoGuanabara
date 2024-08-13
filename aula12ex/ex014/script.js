function atualizar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora>=0 && hora < 6){
        img.src = '../ex014/assets/img/madrugada.jpg'
        document.body.style.background = '#1e1d2f'
    }else if(hora >= 6 && hora < 12){
        img.src = '../ex014/assets/img/manha.jpg'
        document.body.style.background = '#d0ac54'
    }else if(hora >= 12 && hora < 18){

        img.src = '../ex014/assets/img/tarde.jpg'
        document.body.style.background = '#99b5a1'
    }else{
        img.src = '../ex014/assets/img/noite.jpg'
        document.body.style.background = '#12161f'
    }
}