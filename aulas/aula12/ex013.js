var agora = new Date()
var dia = agora.getDay()
/*
0 - domingo
1 - segunda
2 - terça
3 - quarta
4 - quinta
5 - sexta
6 - sabado
*/
//console.log(dia)
switch(dia){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sábado')
        break
        default:
            console.log('[ERRO]Dia inválido!')
            break
}