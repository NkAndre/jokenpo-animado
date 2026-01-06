const optionImage = document.querySelectorAll(".option-image");
const container = document.querySelector(".container");
const resulText = document.querySelector(".result-text");
const userResult = document.querySelector(".user-result img");
// Adicionado "img" para selecionar a imagem dentro da div
const computerResult = document.querySelector(".computer-result img"); 

const computerImg = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png'];

const winner={
    RR:"Empate",
    RP:"Computador",
    RS:"Você",
    PP:"Empate",
    PR:"Você",
    PS:"Computador",
    SS:"Empate",
    SR:"Computador",
    SP:"Você"
}
/*
(R) rock - pedra
(P) paper- papel
(S) scissors- tesoura
*/
function handleOptionClick(event) {
    const clickedImage = event.currentTarget;
    const clikedIndex = Array.from(optionImage).indexOf(clickedImage);

    container.classList.add("start");
    resulText.textContent = "...";

    // Define ambos como "pedra" durante a animação de balanço
    userResult.src = computerResult.src = computerImg[0];

    setTimeout(() => {
        container.classList.remove("start");

        userResult.src = computerImg[clikedIndex];

        const randomNumber = Math.floor(Math.random() * computerImg.length);
        computerResult.src = computerImg[randomNumber];

        const userValue=['R', 'P', 'S'] [clikedIndex]

        const computerValue=['R', 'P' ,'S'][randomNumber]

        const userComputerResult= userValue + computerValue

        const finalResult= winner[userComputerResult]

       // console.log(finalResult)

        // Lógica simples para exibir o resultado (exemplo)
        resulText.textContent = userValue === computerValue ? 'Empate' : finalResult + ' ganhou'
    }, 2000); 
}

optionImage.forEach(img => {
    img.addEventListener("click", handleOptionClick);
}); // Fechamento corrigido aqui