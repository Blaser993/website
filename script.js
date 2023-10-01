document.addEventListener('DOMContentLoaded', function () {
    const textArray = ['Full stack developer', 'UI/UX Designer', 'Game designer'];
    let index = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let delayBeforeStart = 200; // Ritardo prima di iniziare
    let displayTime = 6000; // Tempo di visualizzazione del titolo scritto
    let delayBetweenTitles = 1000; // Ritardo tra un titolo e l'altro (5 secondi)
    let mansioneElement = document.getElementById('mansione');

    function autoscrittura() {
        const currentText = textArray[index];

        if (delayBeforeStart > 0) {
            delayBeforeStart -= 100;
            setTimeout(autoscrittura, 100);
            return;
        }

        if (isDeleting) {
            mansioneElement.textContent = currentText.substring(0, letterIndex - 1);
            letterIndex--;

            if (letterIndex === 0) {
                isDeleting = false;
                index = (index + 1) % textArray.length;
                setTimeout(autoscrittura, delayBetweenTitles);
            } else {
                setTimeout(autoscrittura, 50); // Velocità di cancellazione 
            }
        } else {
            mansioneElement.textContent = currentText.substring(0, letterIndex + 1);
            letterIndex++;

            if (letterIndex === currentText.length) {
                isDeleting = true;
                setTimeout(autoscrittura, displayTime);
            } else {
                setTimeout(autoscrittura, 175); // Velocità di scrittura
            }
        }
    }

    autoscrittura();
});
