import React from "react";
import "./App.css";
import Tile from "./Tile";
import imageList from "./imageList";

class App extends React.Component {
  // Constructors()
  constructor() {
    super();
    this.state = { images: imageList };
  }

  // Render()
  render() {
    const images = this.state.images.map((image) => <Tile image={image} />);
    return <div className="App">{images}</div>;
  }
}

export default App;
