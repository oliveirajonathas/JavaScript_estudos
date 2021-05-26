function verificar(){
    var ano_nasc = document.getElementById('ano_nasc')
    ano_nasc = Number(ano_nasc.value)
    var resultado = document.getElementById('resultado')
    var sexo = document.getElementsByName('sexo')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var data = new Date()
    var ano_atual = data.getFullYear()
    var idade = ano_atual - ano_nasc
     
    if (ano_nasc <= 0){
        alert('ERRO! Verifique os dados e tente novamente!')
    }else{        
        //Homem
        if(sexo[0].checked){
            var genero = "Homem"
            if(idade > 0 && idade < 3){
                //homem-bebe
                img.setAttribute('src', 'imagens/homem-bebe.png')
            }else if (idade < 12){
                //homem-crianca
                img.setAttribute('src', 'imagens/homem-crianca.png')
            }else if (idade < 18){
                //homem-jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            }else if(idade < 60){
                //homem-adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            }else{
                //homem-idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        }        
        //Mulher
        if(sexo[1].checked){
            var genero = "Mulher"
            if(idade > 0 && idade < 3){
                //mulher-bebe
                img.setAttribute('src', 'imagens/mulher-bebe.png')
            }else if (idade < 12){
                //mulher-crianca
                img.setAttribute('src', 'imagens/mulher-crianca.png')
            }else if (idade < 18){
                //mulher-jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            }else if(idade < 60){
                //mulher-adulta
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            }else{
                //mulher-idosa
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        resultado.style.textAlign = "center"
        resultado.innerHTML = `${genero} com ${idade} anos`
        resultado.appendChild(img)        
    }
}