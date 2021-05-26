function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (Number(form_ano.value) == 0 || Number(form_ano.value) > ano){
        alert('Verifique os dados e tente novamente!')
    }else{
        var form_sex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)        
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (form_sex[0].checked){
            genero = "Homem"
            if(idade >=0 && idade < 10){
                //criança
                img.src = 'imagens/homem.png'
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', '../imagens/homem.png')
            }else{
                //idoso
                img.setAttribute('src', '../imagens/idoso.png')
            }
        } else if (form_sex[1].checked){
            genero = "Mulher"
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/mulher-crianca.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', '../imagens/mulher.png')
            }else{
                //idoso
                img.setAttribute('src', '../imagens/idosa.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }
}