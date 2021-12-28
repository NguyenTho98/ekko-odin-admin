import React, { useState, useEffect, Fragment } from "react";
import "./DetailPayment.scss";
import Select, { components } from "react-select";
import Breadcrumbs from "@components/breadcrumbs";
import StudentModal from "./../CreatePayment/StudentModal";
import NumberFormat from "react-number-format";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  CustomInput,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
  UncontrolledTooltip,
} from "reactstrap";
import { getStudentList } from "../../student/StudentAction";
import { selectThemeColors } from "@utils";
import { Edit, Plus, Printer, Save } from "react-feather";
import { getCourseList } from "../../course/CourseAction";
import { getRewardList } from "../../reward/RewardAction";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import { getBussinessemployeeList } from "../../bussinessemployee/BussinessemployeeAction";
import { getStudentcareList } from "../../studentcare/StudentcareAction";
import { getReceptionistList } from "../../receptionist/ReceptionistAction";
import { getClassesList } from "../../classes/ClassesAction";
import { getCenterList } from "../../center/CenterAction";
import moment from "moment";
import { actionAddPayment, actionEditPayment } from "../PaymentAction";
import {
  actionAddContract,
  actionEditContract,
  getContractDetail,
} from "../../contract/ContractAction";
import { toastSuccess } from "../../../utility/common/toastify";
import { useParams, withRouter, useHistory, Link } from "react-router-dom";
import Cleave from "cleave.js/react";
import PaymentModal from "../CreatePayment/PaymentModal";

const options = { numeral: true, numeralThousandsGroupStyle: "thousand" };
function DetailPayment(props) {
  const { item } = props;
  const { id } = useParams();
  const history = useHistory();
  const [student, setStudent] = useState("");
  const [schedule, setSchedule] = useState("1");
  const [method, setMethod] = useState(1);
  const [payment_date, setPayment_date] = useState(new Date());
  const [plan_date, setPlan_date] = useState(new Date());
  const [studentData, setStudentData] = useState([]);
  const [paymentData, setPaymentData] = useState([]);
  const [object, setObject] = useState({
    state: 1,
  });
  const [visibleModal, setVisibleModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [classesData, setClassesData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [rewardData, setRewardData] = useState([]);
  const [reward, setReward] = useState();
  const [centerData, setCenterData] = useState([]);
  const [classes, setClasses] = useState([]);
  const [course, setCourse] = useState([]);
  const [center, setCenter] = useState();
  const [studentcare, setStudentcare] = useState();
  const [receptionist, setReceptionist] = useState();
  const [salerData, setSalerData] = useState([]);
  const [studentcareData, setStudentcareData] = useState([]);
  const [receptionistData, setReceptionistData] = useState([]);

  useEffect(async () => {
    await handleFetchCourseData();
    await handleFetchStudentData();
    await handleFetchRewardData();
    await handleFetchSalerData();
    await handleFetchStudentcareData();
    await handleFetchReceptionistData();
    await handleFetchCenterData();
    await handleFetchClassesData();
    const res = await getContractDetail(id).then((res) => {
      setStudent(res?.data?.customers);
      setCourse(res?.data?.course);
      setClasses(res?.data?.classes);
      setStudentcare(res?.data?.consultant);
      setCenter(res?.data?.center);
      setPaymentData(res.data?.payment)
      setSchedule(res?.data?.shift);
      setObject(res.data);
    });
  }, []);

  const onChangeStudent = (item) => {
    setStudent(item);
  };
  const handleFetchStudentData = async () => {
    try {
      const { data } = await getStudentList();
      setStudentData(data?.results || []);
    } catch (error) {}
  };

  const onChangeMulCourse = (value) => {
    setCourse(value);
  };

  const onChangeMulClasses = (value) => {
    let tmp = null;
    if (value && value.length > 0) {
      tmp = value.map((item) => item.id);
    }
    setClasses(tmp);
  };
  const handleFetchCourseData = async () => {
    try {
      const { data } = await getCourseList();
      setCourseData(data?.results || []);
    } catch (error) {}
  };
  const handleFetchRewardData = async () => {
    try {
      const { data } = await getRewardList();
      setRewardData(data?.results || []);
    } catch (error) {}
  };

  const handleFetchCenterData = async () => {
    try {
      const { data } = await getCenterList();
      setCenterData(data?.results || []);
    } catch (error) {}
  };

  const handleFetchClassesData = async () => {
    try {
      const { data } = await getClassesList();
      setClassesData(data?.results || []);
    } catch (error) {}
  };

  const handleFetchSalerData = async () => {
    try {
      const { data } = await getBussinessemployeeList();
      setSalerData(data?.results || []);
    } catch (error) {}
  };

  const handleFetchStudentcareData = async () => {
    try {
      const { data } = await getStudentcareList();
      setStudentcareData(data?.results || []);
    } catch (error) {}
  };

  const handleFetchReceptionistData = async () => {
    try {
      const { data } = await getReceptionistList();
      setReceptionistData(data?.results || []);
    } catch (error) {}
  };

  const hanldChange = (e) => {
    const { name, value } = e.target;
    if (name === "times" && value > 1) {
      setPlan_date(moment(new Date()).add(40, "days").format("DD-MM-YYYY"));
    } else {
      setPlan_date(new Date());
    }
    if (name === "pay_amount") {
      const tmp = renderTotal() - parseInt(numberWithCommas(value));
      setObject({ ...object, [name]: value, rest_amount: tmp });
    } else {
      setObject({ ...object, [name]: value });
    }
  };
  function numberWithCommas(x) {
    return x.toString().replaceAll(",", "");
  }


  const renderTotal = () => {
    let total = 0;
    if (course.length > 0) {
      for (let index = 0; index < course.length; index++) {
        const element = course[index];
        total += schedule === "1" ? element.night_cost : element.daytime_cost;
      }
    }
    total = reward ? total - (reward.discount * total) / 100 : total;
    return total;
  };
  const renderLesson = () => {
    let total = 0;
    if (course.length > 0) {
      for (let index = 0; index < course.length; index++) {
        const element = course[index];
        total += element.study_shift_count;
      }
    }
    return total;
  };
  const renderState = (value) => {
    if (value === 2) {
      return "Chờ"
    }
    if (value === 3) {
      return "Từ chối"
    }
    return "Hoàn thành"
  }
  return (
    <Fragment>
      <div className="invoice-list-wrapper detail-payment-wrapper">
        <div
          className="d-flex justify-content-between"
          style={{ marginBottom: 20 }}
        >
          <div style={{ width: "calc((100% - 450px))" }}>
            <Breadcrumbs breadCrumbTitle="Chi tiết hợp đồng" />
          </div>
          <div style={{ marginRight: 5 }}>
            {id ? (
              <Button.Ripple
                color="primary"
                tag={Link}
                to={`/contract/print/${id}`}
                target="_blank"
              >
                <Printer size={18} />
                <span className="align-middle ml-25">In hợp đồng</span>
              </Button.Ripple>
            ) : (
              ""
            )}
            {/* {object?.payment?.id ? (
              <Button.Ripple
                color="primary"
                tag={Link}
                to={`/payment/print/${object?.payment?.id}`}
                target="_blank"
                style={{ margin: "0px 5px" }}
              >
                <Printer size={18} />
                <span className="align-middle ml-25">In hóa đơn</span>
              </Button.Ripple>
            ) : (
              ""
            )} */}
          </div>
        </div>
        <Row>
          <Col md="8" lg="8">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="">
                  Thông tin học viên{" "}
                  <span>
                    {" "}
                    <Button.Ripple
                      className="btn-icon"
                      id="create-student"
                      outline
                      color="primary"
                      onClick={() => setVisibleModal(true)}
                      style={{ borderRadius: "50%", padding: 2 }}
                    >
                      <Plus size={16} />
                    </Button.Ripple>
                    <UncontrolledTooltip
                      placement="top"
                      target="create-student"
                    >
                      Thêm mới học viên
                    </UncontrolledTooltip>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Select
                  isClearable={false}
                  theme={selectThemeColors}
                  name="colors"
                  options={studentData}
                  getOptionLabel={(option) => option.username}
                  getOptionValue={(option) => option.id}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="Chọn học viên"
                  value={student}
                  onChange={(item) => onChangeStudent(item)}
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="">
                  Thông tin khóa học
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Select
                  isClearable={false}
                  theme={selectThemeColors}
                  name="colors"
                  isMulti
                  options={courseData}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="Chọn học khóa học"
                  value={course}
                  onChange={(item) => onChangeMulCourse(item)}
                />
                <Table striped responsive style={{ marginTop: 20 }}>
                  <thead>
                    <tr>
                      <th>Mã khóa học</th>
                      <th>Tên khóa học</th>
                      <th>Số buổi</th>
                      <th>Giá ca ngày</th>
                      <th style={{ textAlign: "right" }}>Giá ca tối</th>
                    </tr>
                  </thead>
                  {course?.length > 0 ? (
                    <tbody>
                      {course.map((item) => (
                        <tr key={item.id}>
                          <td>{item.code}</td>
                          <td>{item.name}</td>
                          <td>
                            <NumberFormat
                              value={item.study_shift_count}
                              displayType={"text"}
                              thousandSeparator={true}
                            />{" "}
                          </td>
                          <td>
                            {" "}
                            <NumberFormat
                              value={item.night_cost}
                              displayType={"text"}
                              thousandSeparator={true}
                            />{" "}
                          </td>
                          <td style={{ textAlign: "right" }}>
                            {" "}
                            <NumberFormat
                              value={item.daytime_cost}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    ""
                  )}
                </Table>
                {course?.length === 0 && (
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                      padding: "20px 0px",
                    }}
                  >
                    <SvgCourese />
                    <div style={{ marginTop: 10 }}>
                      Hợp đồng của bạn chưa có khóa học phù hợp nào
                    </div>
                  </div>
                )}
                <Row style={{ padding: "30px 0px 20px 0px" }}>
                  <Col md="6">{reward ? reward.gift : ""}</Col>
                  <Col md="6">
                    <div className="d-flex justify-content-between">
                      <div>Học phí({renderLesson} buổi)</div>
                      <div>
                        {" "}
                        <NumberFormat
                          value={renderTotal()}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                        đ
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ margin: "10px 0px" }}
                    >
                      <div>Chiếu khấu</div>
                      <div>{reward?.discount || 0}%</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>Học viên phải đóng</div>
                      <div>
                        <NumberFormat
                          value={renderTotal()}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                        đ
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="">
                  Thông tin hóa đơn
                  <span>
                    {" "}
                    <Button.Ripple
                      className="btn-icon"
                      id="create-payment"
                      outline
                      color="primary"
                      onClick={() => setVisible(true)}
                      style={{ borderRadius: "50%", padding: 2 }}
                    >
                      <Plus size={16} />
                    </Button.Ripple>
                    <UncontrolledTooltip
                      placement="top"
                      target="create-payment"
                    >
                      Thêm mới hóa đơn
                    </UncontrolledTooltip>
                  </span>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table striped responsive >
                  <thead>
                    <tr>
                      <th>Mã hóa đơn</th>
                      <th>Số tiền đóng</th>
                      <th>Số tiền còn nợ</th>
                      <th>Trạng thái</th>
                      <th>Ngày hẹn hoàn thành</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {paymentData?.length > 0 ? (
                    <tbody>
                      {paymentData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.code}</td>
                          <td><NumberFormat
                              value={item.pay_amount}
                              displayType={"text"}
                              thousandSeparator={true}
                            />{" "}</td>
                            <td><NumberFormat
                              value={item.rest_amount}
                              displayType={"text"}
                              thousandSeparator={true}
                            />{" "}</td>
                          <td>
                          
                            { renderState(item.state) }
                          </td>
                          <td>
                            {
                              item.rest_amount <= 0 ? "Đã hoàn thành" :  moment(new Date(item.plan_date)).format("YYYY-MM-DD")
                            }
                          </td>
                          <td><Printer size={18} /></td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    ""
                  )}
                </Table>
                {course?.length === 0 && (
                  <div
                    style={{
                      textAlign: "center",
                      width: "100%",
                      padding: "20px 0px",
                    }}
                  >
                    <div style={{ marginTop: 10 }}>
                      Hợp đồng của bạn chưa có hóa đơn nào
                    </div>
                  </div>
                )}
              </CardBody>
            </Card>
            <Row>
             
            </Row>
          </Col>
          <Col md="4" lg="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="">
                  Thông tin hợp đồng
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* <FormGroup>
                  <Label for="nameVertical">Nội dung</Label>
                  <Input
                    type="text"
                    name="title"
                    value={object?.title}
                    onChange={hanldChange}
                    placeholder="Nội dung"
                  />
                </FormGroup> */}
                <FormGroup>
                  <Label for="select-basic">Ca học</Label>
                  <Input
                    type="select"
                    value={schedule}
                    name="state"
                    id="select-basic"
                    onChange={(item) => setSchedule(item.target.value)}
                  >
                    <option value="1">Ca ngày</option>
                    <option value="2">Ca tối</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="select-basic">Tình trạng hợp đồng</Label>
                  <Input
                    type="select"
                    value={object.state}
                    name="state"
                    id="select-basic"
                    onChange={hanldChange}
                  >
                    <option value="1">Cam kết</option>
                    <option value="2">Mất cam kết</option>
                    <option value="3">Cảnh cáo</option>
                    <option value="4">Thanh lý hợp đồng</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="nameVertical">Tư vấn viên</Label>
                  <Select
                    isClearable={false}
                    theme={selectThemeColors}
                    name="colors"
                    options={studentcareData}
                    getOptionLabel={(option) => option.username}
                    getOptionValue={(option) => option.id}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Chọn tư vấn viên"
                    value={studentcare}
                    onChange={(item) => setStudentcare(item)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="nameVertical">Ưu đãi</Label>
                  <Select
                    isClearable={false}
                    theme={selectThemeColors}
                    name="colors"
                    options={rewardData}
                    getOptionLabel={(option) => option.title}
                    getOptionValue={(option) => option.id}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Chọn ưu đãi"
                    value={reward}
                    onChange={(item) => setReward(item)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="nameVertical">Lớp học</Label>
                  <Select
                    isClearable={false}
                    theme={selectThemeColors}
                    name="colors"
                    options={classesData}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    className="react-select"
                    classNamePrefix="select"
                    isMulti
                    placeholder="Chọn lớp học"
                    value={classes}
                    onChange={(item) => onChangeMulClasses(item)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="nameVertical">Trung tâm</Label>
                  <Select
                    isClearable={false}
                    theme={selectThemeColors}
                    name="colors"
                    options={centerData}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Chọn trung tâm"
                    value={center}
                    onChange={(item) => setCenter(item)}
                  />
                </FormGroup>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="">
                  Ghi chú
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Input
                  type="textarea"
                  name="title"
                  // value={object?.title}
                  // onChange={hanldChange}
                  placeholder="Ghi chú"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        {visibleModal && (
          <StudentModal
            visible={visibleModal}
            onCancel={(isRefreshData) => {
              // setSelectedItem({});
              setVisibleModal(false);
            }}
            setStudent={setStudent}
            setStudentData={setStudentData}
            studentData={studentData}
          />
        )}
         {visible && (
          <PaymentModal
            visible={visible}
            onCancel={(isRefreshData) => {
              // setSelectedItem({});
              setVisible(false);
            }}
            renderTotal={renderTotal()}
            detailContract={object}
          />
        )}
      </div>
    </Fragment>
  );
}

export default withRouter(DetailPayment);

export const SvgCourese = () => {
  return (
    <svg
      width="104"
      height="104"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="104" height="104" fill="url(#pattern0)" fill-opacity="0.6" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_202_20" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_202_20"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
