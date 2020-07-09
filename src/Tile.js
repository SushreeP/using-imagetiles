import React from "react";

export default class Images extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="tile">
        <img src={this.props.image.imageURL} alt="" />
        <p>{this.props.image.imageURL}</p>
        <p>{this.props.image.date}</p>
      </div>
    );
  }
}
