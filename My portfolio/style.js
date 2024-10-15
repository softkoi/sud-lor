const text = "Sorry, but there's nothing";
const textElement = document.getElementById('typeWriter-text');

let index = 0;
let isDeleting = false;

const typingSpeed = 50;
const resetDelay = 1000;
const deleteSpeed = 100;

function typeWriter() {
    if (!isDeleting) {
        textElement.innerHTML = text.slice(0, index);
        index++;

        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeWriter, resetDelay);
            return;
        }
    } else {
        index--;
        textElement.innerHTML = text.slice(0, index);

        if (index === 0) {
            isDeleting = false;
        }
    }
    setTimeout(typeWriter, isDeleting ? deleteSpeed : typingSpeed);
}

typeWriter();