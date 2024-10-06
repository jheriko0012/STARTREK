function showInfo(satellite) {
    var info = "";
    switch(satellite) {
        case 'Hubble Space Telescope':
            info = "<h2>Hubble Space Telescope</h2><p>Órbita: 547 km</p><p>Lanzado en 1990, el telescopio Hubble es fundamental en la astronomía moderna.</p>";
            break;
        case 'Estación Espacial Internacional':
            info = "<h2>Estación Espacial Internacional</h2><p>Órbita: 408 km</p><p>Un laboratorio espacial internacional en órbita desde el año 2000.</p>";
            break;
        case 'Satélite GPS':
            info = "<h2>Satélite GPS</h2><p>Órbita: 20,200 km</p><p>Los satélites GPS permiten la navegación y posicionamiento global.</p>";
            break;
        case 'Satélite Meteorológico':
            info = "<h2>Satélite Meteorológico</h2><p>Órbita: 35,786 km</p><p>Proporciona datos climáticos para pronósticos meteorológicos precisos.</p>";
            break;
        case 'Satélite Starlink':
            info = "<h2>Satélite Starlink</h2><p>Órbita: 550 km</p><p>Parte de la constelación de SpaceX para proporcionar internet de alta velocidad.</p>";
            break;
        case 'Telescopio James Webb':
            info = "<h2>Telescopio James Webb</h2><p>Órbita: 1,500,000 km</p><p>El telescopio espacial James Webb es el sucesor del Hubble, diseñado para observar el universo en infrarrojo.</p>";
            break;
    }
    
    document.getElementById('satellite-info').innerHTML = info;
    document.getElementById('info-panel').style.display = 'block';
}

function closeInfo() {
    document.getElementById('info-panel').style.display = 'none';
}

// Zoom interactivo
document.querySelector('.earth-container').addEventListener('wheel', function(event) {
    event.preventDefault();
    let scale = 1;
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    document.querySelector('.earth-container').style.transform = `scale(${scale})`;
});