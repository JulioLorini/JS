function contar(){
            var inicio = document.getElementById('txtin')
            var fim = document.getElementById('txtfm')
            var passo = document.getElementById('txtps')
            var res = document.querySelector('div#res')

            if(inres == 0 || fmres == 0 || psres == 0){
                window.alert('[ERRO]Faltam Dados!')
            }else{
                res.innerHTML = ('Contando: <br>')
                var inres = Number(inicio.value)
                var fmres = Number(fim.value)
                var psres = Number(passo.value)
                //Contagem crescente
                if(inres < fmres){
                    for(let c = inres;c <= fmres;c += psres){
                        res.innerHTML += `${c} `
                    }
                }else{
                    //contagem decrescente
                    for(let c = inres;c >= fmres;c -= psres){
                        res.innerHTML += `${c} `
                    }
                }
                res.innerHTML += `\u{1F3C1}`
            }
        }