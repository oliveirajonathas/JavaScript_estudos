function gerarTabuada(){
    var num = document.getElementById('numero');
    var tabuada = document.getElementById('tabuada');    
    if(num.value.length == 0){
        alert('Digite um número!')
    }else{
        num = Number(num.value)
        tabuada.innerHTML = ''
        for(var i=1; i<=10; i++){
            var opt = document.createElement('option')
            opt.text = `${num} X ${i} = ${num*i}`
            opt.text = `tab${c}`
            tabuada.appendChild(opt)
        }                
    }
}