import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          {
            this.props.data.map((item, index) => {
              return (
                <SanPham key={index} item={item} />
              )
            })
          }
        </div>
      </div>
    );
  }
}
