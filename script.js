const story = {
    start: {
        text: 'Você está diante de um antigo castelo. As portas de madeira maciça estão entreabertas, e uma névoa fria sai lá de dentro. Qual é o seu próximo passo?',
        options: [
            { text: 'Entrar no castelo', nextSceneId: 'inside_castle' },
            { text: 'Procurar por outra entrada', nextSceneId: 'forest_path' }
        ]
    },
    inside_castle: {
        text: 'Você entra. A porta range e se fecha atrás de você. Você está em um salão com duas escadarias: uma leva para cima, a outra desce para o porão. O que você faz?',
        options: [
            { text: 'Subir as escadas', nextSceneId: 'upstairs' },
            { text: 'Descer para o porão', nextSceneId: 'basement' }
        ]
    },
    forest_path: {
        text: 'Você decide caminhar ao redor do castelo. A trilha é estreita e leva a uma clareira. De repente, você ouve um uivo. Você corre ou se esconde?',
        options: [
            { text: 'Correr de volta', nextSceneId: 'start' },
            { text: 'Se esconder', nextSceneId: 'hid_result' }
        ]
    },
    upstairs: {
        text: 'Você sobe as escadas, que rangem a cada passo. O andar de cima está escuro e você ouve um som estranho vindo do quarto no final do corredor. Você entra ou volta?',
        options: [
            { text: 'Entrar no quarto', nextSceneId: 'end_win' },
            { text: 'Voltar', nextSceneId: 'inside_castle' }
        ]
    },
    basement: {
        text: 'O porão é frio e úmido. No meio da sala, você encontra um baú de tesouro. Ao abri-lo, um fantasma emerge! O jogo acaba aqui.',
        options: [
            { text: 'Recomeçar', nextSceneId: 'start' }
        ]
    },
    hid_result: {
        text: 'Você se esconde atrás de uma árvore. O uivo se aproxima e se afasta, e o som desaparece. Você sobreviveu. O que você faz agora?',
        options: [
            { text: 'Continuar explorando', nextSceneId: 'explore_forest' },
            { text: 'Voltar', nextSceneId: 'start' }
        ]
    },
    explore_forest: {
        text: 'Ao explorar a floresta, você encontra uma saída do castelo. O jogo acaba aqui, você escapou!',
        options: [
            { text: 'Recomeçar', nextSceneId: 'start' }
        ]
    },
    end_win: {
        text: 'Você abre a porta e encontra uma criatura amigável que lhe dá um mapa para o tesouro. Você encontrou a saída e a riqueza do castelo!',
        options: [
            { text: 'Recomeçar', nextSceneId: 'start' }
        ]
    }
};

let currentScene = 'start';

const storyTextElement = document.getElementById('story-text');
const optionsContainerElement = document.getElementById('options-container');

function startGame() {
    currentScene = 'start';
    showScene(currentScene);
}

function showScene(sceneId) {
    const scene = story[sceneId];
    storyTextElement.innerText = scene.text;
    optionsContainerElement.innerHTML = '';
    scene.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.innerText = option.text;
        button.addEventListener('click', () => chooseOption(option.nextSceneId));
        optionsContainerElement.appendChild(button);
    });
}

function chooseOption(nextSceneId) {
    currentScene = nextSceneId;
    showScene(currentScene);
}

startGame();