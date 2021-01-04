const section = document.querySelector('section');
let i = 11;
while (i >= 0) {
    const para = document.createElement('p');
    if (i === 11) {
        para.textContent = 'Start Countdown';
    } else if (i === 0) {
        para.textContent = 'Blast Off';
    } else {
        para.textContent = i;
    }
    section.appendChild(para);
    i--;
}