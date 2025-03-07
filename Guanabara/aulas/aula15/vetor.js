let valores = [2, 7, 4, 6, 9, 4, 5, 6, 2, 3, 4, 3, 2, 2, 2, 5, 6, 7, 9, 4, 1, 8, 2, 7, 3, 6, 4]
for(let n = 0;n<valores.length;n++){
    console.log(`a posição ${n} tem o valor ${valores[n]}`)
}

ou

for(let c in valores){
    console.log(`a posição ${c} tem o valor ${valores[c]}`)
}