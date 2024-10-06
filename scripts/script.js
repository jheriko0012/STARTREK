function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
  }
}

function showPlanetInfo(planetName) {
  const info = document.getElementById("info");
  const planetInfo = {
      mercury: "Mercury: The closest planet to the Sun.",
      venus: "Venus: The hottest planet in our solar system.",
      earth: "Earth: The only planet known to support life.",
      moon: "Moon: Earth's only natural satellite.",
      mars: "Mars: Known as the red planet.",
      jupiter: "Jupiter: The largest planet in our solar system.",
      saturn: "Saturn: Famous for its beautiful rings.",
      uranus: "Uranus: An ice giant with a unique tilt.",
      neptune: "Neptune: The farthest planet from the Sun.",
      pluto: "Pluto: Once considered the ninth planet."
  };

  info.innerHTML = planetInfo[planetName] || "Unknown planet.";
  info.style.display = "block"; 
}

createStars();

const planets = document.querySelectorAll('.container > div');

planets.forEach(planet => {
  planet.addEventListener('click', () => {
      const planetName = planet.getAttribute('data-planet'); 
      showPlanetInfo(planetName);
  });
});
