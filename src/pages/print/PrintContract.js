import { map } from "jquery";
import moment from "moment";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Table } from "reactstrap";
import { getContractDetail } from "../contract/ContractAction";
import 'moment/locale/vi';
moment.locale('vi')
function PrintContract(props) {
  const { id } = useParams();
  const [contract, setContract] = useState({});
  const [course, setCourse] = useState([]);
  useEffect(() => {
    if (id) {
      getContractDetail(id).then((res) => {
        setContract(res.data);
        setCourse(res?.data?.course);
       
        setTimeout(() =>  window.print(), 1000)
      });
    }
  }, []);
  const renderTotal = () => {
    let total = 0;
    if (course?.length > 0) {
      console.log("zzooo");
      for (let index = 0; index < contract.course?.length; index++) {
        const element = contract.course[index];
        total +=
          contract.shift === 1 ? element.night_cost : element.daytime_cost;
      }
    }
    total = contract?.reward
      ? (total - ((contract?.reward.discount * total) / 100))
      : total;
    return total;
  };
  const renderLesson = () => {
    let total = 0;
    if (course?.length > 0) {
      for (let index = 0; index < contract?.course?.length; index++) {
        const element = contract?.course[index];
        total += element.study_shift_count;
      }
    }
    return total;
  };
  return (
    <div className="print-contract-wrapper" style={{ color: "black" }}>
      <Container>
        <Row>
          <Col md="12">
            <div
              style={{
                fontWeight: 600,
                marginTop: 30,
                fontSize: 15,
                textAlign: "center",
              }}
            >
              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM{" "}
            </div>
            <div style={{ textAlign: "center" }}>
              Độc lập – Tự do – Hạnh phúc{" "}
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: 10,
                fontWeight: 600,
                fontSize: 20,
              }}
            >
              HỢP ĐỒNG CAM KẾT KHÓA HỌC 2021{" "}
            </div>
            <div style={{ textAlign: "center", fontWeight: 600 }}>
              Mã Hợp Đồng: {contract?.code}{" "}
            </div>
            <div
              style={{ textAlign: "center", fontWeight: 600, marginBottom: 20 }}
            >
              {/* Khóa học: <span> BBST+Giao Tiếp+IE1+IE2 </span>{" "} */}
            </div>
          </Col>
          <Col md="12">
            <div>
              - Căn cứ vào Luật Dân sự số 91/2015/QH13 ban hành ngày 24 tháng 11
              năm 2015.{" "}
            </div>
            <div>- Căn cứ vào Hoá đơn số: ĐT-O-2107-745-001 </div>
            <div>- Căn cứ vào nhu cầu của Quý Học Viên, Quý Khách hàng. </div>
            <div>
              Hôm nay, {moment(contract.created_at).format("dddd")},{" "}
              {moment(contract.created_at).get("date")} tháng{" "}
              {moment(contract.created_at).get("month")},{" "}
              {moment(contract.created_at).get("year")}
              <span> chúng tôi gồm:</span>{" "}
            </div>
          </Col>
          <Col>
            <div style={{ fontWeight: 600 }}>Bên A:</div>
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Họ và tên:</div>
              <div>{contract?.customers?.full_name}</div>
            </div>
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Ngày sinh :</div>
              <div>{contract?.customers?.birth_day}</div>
            </div>
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Số điện thoại :</div>
              <div>{contract?.customers?.phone}</div>
            </div>
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Email :</div>
              <div>{contract?.customers?.email}</div>
            </div>
            <div>(Sau đây được gọi là “Bên A” hoặc “Học Viên”)</div>
            <div style={{ fontWeight: 600 }}>
              Bên B: TRUNG TÂM NGOẠI NGỮ ODIN LANGUAGE ACADEMY - NGUYỄN VĂN LỘC
              Trực thuộc - VIỆN NGHIÊN CỨU HỢP TÁC VÀ HƯỚNG NGHIỆP DẠY NGHỀ"
            </div>
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Địa chỉ:</div>
              <div>
                17 Nguyễn Văn Lộc, phường Mỗ Lao, quận Hà Đông, thành Phố Hà Nội
              </div>
            </div>
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>ĐT:</div>
              <div>024 6267 5555</div>
            </div>
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Đại diện :</div>
              <div>Bà Phùng Minh Hằng</div>
            </div>
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Chức vụ:</div>
              <div>Phó Giám Đốc Kinh Doanh</div>
            </div>
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>CMTND số: </div>
              <div>001196005253</div>
            </div>
            <div className="d-flex" style={{ marginBottom: 6 }}>
              <div style={{ width: 170 }}>Cấp ngày: </div>
              <div>42332</div>
            </div>
            <div>
              (Sau đây được gọi là “Bên B” hoặc “ODIN LANGUAGE ACADEMY” hoặc
              “Odin”)
            </div>
            <div>
              Bên A có nhu cầu học Tiếng Anh và đã được bên B tư vấn đầy đủ về
              khóa học và các điều kiện nhập học, hai bên cùng thống nhất ký Hợp
              đồng Cam kết khóa học với các điều khoản sau:"
            </div>
            <div style={{ fontWeight: 600 }}>ĐIỀU 1: NỘI DUNG ĐÀO TẠO</div>
            <div style={{ fontWeight: 600 }}>1. Chương trình đào tạo:</div>
            <div>
              {" "}
              <span style={{ fontWeight: 600 }}> 1.1 </span>
              Các chương trình học Bên B bao gồm các khóa học sau, để Bên A có
              thể xem xét lựa chọn khoá học:
            </div>
          </Col>
          <Col md="12">
            <Table bordered>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>KHÓA HỌC</th>
                  <th>GIỚI THIỆU TÓM TẮT VỀ KHÓA HỌC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>New BBST</td>
                  <td>
                    Ứng dụng công trình khoa học “Công nghệ tiếng Anh siêu tốc”
                    vào việc học ngoại ngữ cho các Học Viên mất gốc, tiếng anh
                    cơ bản{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Giao tiếp</td>
                  <td>
                    Khóa học nâng cao kỹ năng nghe,nói, đọc,viết, giúp Học Viên
                    củng cố lại kỹ năng ngoại ngữ.{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>TO1,TO2</td>
                  <td>Khóa học luyện thi Toeic </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>IE1,IE2,IE3, IE4</td>
                  <td>Khóa học luyện thi IELTS </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Lớp học 1-1</td>
                  <td>
                    Khóa học cá nhân theo trình độ và yêu cầu của từng học viên{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <div>
              <span style={{ fontWeight: 600 }}> 1.2 </span> Sau khi xem xét
              biểu khoá học trên, căn cứ theo nhu cầu và trình độ của bản thân,
              tại đây, Bên A yêu cầu và Bên B đồng ý cung cấp dịch vụ đào tạo
              cho Bên A khoá học:
            </div>
            <Table bordered>
              <thead>
                <tr>
                  <th>Các khóa học Bên B</th>
                  <th>Ca học</th>
                  <th>Số Lượng buổi học</th>
                  <th>Học phí (đơn vị: VNĐ) </th>
                </tr>
              </thead>
              <tbody>
                {contract?.course?.length > 0
                  ? contract?.course?.map((item) => (
                      <tr>
                        <th scope="row">*{item.name}</th>
                        <td scope="row">
                          {contract?.shift === 1 ? "Ca ngày" : "Ca tối"}
                        </td>
                        <td>{item.study_shift_count}</td>
                        <td>
                          <NumberFormat
                              value={contract?.shift === 1
                                ? item.night_cost
                                : item.daytime_cost}
                              displayType={"text"}
                              thousandSeparator={true}
                            />đ
                        </td>
                      </tr>
                    ))
                  : ""}
                <tr>
                  <th scope="row">Giá trị giảm giá (nếu có)</th>
                  <td colspan="3">{contract?.payment?.reward?.discount}% </td>
                </tr>
                <tr>
                  <th scope="row">Giá trị quà tặng (nếu có)</th>
                  <td colspan="3">{contract?.payment?.reward?.gift} </td>
                </tr>
                <tr>
                  <th scope="row" rowspan="2">
                    Tổng học phí
                  </th>
                  <td>Bằng số</td>
                  <td colspan="3"><NumberFormat
                              value={renderTotal()}
                              displayType={"text"}
                              thousandSeparator={true}
                            />  đ</td>
                </tr>
                <tr>
                  <td>Bằng chữ</td>
                  <td colspan="3"> </td>
                </tr>
                <tr>
                  <th scope="row">Tổng số buổi học</th>
                  <td colspan="3">{renderLesson()} </td>
                </tr>
                <tr>
                  <th scope="row">Thời gian hoàn thành học phí</th>
                  <td colspan="3">{ contract.times === 1 ? "Đã hoàn thành" : contract?.payment?.plan_date} </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md="12">
            <div>
              "Lưu ý: Số buổi đào tạo trên là cố định theo lớp học. Trường hợp
              Bên A có nhu cầu đào tạo riêng/ gia sư hoặc đẩy nhanh quá trình
              học, số buổi học trên tuần, các Bên sẽ thỏa thuận và giao kết hợp
              đồng với một mức học phí khóa học khác. "
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 1.4 </span>Lịch đào tạo dự kiến
              là 02 buổi/ tuần/lớp. Lịch này sẽ theo lịch của lớp học được sắp
              xếp bởi bên B.
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 1.5 </span> Thời gian bảo lưu:
              theo như quy định tại khoản 4 Điều 3 Hợp đồng này.
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 1.6 </span>Thời gian trao quà
              tặng sẽ được Bên B tiến hành theo lịch đã thông báo.
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2 </span>{" "}
              <span style={{ fontWeight: 600 }}> Hình thức đào tạo:</span> Có
              thể là 01 trong 02 hình thức sau phụ thuộc vào tình hình thực tế
              hoặc các trường hợp bất khả kháng:
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.1 </span> Học Trực Tiếp (Học
              Offline) - Tại lớp học ở địa điểm học của Bên B.
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.2 </span> Học Trực Tuyến (Học
              Online) - Đào tạo trực tuyến qua nền tảng online mà Bên B sử dụng
              , Bên B sẽ hỗ trợ hướng dẫn Bên A các bước học Online qua email và
              số điện thoại của Bên A tại phần đầu của Hợp đồng.
            </div>
            <div style={{ fontWeight: 600 }}>
              ĐIỀU 2: TRÁCH NHIỆM VÀ QUYỀN HẠN CỦA BÊN B
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 1. </span> Đảm bảo, cam kết đầu
              ra theo từng giai đoạn cho Học Viên, cụ thể như sau tương ứng với
              kết quả đầu ra từng khoá học mà Bên A đã đăng ký tại khoản 1.2 và
              đáp ứng đủ theo điều kiện học tập theo Hợp đồng này;
            </div>
            <Table bordered>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>KHÓA HỌC</th>
                  <th>CAM KẾT ĐẦU RA CỦA BÊN B</th>
                  <th>CAM KẾT BÊN A </th>
                </tr>
              </thead>
              <tbody>
               
                {contract?.course?.length > 0
                  ? contract?.course?.map((item, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>*{item.name}</td>
                        <td>{item.commited}</td>
                        {index === 0 ? (
                          <td rowspan="8">
                            "Khi tham gia khoá học, Bên A phải cam kết đảm bảo
                            thực hiện đúng nghĩa vụ tại Điều 3 của Hợp đồng này.
                            Nếu vi phạm trách nhiệm tại Điều 3 của Hợp đồng này,
                            Bên B không có trách nhiệm đảm bảo đầu ra cho Bên A
                            sau khi hoàn thành khóa học như cam kết. "
                          </td>
                        ) : null}
                      </tr>
                    ))
                  : ""}
              </tbody>
            </Table>
            <div>
              <span style={{ fontWeight: 600 }}> 2.</span>
              Đánh giá kết quả và cấp chứng nhận của Bên B (nếu có yêu cầu) cho
              các Học Viên sau khi hoàn thành Khóa đào tạo;{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>3.</span> Đảm bảo cung cấp tài
              liệu luyện tập cho Học Viên;{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>4. </span>
              Theo dõi, hướng dẫn, động viên và nhắc nhở Học Viên trong suốt quá
              trình học;{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 5. </span>
              Thông báo tình hình học tập của Học Viên dưới 18 tuổi cho phụ
              huynh nếu có yêu cầu hoặc cần sự hợp tác từ phía phụ huynh;{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 6. </span>
              Hỗ trợ đăng ký thi chứng chỉ tiếng Anh Quốc tế (TOEIC, IELTS) với
              Học Viên đóng lệ phí thi tại ODIN LANGUAGE ACADEMY;{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 7. </span>Nếu Học Viên thực
              hiện đúng tất cả những điều trong bản cam kết này và đi thi theo
              quy định nhưng kết quả chưa đạt mức cam kết trên, ODIN LANGUAGE
              ACADEMY hỗ trợ đào tạo miễn phí cho tới khi Học Viên đạt mức điểm
              cam kết. Học Viên phải ký Cam kết đào tạo lại theo quy định.{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 8. </span> Nếu Học Viên vi phạm
              một trong những quy định tại Điều 3, ODIN LANGUAGE ACADEMY không
              đảm bảo điểm đầu ra nhưng vẫn tiếp tục giảng dạy và hỗ trợ Học
              Viên tối đa nhằm giúp Học Viên đạt được mức điểm thi cao nhất.{" "}
            </div>
            <div style={{ fontWeight: 600 }}>
              ĐIỀU 3: QUYỀN LỢI VÀ TRÁCH NHIỆM CỦA BÊN A
            </div>
            <div>
              {" "}
              <span style={{ fontWeight: 600 }}> 1. </span> Quyền lợi của Bên A:
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 1.1 </span>Học Viên được xây
              dựng rõ lộ trình học phù hợp với trình độ khóa học Học Viên đã
              đăng ký.{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 1.2 </span> Học Viên được giáo
              viên thường xuyên hướng dẫn, hỗ trợ, kiểm tra, nhận xét và đánh
              giá định kỳ trong quá trình học.{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 1.3 </span> Học Viên được bổ
              trợ kiến thức bởi các trợ giảng (nếu cần thiết để đảm bảo theo kịp
              tiến độ lớp học) theo thời gian thỏa thuận giữa hai Bên.{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 1.4 Bảo lưu:</span> Sau khi
              nhận được thông tin bằng văn bản của Học Viên phát sinh nhu cầu
              bảo lưu khóa học, Bên B sẽ hỗ trợ Học Viên để bảo lưu khóa học tối
              đa 02 lần như sau:{" "}
            </div>
            <div>
              -<span style={{ fontWeight: 600 }}> Lần thứ nhất: </span> không
              quá 01 tháng (không mất phí) trong trường hợp Học Viên cần học
              quân sự (có thông báo chính thức của trường) hoặc không quá 01
              tháng vì lý do sức khỏe cá nhân (có giấy nhập và xuất viện).{" "}
            </div>
            <div>
              -<span style={{ fontWeight: 600 }}> Lần thứ hai:</span> Không quá
              05 tháng (Phí quản lý tài khoản thời gian bảo lưu{" "}
              <span style={{ fontWeight: 600 }}> 1.000.000 VNĐ</span> ).{" "}
            </div>
            <div>
              Bảo lưu chỉ được áp dụng cho các lớp học mà Học Viên chưa tham gia
              học. Với các lớp Học Viên đã nhận lớp và vào học, Học Viên sẽ
              KHÔNG được bảo lưu.{" "}
            </div>
            <div>
              Với Học Viên đăng ký nhiều khoá học, ngày bắt đầu bảo lưu sẽ được
              tính từ thời điểm mười bốn (14) ngày sau khi khóa học gần nhất của
              Học Viên kết thúc và Bên B đã thông báo lịch học lớp mới cho Học
              Viên.{" "}
            </div>
            <div>
              Sau thời gian bảo lưu trong khoảng cho phép (01-06 tháng) thì Bên
              B sẽ hỗ trợ Học Viên thực hiện bài kiểm tra năng lực theo yêu cầu
              để xác định trình độ của Học Viên. Nếu trong trường hợp năng lực
              của Học Viên không đạt trình độ tương đương với trước khi bảo lưu,
              Bên B sẽ tư vấn để Học Viên có thể tham gia khóa học cần bổ sung
              tại thời điểm quay lại để học lại trình độ bị mất...Học Viên sẽ
              cần đóng học phí tương đương với khóa học cần bổ sung tại thời
              điểm quay lại để đảm bảo trình độ và duy trì hiệu lực của cam kết
              tại Hợp Đồng này.{" "}
            </div>
            <div style={{ fontWeight: 600 }}>1.5. Xếp lớp:</div>
            <div>
              Học Viên sẽ được xếp vào các lớp học được tổ chức, sắp xếp bởi Bên
              B phù hợp với các thông tin Học Viên đăng ký, các lớp học mà học
              viên đăng ký theo chi tiết khoản 1.2 điều 1 trên đây.{" "}
            </div>
            <div>
              Khi Học Viên có nhu cầu chuyển lớp sẽ được Bên B hỗ trợ như sau:{" "}
            </div>
            <div>
              {" "}
              - Hỗ trợ để chuyển lớp miễn phí nếu Học Viên chưa học hoặc đã học
              0-10% số buổi học với điều kiện Học Viên tham dự đầy đủ các buổi
              đã được tổ chức.{" "}
            </div>
            <div>
              - Với lớp đã học từ 10%-30% số buổi Học Viên sẽ được Bên B hỗ trợ
              để tìm lớp có trình độ gần tương đương nhất, tuy nhiên Học Viên
              cần chú ý về việc sẽ phải học lại hoặc học đuổi để theo kịp trình
              độ lớp mới. Phí dịch vụ xếp lớp là 1,000,000 VND.Việc xếp lớp tùy
              thuộc theo tình hình thực tế của bên B.
            </div>
            <div>
              - Với lớp đã học từ 30% số buổi trở lên Học Viên sẽ được Bên B hỗ
              trợ để tìm lớp có trình độ gần tương đương nhất, tuy nhiên Học
              Viên cần chú ý về việc sẽ phải học lại hoặc học đuổi để theo kịp
              trình độ lớp mới. Phí dịch vụ xếp lớp là 2,000,000 VND. Việc xếp
              lớp tùy thuộc theo tình hình thực tế của bên B. Lưu ý, với mỗi
              khóa học, học viên chỉ được chuyển lớp một (01) lần.{" "}
            </div>
            <div style={{ fontWeight: 600 }}>
              Lưu ý, với mỗi khoá học, học viên chỉ được chuyển lớp một (01)
              lần.{" "}
            </div>
            <div>
              Sau khi được Bên B xếp lớp mà Học Viên từ chối xác nhận lớp học,
              thì Bên B hiểu rằng Học Viên không còn nhu cầu tiếp tục theo học
              tại Bên B hoặc có nhu cầu bảo lưu khoá học. Từ đó, Bên B sẽ hướng
              dẫn quy trình phù hợp để hoàn tất thủ tục thanh lý hợp đồng hoặc
              bảo lưu khóa học quy định tại khoản 1.4 Điều 3 của cam kết này.{" "}
            </div>
            <div style={{ fontWeight: 600 }}>1.6. Chuyển nhượng:</div>
            <div>
              Học Viên chuyển nhượng học phí sẽ mất chi phí là 15% giá trị
              chuyển nhượng. Học Viên chuyển nhượng sẽ độc lập tìm kiếm bạn học
              nhận chuyển nhượng. Chuyển nhượng giữa các Học Viên là giao dịch
              cá nhân và độc lập với Odin. Chuyển nhượng chỉ áp dụng cho những
              lớp/khóa học mà Học Viên chưa bắt đầu học.{" "}
            </div>
            <div>
              Học Viên trước khi chuyển nhượng sẽ phải hoàn trả lại chi phí của
              các chương trình thưởng đã nhận theo giá trị của thị trường tại
              thời điểm thực hiện chuyển nhượng.{" "}
            </div>
            <div>
              Học Viên nhận chuyển nhượng vẫn được hưởng các chương trình như
              Học Viên mới, và phải hoàn thành học phí ngay tại thời điểm chuyển
              nhượng.{" "}
            </div>
            <div>
              Giá trị chuyển nhượng sẽ được thông báo sau tối đa 05 ngày làm
              việc kể từ khi Bộ phận lễ tân của Odin nhận được văn bản yêu cầu
              chuyển nhượng.{" "}
            </div>
            <div>
              Toàn bộ thủ tục chuyển nhượng phải được thực hiện trực tiếp tại
              địa điểm học của Học Viên.{" "}
            </div>
            <div style={{ fontWeight: 600 }}>2. Trách nhiệm của Bên A: </div>
            <div>
              Xuất phát từ nhu cầu học tập của Bên A, và để có thể đảm bảo được
              kết quả đầu ra cá nhân của Bên A, ODIN LANGUAGE ACADEMY cần Học
              Viên tuân thủ các điều về kỷ luật khóa học như dưới đây:{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.1.</span> Học Viên cam kết
              KHÔNG được lôi kéo, gây ảnh hưởng đến lớp học và bạn Học Viên khác
              thuộc Bên B. Các hành vi bao gồm nhưng không giới hạn trong rủ rê
              bạn học bảo lưu, nghỉ học hoặc bỏ học,... Trong mọi trường hợp,
              nếu bị phát hiện, Bên B có quyền chấm dứt đào tạo với Học Viên và
              không hoàn lại học phí.{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.2.</span> Trong suốt lộ trình
              khoá học, Học Viên chủ động bố trí công việc, thời gian của cá
              nhân vào trước giờ học để tập trung tối đa 100% vào bài giảng cùng
              với Giáo viên.{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.3.</span> Trường hợp học trực
              tuyến - học Online, Học Viên cần tuân thủ các quy định của lớp học
              như sau:{" "}
            </div>
            <div>
              <div>
                {" "}
                (i) Chuẩn bị đầy đủ máy tính, internet và đường truyền ổn định
                trước và trong suốt quá trình học;{" "}
              </div>
              <div>
                {" "}
                (ii) Chuẩn bị phòng học đủ điều kiện âm thanh, ánh sáng tốt:
                không bị ảnh hưởng hoặc gián đoạn của tiếng ồn, hoặc chịu ảnh
                hưởng của người xung quanh;{" "}
              </div>
              <div>
                {" "}
                (iii) Truy cập lớp trước 05 phút để thực hiện điểm danh;{" "}
              </div>
              <div>
                {" "}
                (iv) Chuẩn bị máy tính có Camera và luôn bật Camera trong suốt
                buổi học;{" "}
              </div>
              <div>
                {" "}
                (v) Sử dụng tên họ đầy đủ của mình trong việc đặt tên trong suốt
                quá trình học;{" "}
              </div>
              <div>
                {" "}
                (vi) Tắt âm thanh phía Học Viên trong suốt buổi học, chỉ mở âm
                thanh khi nêu ý kiến hoặc có câu hỏi hoặc có yêu cầu của Giáo
                viên.{" "}
              </div>
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.4.</span> Học Viên phải học
              theo đúng lộ trình, giáo trình và sự hướng dẫn của giáo viên. Hoàn
              thành đầy đủ bài tập về nhà theo đúng thời hạn. Học Viên có thể
              trao đổi với giáo viên để xin phép nộp muộn bài tập không quá 10%
              số lượng buổi học của từng lớp học. (Lưu ý: Cam kết về đầu ra sẽ
              hết hiệu lực ngay khi Học viên không hoàn thành bài tập, hoặc
              chống đối - bao gồm nhưng không giới hạn: sao chép, làm bài hộ,...
              trong quá trình làm bài tập và có xác nhận của Giáo viên){" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.5.</span> Học Viên được phát
              giáo trình trong quá trình học, không tự ý mang giáo trình của Bên
              B ra bên ngoài và không mang giáo trình không liên quan vào học.
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.6.</span> Học Viên được phép
              nghỉ học tối đa 10% số lượng buổi học trong một khoá học (bao gồm
              cả có phép, không phép và không được nghỉ liên tiếp 10% số buổi
              đối với từng khoá học)
            </div>
            <div>
              -Trong trường hợp Học Viên nghỉ có phép (có thông báo cho bộ phận
              chăm sóc Học Viên/ Giáo viên thông qua email/ điện thoại/
              fanpage), Bên B sẽ hỗ trợ gửi tài liệu, hỗ trợ Giáo viên giải
              thích lại nội dung của buổi nghỉ có phép.
            </div>
            <div>
              -Trong trường hợp Học Viên nghỉ mà không có sự thông báo với bộ
              phận chăm sóc Học Viên, Bên B không có trách nhiệm trong việc bù
              lại kiến thức của buổi nghỉ.
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.7.</span> Học Viên tham gia
              đầy đủ các bài kiểm tra định kì theo yêu cầu của Giáo viên.
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.8.</span> Học Viên tuân thủ
              và tôn trọng các quy định về lớp học của Bên B. Học Viên không làm
              việc cá nhân, bất cứ hành động nào (gọi điện, gây ồn hoặc làm các
              công việc khác …) gây ảnh hưởng đến các Học Viên khác trong lớp.
              Học Viên giữ thái độ hợp tác trong thời gian học tập.
            </div>
            <div>
              Nếu Học Viên vi phạm nội quy của lớp học và có các hành vi, tác
              động gây ảnh hưởng tiêu cực tới hoạt động học tập trung của cả
              lớp, Bên B sẽ gửi thư cảnh báo tới Học Viên hoặc liên lạc với Phụ
              huynh của Học Viên để trao đổi. Trong trường hợp bị triệu tập/ gửi
              thông báo về vấn đề gây ảnh hưởng tới lớp học (kèm phiếu xác nhận
              của các bạn trong lớp) 02 lần, Bên B có quyền chấm dứt đào tạo với
              Học Viên và không hoàn lại học phí.
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.9.</span> Học Viên cần tham
              dự kỳ thi chứng chỉ tiếng Anh Quốc tế (TOEIC, IELTS) được tổ chức
              tại các tổ chức được cấp phép sau khi kết thúc khóa học tối đa 02
              tuần.
            </div>
            <div style={{ fontWeight: 600 }}>
              {" "}
              <span style={{ fontWeight: 600 }}> 2.10.</span> Phiếu thu và hoàn
              thành học phí{" "}
            </div>
            <div>
              Học Viên hoàn thành học phí theo đúng quy định và đúng thời hạn
              (theo khoản 1.2 Điều 1 Hợp đồng này (thể hiện bằng phiếu thu được
              xác nhận của Bên B). Nếu Học Viên đã học hết số tiền học phí đã
              đóng nhưng vẫn chưa hoàn thành phần học phí còn lại thì Bên B sẽ
              quyền ngừng cung cấp dịch vụ và các quyền lợi của Học Viên và Hợp
              đồng cam kết này sẽ mất giá trị.{" "}
            </div>
            <div>
              Phiếu thu là một phần đính kèm không thể tách rời với quyền lợi
              của Học Viên theo hợp đồng này, Học Viên cần lưu lại phiếu thu gốc
              để được giải quyết mọi trường hợp.{" "}
            </div>
            <div>
              Lưu ý: Phiếu thu sẽ chỉ được cung cấp 01 lần và KHÔNG được cấp lại
              trong mọi trường hợp. Phiếu thu chỉ có giá trị khi có đầy đủ chữ
              ký, họ tên của người thu tiền và được đóng dấu, hoặc có xác nhận
              của phòng kế toán Bên B.{" "}
            </div>
            <div style={{ fontWeight: 600 }}>2.11 Hoàn trả học phí </div>
            <div>
              Học phí và tiền cọc sẽ KHÔNG được hoàn trả trong mọi trường hợp.{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.12</span> Tiếp nhận các phản
              hồi của Học Viên và trao đổi thông tin:{" "}
            </div>
            <div>
              Toàn bộ thông tin trong quá trình học tập tại Bên B sẽ được thông
              báo bằng email/ số điện thoại nêu trên phiếu thu. Ngoài ra, toàn
              bộ thông tin liên lạc đến từ bên thứ 3 (không được liệt kê trên
              phiếu thu) sẽ không có giá trị trong mọi trường hợp.{" "}
            </div>
            <div>
              Bảo mật thông tin của lớp học Bên B, không thu thập, chia sẻ, lan
              truyền các thông tin về Bên B mà chưa được sự đồng ý và xác minh
              bằng văn bản của Bên B. Trong trường hợp học Online – trực tuyến,
              không để người khác tham gia khoá học cùng mình hoặc thay mình,
              hoặc tự ý chuyển nhượng tài khoản học cho bất kỳ bên thứ ba nào.
              Trường hợp vi phạm sẽ phải bồi thường cho Bên B dựa trên mức thiệt
              hại thực tế.{" "}
            </div>
            <div>
              Học Viên cam kết trao đổi chủ động, trực tiếp, thẳng thắn với bộ
              phận chăm sóc Học Viên của Bên B khi xảy ra các vấn đề/ thắc mắc
              về thông tin lớp học. Trước khi có xác nhận bằng văn bản của Bên B
              về tính chất khách quan của vấn đề/thắc mắc/ phản ánh dịch vụ của
              Học Viên, Học Viên KHÔNG được trao đổi các thông tin chủ quan, cá
              nhân, gây ảnh hưởng đến lớp học, các Học Viên khác, và thương hiệu
              của Bên B.{" "}
            </div>
            <div>
              Mọi thông tin trao đổi chỉ được công nhận và xử lý thông qua các
              kênh: email/ hotline/ fanpage:
              https://www.facebook.com/theodinenglish hoặc trực tiếp tại địa
              điểm cơ sở của Bên B .
            </div>
            <div>
              Ngoài ra, toàn bộ thông tin đến từ bên thứ ba ngoài bộ phận chăm
              sóc Học Viên của Bên B (bao gồm nhưng không giới hạn: nhân viên
              kinh doanh, tư vấn viên, giáo viên) sẽ không được sử dụng như
              thông tin chính thống trong việc giải quyết giữa hai 2 Bên.
            </div>
            <div>
              Nếu Bên A vi phạm trách nhiệm theo quy định trên, Bên A hiểu và
              đồng ý rằng Bên B - ODIN LANGUAGE ACADEMY sẽ không còn trách nhiệm
              với các quyền lợi và Cam kết với Bên A.
            </div>
            <div style={{ fontWeight: 600 }}>
              ĐIỀU 4: BẢO MẬT THÔNG TIN VÀ QUYỀN SỞ HỮU TRÍ TUỆ
            </div>
            <div style={{ fontWeight: 600 }}>1. Bảo mật thông tin</div>
            <div>
              Bên A cam kết (i) Không chia sẻ một phần và/hoặc toàn bộ các tài
              liệu, thông tin có liên quan đến khóa học cho bất kì Bên thứ ba
              nào khác; và (ii) Không sử dụng một phần và/hoặc toàn bộ tài liệu
              có liên quan đến khóa học vào bất kì hoạt động nào ngoài mà chưa
              được sự cho phép trước bằng văn bản của Bên B ngoại trừ việc sử
              dụng các tài liệu này vào mục đích học tập của Bên A theo quy định
              tại Hợp đồng này.{" "}
            </div>
            <div style={{ fontWeight: 600 }}>2. Quyền Sở hữu trí tuệ </div>
            <div>
              Bên B là tác giả hoặc Chủ sở hữu hoặc Bên sử dụng hợp pháp đối với
              các phương pháp học, phần mềm học tập và các tài liệu của các khóa
              học.{" "}
            </div>
            <div>
              Mọi hành vi liên quan đến phần mềm học tập và tài liệu của Khóa
              học bao gồm nhưng không giới hạn: sử dụng, rao bán, phân phối,
              chỉnh sửa, khai thác, kinh doanh và chuyển giao bản quyền, lợi
              dụng sử dụng bản quyền của Bên B vào bất cứ mục đích nào (ngoại
              trừ việc sử dụng các tài liệu này vào mục đích học tập của Bên A
              theo quy định tại Hợp đồng này) mà không có sự đồng ý trước bằng
              văn bản của Bên B đều là hành vi vi phạm pháp luật về Sở hữu trí
              tuệ.{" "}
            </div>
            <div>
              Trường hợp Bên A hoặc Bên thứ ba được Bên A chuyển nhượng lại, có
              hành vi vi phạm trên thì Bên A phải chịu phạt tối thiểu một trăm
              triệu đồng (100.000.000 VNĐ) và bồi thường cho Bên B toàn bộ thiệt
              hại phát sinh do hành vi gây ra theo thiệt hại thực tế đồng thời
              chịu trách nhiệm theo quy định của Pháp luật Việt Nam.{" "}
            </div>
            <div style={{ fontWeight: 600 }}>ĐIỀU 5: CAM KẾT CHUNG</div>
            <div>
              <span style={{ fontWeight: 600 }}> 1.</span> Hợp đồng được giải
              thích và áp dụng theo pháp luật hiện hành của Việt Nam. Trong
              trường hợp phát sinh tranh chấp, Hai Bên sẽ được thương lượng, hòa
              giải trên cơ sở đôi bên cùng có lợi. Trong trường hợp có những
              tranh chấp Hai Bên không thể tự giải quyết và hoà giải, Hai Bên sẽ
              đưa ra Toà có thẩm quyền để giải quyết. Phán quyết của Tòa án là
              quyết định cuối cùng và có hiệu lực ràng buộc thực hiện đối với
              Các Bên. Mọi chi phí phát sinh bao gồm cả phí luật sư của bên
              thắng kiện do bên thua kiện chịu.{" "}
            </div>
            <div>
              <span style={{ fontWeight: 600 }}> 2.</span> Hợp đồng này có hiệu
              lực từ ngày ký và lập thành 02 (hai) bản có giá trị pháp lý như
              nhau. Bên A giữ 01 (một) bản, Bên B giữ 01 (một) bản làm căn cứ
              thực hiện.{" "}
            </div>
          </Col>
          <Col
            md="6"
            style={{ textAlign: "center", marginTop: 40, paddingBottom: 100 }}
          >
            <div style={{ fontWeight: 600 }}>HỌC VIÊN</div>

            <div> (Ký, ghi rõ họ tên)</div>
          </Col>
          <Col
            md="6"
            style={{ textAlign: "center", marginTop: 40, paddingBottom: 100 }}
          >
            <div style={{ fontWeight: 600 }}>
              ĐẠI DIỆN ODIN LANGUAGE ACADEMY
            </div>
            <div>(Ký, ghi rõ họ tên, đóng dấu)</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PrintContract;
