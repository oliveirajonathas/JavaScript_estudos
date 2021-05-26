function criarLista(){    
    var lista = []    
    return lista
}

function capturarNumeros(lista = criarLista()){    
    let numero = document.getElementById('numero')
    numero = Number(numero.value)
    //Montando a lista Select
    let colecao = document.getElementById('colecao')    
    let option = document.createElement('option')
    option.text += `Valor ${numero} adicionado`
    colecao.appendChild(option)
    lista.push(numero)
    return lista
}

function analisarLista(lista = capturarNumeros()){
    var resultado = document.getElementById('res')
    var qnt = lista.length
    resultado.innerHTML += `Ao todo temos ${qnt} numeros cadastrados`
}
