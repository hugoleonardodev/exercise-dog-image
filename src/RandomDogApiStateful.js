import React from "react";
const fetch = require("node-fetch");

const RANDOM_DOG_API = "https://dog.ceo/api/breeds/image/random";
class RandomDogApi extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Await please!",
      status: "Loading...",
    };
  }

  async fetchRandomDogAPI() {
    await fetch(RANDOM_DOG_API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          message: data.message,
          status: data.status,
        });
      });
  }

  componentDidMount() {
    this.fetchRandomDogAPI();
  }

  render() {
    return (
      <div>
        <div id="random-dog-image">
          <img
            src={this.state.message}
            alt="Random Dog Api"
            width="300px"
            height="300px"
          />
          <button id="new-random-dog" onClick={() => this.fetchRandomDogAPI()}>
            New Dog
          </button>
        </div>
      </div>
    );
  }
}
export default RandomDogApi;
