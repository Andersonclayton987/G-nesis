let order=[];
let clickedOrder =[]; // ordem dos cliques
let score = 0;

//0 = Verde
//1 = Vermelho
//2 = Amarelo
//3 = Azul
//4 = Pink
//5 = White
//6 = Black
//7 = Purple

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

const pink = document.querySelector('.pink');
const white = document.querySelector('.white');
const black = document.querySelector('.black');
const purple = document.querySelector('.purple');

// cria uma ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 8); // Guarda a cor em cada rodada
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i = 0, tam = order.length; i< tam; i++){
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let ligthColor = (element, number) =>{
    number = number * 500;
    setTimeout(()=>{
        element.classList.add('selected')
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');

    });
}

// checa se os botões clicados são os mesmos das cores
let checkOrder =() =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            loser();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando proximo nível`);
        nextLevel();
    }
}

// Função para o click do usuário
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

   
}

//Retorna a cor
let createColorElement = (color)=>{
    if(color == 0){
        return green;
    } else if (color == 1){
        return red;
    } else if (color== 2){
        return yellow;
    } else if(color == 3){
        return blue;
    } else if (color == 4){
        return pink;
    } else if (color == 5){
        return white;
    } else if (color == 6){
        return black;
    } else if (color == 7){
        return purple;
    }
}

// Irá para o próximo nível
let nextLevel = ()=>{
    score++;
    shuffleOrder();
}

// Perder

let loser =()=>{
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em OK`);
    order=[];
    clickedOrder=[];

    playGame();

}

//inicio do jogo
let playGame = ()=>{
    alert('Novo Jogo')
    score = 0;

    nextLevel();
}

//evento de clique para as cores
green.onclick =()=> click(0);
red.onclick =()=> click(1);
yellow.onclick =()=> click(2);
blue.onclick =()=> click(3);

pink.onclick =()=> click(4);
white.onclick =()=> click(5);
black.onclick =()=> click(6);
purple.onclick =()=> click(7);

//inicio do jogo
playGame();
