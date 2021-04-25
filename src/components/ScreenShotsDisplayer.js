import React, { Component } from "react";
import { SSD } from "./CreatingLiImg";

export default class ScreenShotsDisplayer extends Component {
  componentDidMount() {

  }

  render() {
    return (<div style={{width: '50%'}}>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

            <div className="carousel-item active">
              <img className="d-block w-100" alt="" src={"../images/" + this.props.i1 + ".png"} />
            </div>

              <SSD rm={this.props.rm2} src={this.props.i2}/>

              <SSD rm={this.props.rm3} src={this.props.i3}/>


              <SSD rm={this.props.rm4} src={this.props.i4}/>

              <SSD rm={this.props.rm5} src={this.props.i5}/>


              <SSD rm={this.props.rm6} src={this.props.i6}/>


              <SSD rm={this.props.rm7} src={this.props.i7}/>

              <SSD rm={this.props.rm8} src={this.props.i8}/>

              <SSD rm={this.props.rm9} src={this.props.i9}/>



              <SSD rm={this.props.rm10} src={this.props.i10}/>

          </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>


    );
  }
}
