function carregar(){
    var txt = document.getElementById('txt')
    var img = document.querySelector('div#img')
    var data = new Date()
    var body = document.body
    var hora = data.getHours()
    if(hora >= 5 && hora < 12){
        txt.innerHTML = (`Bom dia!Agora são ${hora} horas!`)
        body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 19){
        txt.innerHTML = (`Boa tarde!Agora são ${hora} horas`)
        body.style.background = '#b9846f'
        img.innerHTML = ('<img src="imgtarde.jpg" alt="Foto do horário" id="foto"></img>')
    } else{
        txt.innerHTML = (`Boa noite!Agora são ${hora} horas`)
        body.style.background = '#515154'
        img.innerHTML = ('<img src="imgnoite.jpg" alt="Foto do horário" id="foto"></img>')
    }
}
