import React from "react";
const fetch = require("node-fetch");

const RANDOM_DOG_API = "https://dog.ceo/api/breeds/image/random";
class RandomDogApi extends React.Component {
  constructor() {
    super();
    this.state = {
      message: undefined,
      status: "Loading...",
      isLoaded: false,
    };
  }

  async fetchRandomDogAPI() {
    await fetch(RANDOM_DOG_API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          message: data.message,
          status: data.status,
          isLoaded: true,
        });
      });
  }

  componentDidMount() {
    this.fetchRandomDogAPI();
  }

  renderLoading() {
    return <p>Loading</p>;
  }

  handleCick() {
    this.setState({
      message: undefined,
      status: "Loading...",
      isLoaded: false,
    });
    this.fetchRandomDogAPI();
  }

  render() {
    return (
      <div>
        <div id="random-dog-image">
          {this.state.message ? (
            <img
              src={this.state.message}
              alt="Random Dog Api"
              width="300px"
              height="300px"
            />
          ) : (
            this.renderLoading()
          )}
          <button id="new-random-dog" onClick={() => this.handleCick()}>
            New Dog
          </button>
        </div>
      </div>
    );
  }
}
export default RandomDogApi;
