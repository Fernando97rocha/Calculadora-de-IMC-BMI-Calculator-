const mostraCalculo = () => {
    
        const weight = document.querySelector("#weight").value
        const height = document.querySelector("#height").value
        const mainContainer = document.querySelector('#div-main')
    

    if(typeof weight === undefined || typeof height === undefined) {
        throw Error("Os parâmetros devem ser passados")
    } else if (!weight || !height){
        throw Error("Os parâmetros devem ser passados")
    } else if (weight === 0 || height === 0) {
        mainContainer.innerHTML = 'sss'
    } else;

    let valor = Math.trunc((weight / height ** 2) * 10000)
    let frase

    if(valor < 18.5) {
        frase = "Você está abaixo do peso!"
    } else if (valor <= 24.9) {
        frase = "Peso ideal, parabéns!"
    } else if (valor <= 29.9) {
        frase = "Você está acima do peso!"
    } else if (valor <= 34.9) {
        frase = "Obesidade grau I"
    } else if (valor <= 39.9) {
        frase = "Obesidade grau II"
    } else if (valor > 40) {
        frase = "Obesidade grau III"
    } else;

    mainContainer.innerHTML = `<section class="resultado">Seu IMC é ${valor} <br> ${frase}</section>
        <input type="button" value="Voltar" onclick="history.go(0)"></input>`
    

    const apagaCampos = () => {
        document.querySelector("#weight").value = ''
        document.querySelector("#height").value = ''
    }
    apagaCampos()
}
