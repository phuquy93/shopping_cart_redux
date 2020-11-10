import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import { connect } from "react-redux";

class LiftingStateUpCart extends Component {

  // downNumber(item) {
  //   let { cart } = this.state;
  //   let index = cart.findIndex(e => e.maSP === item.maSP);

  //   if (index != -1) {
  //     cart[index].soLuong -= 1;
  //     if (cart[index].soLuong < 1) {
  //       cart[index].soLuong = 1;
  //     }
  //   }

  //   this.setState({
  //     cart,
  //   })
  // }
  // upNumber(item) {
  //   let { cart } = this.state;
  //   let index = cart.findIndex(e => e.maSP === item.maSP);

  //   if (index != -1) {
  //     cart[index].soLuong += 1;
  //   }

  //   this.setState({
  //     cart,
  //   })
  // }
  render() {
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.props.cart.length})
          </button>
        </div>
        <DanhSachSanPham data={this.props.products} />
        <Modal cart={this.props.cart} />
        {
          Object.keys(this.props.detail).length > 0 && (
            <div className="row">
              <div className="col-sm-5">
                <img className="img-fluid" src={this.props.detail.hinhAnh} alt={this.props.detail.tenSP} />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.props.detail.tenSP}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.props.detail.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.props.detail.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.props.detail.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.props.detail.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.props.detail.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.data,
    detail: state.product.detail,
    cart: state.product.cart,
  }
}

export default connect(mapStateToProps, null)(LiftingStateUpCart);