async function searchPokemon() {
  const pokemonName = document
    .getElementById("pokemonName")
    .value.trim()
    .toLowerCase();
  const pokemonImage = document.getElementById("pokemonImage");
  const message = document.getElementById("message");

  pokemonImage.style.display = "none";
  pokemonImage.removeAttribute("src");

  if (!pokemonName) {
    message.textContent = "Please enter a Pokemon name.";
    return;
  }

  message.textContent = "Searching...";

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(pokemonName)}`,
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`No Pokemon found with the name "${pokemonName}".`);
      }
      throw new Error("Could not fetch Pokemon data. Please try again.");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;

    if (!pokemonSprite) {
      message.textContent = `No image is available for ${data.name}.`;
      return;
    }

    pokemonImage.src = pokemonSprite;
    pokemonImage.style.display = "block";
    message.textContent = `${data.name}.`;
  } catch (error) {
    console.error("Error fetching data:", error);
    message.textContent =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred. Please try again.";
  }
}
