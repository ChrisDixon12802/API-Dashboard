// Random Dog API
async function getdogimage() {
  const output = document.getElementById("dog-output");
  output.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    if (data.status === "success") {
      output.innerHTML = `<img src="${data.message}" alt="Random Dog" style="max-width: 100%; border-radius: 8px;">`;
    } else {
      output.innerHTML = "<p>Failed to load dog image</p>";
    }
  } catch (error) {
    output.innerHTML = "<p>Error fetching dog image</p>";
    console.error("Error:", error);
  }
}

//random cat api
async function getcatimage() {
  const output = document.getElementById("cat-output");
  output.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();

    if (data && data.length > 0) {
      output.innerHTML = `<img src="${data[0].url}" alt="Random Cat" style="max-width: 100%; border-radius: 8px;">`;
    } else {
      output.innerHTML = "<p>failed to load cat image</p>";
    }
  } catch (error) {
    output.innerHTML = "<p>error fetching cat image</p>";
    console.error("error:", error);
  }
}

// Random Joke API
async function getjoke() {
  const output = document.getElementById("joke-output");
  output.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();

    output.innerHTML = `
      <p><strong>${data.setup}</strong></p>
      <p>${data.punchline}</p>
    `;
  } catch (error) {
    output.innerHTML = "<p>Error fetching joke</p>";
    console.error("Error:", error);
  }
}

// Random Advice API
async function getadvice() {
  const output = document.getElementById("advice-output");
  output.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    output.innerHTML = `<p>"${data.slip.advice}"</p>`;
  } catch (error) {
    output.innerHTML = "<p>Error fetching advice</p>";
    console.error("Error:", error);
  }
}

// random fox api
async function getfoximage() {
  const output = document.getElementById("fox-output");
  output.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch("https://randomfox.ca/floof/");
    const data = await response.json();
    if (data && data.image) {
      output.innerHTML = `<img src="${data.image}" alt="Random Fox" style="max-width: 100%; border-radius: 8px;">`;
    } else {
      output.innerHTML = "<p>Failed to load fox image</p>";
    }
  } catch (error) {
    output.innerHTML = "<p>Error fetching fox image</p>";
    console.error("Error:", error);
  }
}

// random trivia api
async function gettrivia() {
  const output = document.getElementById("trivia-output");
  output.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=1&type=multiple"
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const trivia = data.results[0];
      output.innerHTML = `
                <p><strong>Category:</strong> ${trivia.category}</p>
                <p><strong>Question:</strong> ${trivia.question}</p>
                <p><strong>Answer:</strong> ${trivia.correct_answer}</p>
            `;
    } else {
      output.innerHTML = "<p>Failed to load trivia question</p>";
    }
  } catch (error) {
    output.innerHTML = "<p>Error fetching trivia question</p>";
    console.error("Error:", error);
  }
}

// random meal api
async function getmeal() {
  const output = document.getElementById("meal-output");
  output.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const meal = data.meals[0];
    output.innerHTML = `
            <p><strong>${meal.strMeal}</strong></p>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="max-width: 100px; border-radius: 8px;">
        `;
  } catch (error) {
    output.innerHTML = "<p>Error fetching meal</p>";
    console.error("Error:", error);
  }
}

// random pokemon api
async function getpokemon() {
  const output = document.getElementById("pokemon-output");
  output.innerHTML = "<p>Loading...</p>";
  try {
    const randomId = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    const data = await response.json();
    output.innerHTML = `
            <p><strong>${data.name.toUpperCase()}</strong></p>
            <img src="${data.sprites.front_default}" alt="${
      data.name
    }" style="max-width: 100px; border-radius: 8px;">
        `;
  } catch (error) {
    output.innerHTML = "<p>Error fetching Pokémon</p>";
    console.error("Error:", error);
  }
}

// fun facts api
async function getfunfact() {
  const output = document.getElementById("funfact-output");
  output.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    const data = await response.json();
    output.innerHTML = `<p>"${data.text}"</p>`;
  } catch (error) {
    output.innerHTML = "<p>Error fetching fun fact</p>";
    console.error("Error:", error);
  }
}
