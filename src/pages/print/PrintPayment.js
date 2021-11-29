import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./PrintPayment.scss";
import { useParams, useHistory } from "react-router-dom";
import { getPaymentDetail } from './../payment/PaymentAction'
import moment from "moment";
moment.lang('vi')
function PrintPayment(props) {
    const { id } = useParams();
    const [payment, setpayment] = useState({});
    console.log("payment", payment);
    useEffect(() => {
      if (id) {
        getPaymentDetail(id).then((res) => {
            setpayment(res.data);
        });
      }
    }, []);
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
            <div style={{textAlign:"center"}}>{moment(payment.created_at).format('dddd')}, {moment(payment.created_at).get("date")} tháng {moment(payment.created_at).get("month")}, {moment(payment.created_at).get("year")}</div>
            <div style={{textAlign:"center"}}>
              Hóa đơn số :<span style={{marginLeft: 7, fontWeight: 600}}>TĐN-O-2111-001-001</span>
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Họ và tên: </div>
              <div>{payment?.payer?.full_name}</div>
            </div>
            <div className="d-flex"  style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Email:</div>
              <div>{payment?.payer?.email}</div>
            </div>
          </Col>

          <Col md="6">
            <div className="d-flex justify-content-end" style={{ marginBottom: 6 }} >
              <div style={{ width: 170 }}>Số điện thoại:</div>
              <div style={{ minWidth: 120, textAlign: "right" }}>{payment?.payer?.phone}</div>
            </div>
            <div className="d-flex  justify-content-end"  style={{ marginBottom: 6 }} >
              <div style={{ width: 170 }}>Ngày sinh:</div>
              <div style={{ minWidth: 120, textAlign: "right" }}>{payment?.payer?.birth_day}</div>
            </div>
          </Col>
          <Col md="12">
            <div className="d-flex"  style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Lộ trình:</div>
              <div> </div>
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex"  style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Học phí:</div>
              <div > {payment?.pay_amount + payment?.rest_amount}đ</div>
            </div>
            <div className="d-flex"  style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Số tiền nộp:</div>
              <div style={{ fontWeight: 600 }}>
               {payment?.pay_amount}đ
              </div> <span style={{ marginLeft: 10}}> Tiền mặt</span>
            </div>
          </Col>

          <Col md="6">
            <div className="d-flex justify-content-end"  style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }} >Ngày hẹn hoàn thành:</div>
              <div style={{ minWidth: 120, textAlign: "right" }}>{payment?.plan_date}</div>
            </div>
            <div className="d-flex justify-content-end"  style={{textAlign: "left"}}>
              <div style={{ width: 170 }}>Còn lại:</div>
              <div style={{ minWidth: 120, textAlign: "right" }}>  {payment?.rest_amount} đ</div>
            </div>
          </Col>
          <Col md="6" style={{textAlign: "center", marginTop: 30}}>
            <div className="" style={{ fontWeight: 600 }}>Người nộp tiền </div>
            <div className="">(Ký & ghi rõ họ tên) </div>
          </Col>
          <Col md="6"  style={{textAlign: "center", marginTop: 30}}>
            <div className="" style={{ fontWeight: 600 }}>Người thu tiền </div>
            <div className="">(Ký & ghi rõ họ tên) </div>
            <div className="" style={{ marginTop: 70 }}> {payment?.cashier?.full_name}</div>
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
