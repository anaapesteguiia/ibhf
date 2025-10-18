// Carga el avatar y la animación del saludo
document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.querySelector(".avatar");
    const frameWidth = 48;
    let isAnimating = false;

    function setFrame(frameIndex) {
        avatar.style.backgroundPosition = `-${frameWidth * frameIndex}px 0`;
    }

    function playRandomAnimation() {
        if (isAnimating) return;
        isAnimating = true;

        // Saluda
        setFrame(1);

        // Vuelve a la base después de 0.4s
        setTimeout(() => {
            setFrame(0);
            isAnimating = false;
        }, 400);
    }

    // Saluda aleatoriamente cada 3 a 9 segundos
    setInterval(() => {
        playRandomAnimation();
    }, Math.random() * 6000 + 3000);
});
