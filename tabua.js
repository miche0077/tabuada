let tabua = prompt('Qual tabúa de multiplicação você quer imprimir?')

for(let i = 1 ; i < 11; i++){
    document.write( tabua + ' ' + 'x' + ' ' + i +' '+ '=' + ' ' + (tabua * i) + '<br>' )
}
