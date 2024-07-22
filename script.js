// script.js

const card = document.querySelector('.profile-card');

card.addEventListener('mousemove', (e) => {
    const width = card.offsetWidth;
    const height = card.offsetHeight;
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    const rotateY = (mouseX / width * 60) - 40;
    const rotateX = (mouseY / height * -60) + 40;

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});