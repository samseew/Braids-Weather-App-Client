import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://cors-anywhere.herokuapp.com/https://wx.wearebraid.com/`;

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      station: null
    };
  }

  componentDidMount() {
    fetch(`${URL}stations/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          station: data,
          isLoading: false
        });
      });
    console.log(this.state.station);
  }

  render() {
    console.log(this.state.station);

    return (
      <div>
        {this.state.isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <div>lol</div>
        )}
      </div>
    );
  }
}
