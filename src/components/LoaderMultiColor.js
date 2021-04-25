import React, { Component } from "react";

class LoaderMultiColor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  }
}
export default LoaderMultiColor;
