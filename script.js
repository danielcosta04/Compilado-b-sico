function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let ress = document.getElementById('ress')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        ress.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] faltam dados')
    } else {
        //alert('TUDO OK!')
        ress.innerHTML = 'contando:<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo inválido! considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                ress.innerHTML += `${c} \u{1f449}`
            }
        } else {
            //contagem decrescente
            for(let c = i; c >= f; c -= p) {
                ress.innerHTML += `${c} \u{1f449}`
            }
        }
        ress.innerHTML += `\u{1f3c1}`
    }
}

function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            c++

        }
    }
}

function calcular(){
    var txtv = window.document.querySelector('input#txtvel')
    var resu = window.document.querySelector('div#resu')
    var vel = Number(txtv.value)
    resu.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong></p>`
    if(vel > 60){
        resu.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
    resu.innerHTML += `<p>Dirija com segurança</p>`
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homens'
            if(idade >= 0 && idade < 10) {
                 //Crianca
                img.setAttribute('src', 'menino.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'rapaz.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'menina.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'moca.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Identificado ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora > 0 && hora < 12){
        //Bom dia
        img.src ='manha.jpg'
        document.body.style.background = '#e2c9f'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}