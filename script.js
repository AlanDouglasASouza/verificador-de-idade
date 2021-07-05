function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verefique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade <= 11){
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 18){
                img.setAttribute('src', 'adolecentehomem.png')
            } else if (idade < 55){
                img.setAttribute('src', 'homem.png')

            } else {
                img.setAttribute('src', 'veio.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
             if (idade <= 11){

                img.setAttribute('src', 'bebemulher.png')
            } else if (idade <= 18){

                img.setAttribute('src', 'adolecentemulher.png')
            } else if (idade < 55){
                img.setAttribute('src', 'mulher.png')        

            } else { 
                img.setAttribute('src', 'veia.png')         
                }
            }       
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos. `
        res.appendChild(img)
    }
}
