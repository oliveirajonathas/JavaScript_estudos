function verificar(){
    var ano_nasc = document.getElementById('ano_nasc')
    ano_nasc = Number(ano_nasc.value)
    var resultado = document.getElementById('resultado')
    var sexo = document.getElementsByName('sexo')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var ano_atual = data.getFullYear()
    var idade = ano_atual - ano_nasc
     
    if (ano_nasc <= 0){
        alert('ERRO! Verifique os dados e tente novamente!')
    }else{        
        //Homem
        if(sexo[0].checked){
            if(idade > 0 && idade < 3){
                //homem-bebe
                resultado.innerHTML = `Homem com ${idade} anos`
                img.src = "imagens/homem-bebe.png"
            }else if (idade < 12){
                //homem-crianca
                resultado.innerHTML = `Homem com ${idade} anos`
                img.src = "imagens/homem-crianca.png"
            }else if (idade < 18){
                //homem-jovem
                resultado.innerHTML = `Homem com ${idade} anos`
                img.src = "imagens/homem-jovem.png"
            }else if(idade < 60){
                //homem-adulto
                resultado.innerHTML = `Homem com ${idade} anos`
                img.src = "imagens/homem-adulto.png"
            }else{
                //homem-idoso
                resultado.innerHTML = `Homem com ${idade} anos`
                img.src = "imagens/homem-idoso.png"
            }
        }        
        //Mulher
        if(sexo[1].checked){
            if(idade > 0 && idade < 3){
                //mulher-bebe
                resultado.innerHTML = `Mulher com ${idade} anos`
                img.src = "imagens/mulher-bebe.png"
            }else if (idade < 12){
                //mulher-crianca
                resultado.innerHTML = `Mulher com ${idade} anos`
                img.src = "imagens/mulher-crianca.png"
            }else if (idade < 18){
                //mulher-jovem
                resultado.innerHTML = `Mulher com ${idade} anos`
                img.src = "imagens/mulher-jovem.png"
            }else if(idade < 60){
                //mulher-adulta
                resultado.innerHTML = `Mulher com ${idade} anos`
                img.src = "imagens/mulher-adulta.png"
            }else{
                //mulher-idosa
                resultado.innerHTML = `Mulher com ${idade} anos`
                img.src = "imagens/mulher-idosa.png"
            }
        }        
    }
}