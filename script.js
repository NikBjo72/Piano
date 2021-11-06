const key = {
    C: document.getElementById('C'),
    D: document.getElementById('D'),
    E: document.getElementById('E'),
    F: document.getElementById('F'),
    G: document.getElementById('G'),
    A: document.getElementById('A'),
    H: document.getElementById('H'),
    Db: document.getElementById('Db'),
    Eb: document.getElementById('Eb'),
    Gb: document.getElementById('Gb'),
    Ab: document.getElementById('Ab'),
    Bb: document.getElementById('Bb')
}

const piano = {
    C: new Audio('./assets/C.wav'),
    D: new Audio('./assets/D.wav'),
    E: new Audio('./assets/E.wav'),
    F: new Audio('./assets/F.wav'),
    G: new Audio('./assets/G.wav'),
    A: new Audio('./assets/A.wav'),
    H: new Audio('./assets/H.wav'),
    Db: new Audio('./assets/Db.wav'),
    Eb: new Audio('./assets/Eb.wav'),
    Gb: new Audio('./assets/Gb.wav'),
    Ab: new Audio('./assets/Ab.wav'),
    Bb: new Audio('./assets/Bb.wav')  
}
const KbK = {
    90: 'C',
    88: 'D',
    67: 'E',
    86: 'F',
    66: 'G',
    78: 'A',
    77: 'H',
    83: 'Db',
    68: 'Eb',
    71: 'Gb',
    72: 'Ab',
    74: 'Bb'
}

const element = {
    startBtn: document.getElementById('startBtn'),
    clearBtn: document.getElementById('clearBtn'),
    speed: document.getElementById('speed'),
}

let savedPiano = [];

Object.values(key).forEach(element => {
    element.addEventListener('click', () =>{
        let ton = piano[element.id].src.slice(40, -4);
        console.log(piano[element.id].src);
        console.log(ton);
        if (element.id === ton){
            piano[ton].play();
            savedPiano.push(ton);
            localStorage.setItem('ton', JSON.stringify(savedPiano));
        };
    });
});

element.startBtn.addEventListener('click', () => {
    if (!element.speed.value){
        ms = 500;
    } else ms = parseInt(element.speed.value);

    let playPiano = JSON.parse(localStorage.getItem('ton'));
    playPiano.forEach((ton, i) => {
        setTimeout(() => {
            piano[ton].play()
        }, i * ms);
    })
});

element.clearBtn.addEventListener('click', () => {
localStorage.clear();
savedPiano = [];
});

document.addEventListener('keydown', function(event) {
    let x = event.keyCode;
    if (typeof KbK[x] === 'undefined'){
    }
    else{
        piano[KbK[x]].play();
        if (KbK[x] != 'undefined'){
            savedPiano.push(KbK[x]);
            localStorage.setItem('ton', JSON.stringify(savedPiano));
        }
    } 
});