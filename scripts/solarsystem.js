
const distancias = {
    Mercurio: 77,
    Venus: 41,
    Marte: 78,
    Júpiter: 628,
    Saturno: 1275,
    Urano: 2721,
    Neptuno: 4351
};

function mostrarDistancia() {
    const planeta = document.getElementById("planetas").value;
    const infoDiv = document.getElementById("info");

    if (planeta) {
        infoDiv.style.display = "block";
        infoDiv.style.opacity = 0;
        setTimeout(() => {
            infoDiv.style.opacity = 1;
            infoDiv.innerHTML = `Distancia de ${planeta} a la Tierra: ${distancias[planeta]} millones de km`;
        }, 100);
    } else {
        infoDiv.style.opacity = 0;
        setTimeout(() => {
            infoDiv.style.display = "none";
        }, 500);
    }
}
