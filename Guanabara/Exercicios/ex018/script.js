
let list = document.getElementById('list')
let nmr = document.getElementById('nmr')
let res = document.querySelector('div#res')
let num = []
num.sort()


function numero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function lista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true 
    }else{
        return false 
    }
}
function adicionar(){
    if(numero(nmr.value) && !lista(nmr.value, num)){
        num.push(Number(nmr.value))
        let item = document.createElement('option')
        item.text = `Valor ${nmr.value} foi adicionado!`
        list.appendChild(item)
        res.innerHTML= ''
    }else{
        window.alert('Valor inválido ou ja encontrado na lista')
    }
    nmr.value = ''
    nmr.focus()
}
function finalizar(){
    if (num.length == 0){
        window.alert('Adicione valores para obter um resultado')
    }else{
        let total = num.length
        let maior = num[0]
        let menor = num[0]
        let soma = 0
        let media = 0
        for(let pos in num){
            soma+=num[pos]
            if(num[pos]>maior)
                maior = num[pos]
                if(num[pos]<menor)
                    menor=num[pos]
                
            
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${total} números cadastrados<br>`
        res.innerHTML += `O maior valor informado foi ${maior}<br>`
        res.innerHTML += `O menor valor informado foi ${menor}<br>`
        res.innerHTML += `A soma dos valores é ${soma}<br>`
        res.innerHTML += `A media dos valores foi ${media}<br>`
    }
}