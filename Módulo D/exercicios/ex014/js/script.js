function carregar(){
    var mgs = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  10
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >=0 && hora < 12){
        //BOM DIA!
        img.src = 'imagens/fotomanha.png'
        //img.setAttribute('src','imagens/fotomanha.png')// OUTRA FORMA
        img.alt = "Foto da manhã"
        document.body.style.background = "#009acf"
    }else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = "imagens/fototarde.png"
        img.alt = "Foto da tarde"
        document.body.style.background = "#ff885d"
    }else{
        //BOA NOITE
        img.src = "imagens/fotonoite.png"
        img.alt = "Foto da noite"
        document.body.style.background = "#031e29"
    }
}