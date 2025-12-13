const container = document.querySelector('.stars');
const starCount = 250;
const pageHeight = document.documentElement.scrollHeight;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('img');
    star.classList.add('star');
    star.src = "images/star.png";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * pageHeight + "px";
    const size = Math.random() * 15 + 5;
    star.style.width = size + "px";
    star.style.animationDuration = (1 + Math.random() * 2) + "s";

    const t = Math.random();
    star.style.filter = `sepia(${t*100}%) saturate(${t*100}%) brightness(${20 + t*80}%) hue-rotate(${t*100}deg)`;

    container.appendChild(star);
}
