const alphabet = 'АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'; //исходный алфавит
//функция, сдвигающая алфавит на количество букв shift
function shiftAlphabet(shift) {
    console.log(shift)
    let shiftedAlphabet = ''; //новый алфавит 
    for (let i = 0; i < alphabet.length; i++) {
        let currentLetter = (alphabet[i + shift] === undefined) ? (alphabet[i + shift - alphabet.length]) : (alphabet[i + shift]); //Текущая буква со сдвигом, если выходим за рамки длины алфавита - берем с начала алфавита

        shiftedAlphabet = shiftedAlphabet.concat(currentLetter);
    }
    return shiftedAlphabet;
}


function encrypt() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('key').value);
    const shiftedAlphabet = shiftAlphabet(shift);
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
        let indexOfLetter = alphabet.indexOf(message[i].toUpperCase());
        encryptedMessage = encryptedMessage.concat(shiftedAlphabet[indexOfLetter]);
    }
    document.getElementById('cipher').value = encryptedMessage.toLowerCase();
}

function decrypt() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('key').value);
    let shiftedAlphabet = shiftAlphabet(shift);
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
        if (message[i] == ' ') {
            encryptedMessage = encryptedMessage.concat(' ');
            continue};
        let indexOfLetter = shiftedAlphabet.indexOf(message[i].toUpperCase());
        encryptedMessage = encryptedMessage.concat(alphabet[indexOfLetter]);
    }
    document.getElementById('cipher').value = encryptedMessage.toLowerCase();
}

document.querySelector('#encrypt').addEventListener('click', encrypt);
document.querySelector('#decrypt').addEventListener('click', decrypt);
