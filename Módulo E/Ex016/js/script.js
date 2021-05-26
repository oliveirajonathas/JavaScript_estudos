function contar(){   
    //Pegando o input inicio
    let inicio = document.getElementById('inicio')
    inicio = Number(inicio.value)
    //Pegando o input fim
    let fim = document.getElementById('fim')
    fim = Number(fim.value)
    //Pegando o input passo
    let passo = document.getElementById('passo')
    passo = Number(passo.value)
    //Pegando a div resultado
    let resultado = document.getElementById('resultado')
    if(inicio == 0 || fim == 0 || passo == 0){
        resultado.innerHTML = 'Impossível contar'
        //alert('ERRO! FALTAM DADOS')        
    }else{
        if(passo <= 0){
            alert('Não é possível passo <= 0. Considerando passo = 1')
            passo = 1
        }
        resultado.innerHTML = 'Contando: '
        //Contagem progressiva
        if(inicio < fim){
            for(let c = inicio; c <= fim; c += passo){
                resultado.innerHTML += `${c} \u{27A1}`
            }
        //Contagem regressiva                
        }else{
            for(let c = inicio; c >= fim; c -= passo){
                resultado.innerHTML += `${c} \u{27A1}`
            }
        }
        resultado.innerHTML += '\u{1F3C1}'
    }    
}

