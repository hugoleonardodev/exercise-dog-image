const fetch = require("node-fetch");

const RANDOM_DOG_API = "https://dog.ceo/api/breeds/image/random";

async function fetchRandomDogAPI() {
  await fetch(RANDOM_DOG_API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

console.log(fetchRandomDogAPI());
