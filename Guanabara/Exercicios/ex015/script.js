function verificar(){
    var data = new Date()
    var year = data.getFullYear()
    var ano = document.getElementById('nmr')
    var sex = document.getElementsByName('radsex')
    var res = document.querySelector('div#res')
    var img = document.getElementById('img')
    var idade = year - Number(ano.value)
        if(ano.value.length == 0 || ano.value > year){
            window.alert('Verifique os dados e tente novamente!')
        } else if(ano.value < 1970 && sex[0].checked){
            res.innerHTML = (`Voce é um senhor de ${idade} anos!`)
            img.innerHTML = ('<img src="imagens/idoso.jpg" alt="fotografia pessoa" id="foto">')
        } else if(ano.value < 1970 && sex[1].checked){
            res.innerHTML = (`Voce é uma senhora de ${idade} anos!`)
            img.innerHTML = ('<img src="imagens/idosa.jpg" alt="fotografia pessoa" id="foto">')
        } else if(ano.value < 2006 && sex[0].checked){
            res.innerHTML = (`Voce é um homem de ${idade} anos!`)
            img.innerHTML = ('<img src="imagens/adulto.jpg" alt="fotografia pessoa" id="foto">')
        } else if(ano.value < 2006 && sex[1].checked){
            res.innerHTML = (`Voce é uma mulher de ${idade} anos!`)
            img.innerHTML = ('<img src="imagens/adulta.jpg" alt="fotografia pessoa" id="foto">')
        }else if(ano.value >= 2006 && sex[0].checked){
            res.innerHTML = (`Voce é um menino de ${idade} anos!`)
            img.innerHTML = ('<img src="imagens/menino.jpg" alt="fotografia pessoa" id="foto">')
        }else if(ano.value >= 2006 && sex[1].checked){
            res.innerHTML = (`Voce é uma menina de ${idade} anos!`)
            img.innerHTML = ('<img src="imagens/menina.jpg" alt="fotografia pessoa" id="foto">')
        }
} 