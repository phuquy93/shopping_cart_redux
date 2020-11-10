import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={item.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{item.tenSP}</h4>
            <button className="btn btn-success" onClick={() => this.props.getDetail(item)}>Chi tiết</button>
            <button className="btn btn-danger" onClick={() => this.props.onCart(item)}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    getDetail: (product) => {
      const action = {
        type: "GET_DETAIL_PRODUCT",
        payload: product,
      }
      dispatch(action);
    },

    onCart: (product) => {
      const action = {
        type: "ADD_CART",
        payload: product
      }
      dispatch(action)
    }
  }
}

export default connect(null, mapDisPatchToProps)(SanPham);