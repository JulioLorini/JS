let num = [5, 8, 2, 9, 3]
num[5] = 6

num.push(2)
//adiciona um número na casa seguinte

//console.log(num.length)
//mostra o tanto de casas

//num.sort() 
//deixa os números em ordem

console.log(num[3])
console.log(`${num}`)
for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}
let pos = num.indexOf(7)
if(pos == -1){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`o valor está na casa ${pos}`)
}
