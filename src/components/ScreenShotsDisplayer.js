import React, { Component } from "react";
import M from "materialize-css";
import { SSD } from "./CreatingLiImg";

export default class ScreenShotsDisplayer extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".slider");
      var instances = M.Slider.init(elems, { height: 650 });
    });
  }

  render() {
    return (        
      <div className="slider">
          <ul className="slides">
            <SSD rm={this.props.rm1} src={this.props.i1}></SSD>
            <SSD rm={this.props.rm2} src={this.props.i2}></SSD>
            <SSD rm={this.props.rm3} src={this.props.i3}></SSD>
            <SSD rm={this.props.rm4} src={this.props.i4}></SSD>
            <SSD rm={this.props.rm5} src={this.props.i5}></SSD>
            <SSD rm={this.props.rm6} src={this.props.i6}></SSD>
            <SSD rm={this.props.rm7} src={this.props.i7}></SSD>
            <SSD rm={this.props.rm8} src={this.props.i8}></SSD>
            <SSD rm={this.props.rm9} src={this.props.i9}></SSD>
            <SSD rm={this.props.rm10} src={this.props.i10}></SSD>
          </ul>
        </div>
    );
  }
}
