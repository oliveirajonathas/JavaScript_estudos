function parimp(n){
    if(n%2==0){
        var res = 'PAR'
    }else{
        var res = 'IMPAR'
    }
    return res
}

var valor = 20
console.log(`O valor ${valor} é ${parimp(valor)}`)