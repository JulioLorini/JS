var agora = new Date()
var hora = agora.getHours()
if(hora >= 5 && hora < 12){
    console.log(`Bom dia!Agora são ${hora} horas`)
}else if(hora <= 18 && hora >= 13){
    console.log(`Boa tarde!Agora são ${hora} horas`)
}else if(hora >= 0 && hora <= 4){
    console.log('Hora de dormir, já é madrugada')
}else{
    console.log(`Boa noite!Agora são ${hora} horas`)
}