// const divs = document.querySelectorAll('.container div');

// divs.forEach((div, index) => {
//     div.addEventListener('click', () => {
//         alert(`You clicked on ${div.textContent}`);
//         div.style.backgroundColor = 'limegreen';
//     });
// });

const divs = document.querySelectorAll('.container div');
const emojis = ['🎆', '🎉', '✨'];
const colors = ['red', 'blue', 'pink'];

divs.forEach((div, index) => {
    div.addEventListener('click', () => {
        const firework = document.createElement('div');
        firework.textContent = emojis[index];
        firework.style.cssText = `
            position: absolute;
            font-size: 40px;
            left: ${div.offsetLeft + div.offsetWidth / 2}px;
            top: ${div.offsetTop}px;
            color: ${colors[index]};
            transform: translate(-50%, -50%);
            animation: boom 1s ease-out forwards;
            z-index: 999;
        `;
        document.body.appendChild(firework);

        setTimeout(() => firework.remove(), 1000);
    });
});

// Add animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes boom {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    100% { transform: translate(-50%, -150%) scale(2); opacity: 0; }
}
`;
document.head.appendChild(style);
