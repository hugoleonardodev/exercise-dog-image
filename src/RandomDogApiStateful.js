import React from "react";
// import { useAlert } from "react-alert";
const fetch = require("node-fetch");

const RANDOM_DOG_API = "https://dog.ceo/api/breeds/image/random";

class RandomDogApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: undefined,
      status: "Loading...",
      isLoaded: false,
      isTerrier: false,
    };
  }

  async fetchRandomDogAPI() {
    await fetch(RANDOM_DOG_API)
      .then((response) => response.json())
      .then((data) => {
        data.message.includes("terrier")
          ? this.setState({
              message: undefined,
              status: "Loading...",
              isLoaded: false,
              isTerrier: true,
            })
          : this.setState({
              message: data.message,
              status: data.status,
              isLoaded: true,
              isTerrier: false,
            });
      });
  }

  componentDidMount() {
    this.fetchRandomDogAPI();
    // const alert = useAlert();
    // alert(`This dog is a ${this.state.message.match(/\w+/g)[5]}`);
  }

  componentDidUpdate() {
    localStorage.setItem("randomDogUrl", this.state.message);
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
          {this.state.isTerrier || !this.state.message ? (
            this.renderLoading()
          ) : (
            <img
              src={this.state.message}
              alt="Random Dog Api"
              width="300px"
              height="300px"
            />
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
