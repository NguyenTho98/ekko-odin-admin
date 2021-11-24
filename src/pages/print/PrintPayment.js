import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import "./PrintPayment.scss";
function PrintPayment(props) {
  return (
    <div className="print-payment-wrapper">
      <Container>
        <Row>
          <Col md="7"></Col>
          <Col md="5">
            <div>
              <div>Địa chỉ: số 17 Nguyễn Văn Lộc, HĐ, HN</div>
              <div>Điện thoại: 1900 588 803</div>
              <div>Email: gochoctap.odin17nvl@gmail.com</div>
              <a>Fanpage: https://www.facebook.com/theodinenglish</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="title-payment">PHIẾU THU</div>
            <div style={{textAlign:"center"}}>Thứ Ba, 23 tháng 11, 2021</div>
            <div style={{textAlign:"center"}}>
              Hóa đơn số :<span style={{marginLeft: 7, fontWeight: 600}}>TĐN-O-2111-001-001</span>
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Họ và tên: </div>
              <div>Trần Tiến Thành</div>
            </div>
            <div className="d-flex"  style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Email:</div>
              <div>thanh@gmail.com</div>
            </div>
          </Col>

          <Col md="6">
            <div className="d-flex justify-content-end" style={{ marginBottom: 6 }} >
              <div style={{ width: 170 }}>Số điện thoại:</div>
              <div style={{ minWidth: 120, textAlign: "right" }}>0397364538</div>
            </div>
            <div className="d-flex  justify-content-end"  style={{ marginBottom: 6 }} >
              <div style={{ width: 170 }}>Ngày sinh:</div>
              <div style={{ minWidth: 120, textAlign: "right" }}>01/08/1997</div>
            </div>
          </Col>
          <Col md="12">
            <div className="d-flex"  style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Lộ trình:</div>
              <div> BBST+Giao Tiếp+IE1+IE2</div>
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex"  style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Học phí:</div>
              <div > 23.205.000 </div>
            </div>
            <div className="d-flex"  style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Số tiền nộp:</div>
              <div style={{ fontWeight: 600 }}>
                20.000.000 
              </div> <span style={{ marginLeft: 10}}> Tiền mặt</span>
            </div>
          </Col>

          <Col md="6">
            <div className="d-flex justify-content-end"  style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }} >Ngày hẹn hoàn thành:</div>
              <div style={{ minWidth: 120, textAlign: "right" }}>02/01/2022</div>
            </div>
            <div className="d-flex justify-content-end"  style={{textAlign: "left"}}>
              <div style={{ width: 170 }}>Còn lại:</div>
              <div style={{ minWidth: 120, textAlign: "right" }}>3.205.000 </div>
            </div>
          </Col>
          <Col md="12">
            <div className="d-flex">
              <div style={{ width: 170 }}>Thông tin tư vấn viên:</div>
              <div> Quang Huy</div>
            </div>
          </Col>
          <Col md="6" style={{textAlign: "center", marginTop: 30}}>
            <div className="" style={{ fontWeight: 600 }}>Người nộp tiền </div>
            <div className="">(Ký & ghi rõ họ tên) </div>
          </Col>
          <Col md="6"  style={{textAlign: "center", marginTop: 30}}>
            <div className="" style={{ fontWeight: 600 }}>Người thu tiền </div>
            <div className="">(Ký & ghi rõ họ tên) </div>
            <div className="" style={{ marginTop: 70 }}>Dương Thị Nhung</div>
          </Col>
          <Col md="12" style={{ marginTop: 30}}>
           <div> LƯU Ý:</div>
            <div>
              1. Phiếu thu là một phần đính kèm không thể tách rời của hợp đồng,
              HV cần lưu lại phiếu thu gốc để được giải quyết mọi trường hợp .
            </div>
            <div>2. Phiếu thu KHÔNG được cấp lại trong mọi trường hợp.</div>
            <div>
              3. Phiếu thu chỉ có giá trị khi có đầy đủ chữ kí, họ tên của người
              thu tiền và được đóng dấu.
            </div>
            <div style={{ fontWeight: 600 }}>
              4.Học phí và tiền cọc sẽ KHÔNG được hoàn trả lại dưới bất kỳ lý do
              gì. Mọi chi phí của khóa học đều được thanh toán ngay khi học viên
              đăng ký. Mong quý vị phụ huynh và học viên cân nhắc kỹ trước khi
              nộp tiền.
            </div>
            <div style={{ fontWeight: 600 }}>
              5.Toàn bộ thông tin trong quá trình học tập tại Odin sẽ được thông
              báo bằng email/ số điện thoại nêu trên. Ngoài ra, toàn bộ thông
              tin đến từ bên thứ 3 (không được liệt kê trên phiếu thu) sẽ không
              có giá trị trong mọi trường hợp.
            </div>
            <div>
              6.Học viên cần hoàn thành học phí đúng hạn (40 ngày kể từ ngày nộp
              tiền đầu tiên). Nếu không tài khoản của học viên sẽ bị deactive,
              ngừng xếp lớp."
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PrintPayment;
