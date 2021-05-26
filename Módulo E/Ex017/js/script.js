function gerarTabuada(){
    let numero = document.getElementById('numero')
    if(numero.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        let num = Number(numero.value)
        let res = document.getElementById('res')
        res.innerHTML = `<p>Tabuada de ${num}</p>`
        for(let i = 1; i <= 10; i ++){
            res.innerHTML += `<p>${num} X ${i} = ${num*i}</p>`
        } 
    }       
}