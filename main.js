'use strict'
const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumeroImpares = document.getElementById('botao-mostrar-numeros-impares')
const botaoMostrarMultiplos3e4 = document.getElementById('botao-mostrar-multiplos-3-e-4')
const botaoMostrarTriplo = document.getElementById('botao-mostrar-numeros-triplo')
const botaoMostrarMultiplos3ou4  = document.getElementById('botao-mostrar-multiplos-3-ou-4')
const botaoMostrarAnterior = document.getElementById('botao-mostrar-anterior')

function mostrarTodosNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
     const container = document.getElementById('container-todos-numeros')



     container.replaceChildren('')
     const ultimoIndice = numeros.length
     for(let contador=0; contador < ultimoIndice; contador ++){    
        const novoSpan = document.createElement ('span')
        novoSpan.textContent = numeros [contador]
        container.appendChild(novoSpan)
     }
}

function mostrarNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador< ultimoIndice; contador++){
        if(numeros[contador] % 2 == 0){
            const novoSpan = document.createElement ('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)

        }
    }
}

function mostrarNumerosImpares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador< ultimoIndice; contador++){
        if(numeros[contador] % 2 != 0){
            const novoSpan = document.createElement ('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)

        }
    }
}

function mostrarMultiplos3e4(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos-3-e-4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador< ultimoIndice; contador++){
        if(numeros[contador] % 3 == 0 && numeros[contador] % 4 == 0   ){
            const novoSpan = document.createElement ('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)

        }
    }
}

function mostrarMultiplos3ou4(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos-3-ou-4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador< ultimoIndice; contador++){
        if(numeros[contador] % 3 == 0 || numeros[contador] % 4 == 0   ){
            const novoSpan = document.createElement ('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)

        }
    }
}

function mostrarNumeroTriplo(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numero-triplo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let contador = 0; contador< ultimoIndice; contador++){
        [contador] * 3
            const novoSpan = document.createElement ('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)

        }
    }

function mostrarNumeroAnterior(){
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-numero-anterior')
    
        container.replaceChildren('')
        const ultimoIndice = numeros.length
    
        for(let contador = -1; contador< ultimoIndice; contador++){
                const novoSpan = document.createElement ('span')
                novoSpan.textContent = numeros[contador]
                container.appendChild(novoSpan)
    
            }
        }


botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)
botaoMostrarTodosNumeros.addEventListener('click', mostrarNumerosPares)
botaoMostrarTodosNumeros.addEventListener('click', mostrarNumerosImpares)
botaoMostrarTodosNumeros.addEventListener('click', mostrarMultiplos3e4)
botaoMostrarTodosNumeros.addEventListener('click', mostrarMultiplos3ou4)
botaoMostrarTodosNumeros.addEventListener('click', mostrarNumeroTriplo)
botaoMostrarTodosNumeros.addEventListener('click', mostrarNumeroAnterior)