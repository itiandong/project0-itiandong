let moto = document.getElementById('moto-words');

let index = 0;
const motos = [
    'Later equals never.',
    'Stay hungry. Stay foolish.',
    'Action speak louder than words.',
    'Never say never',
    'Keep calm and carry on'
];
moto.onclick = function() {
    index = (index + 1) % 5;
    moto.innerHTML = motos[index];
}