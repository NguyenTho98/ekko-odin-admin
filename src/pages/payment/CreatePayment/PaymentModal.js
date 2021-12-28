import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  CustomInput,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { selectThemeColors } from "@utils";
import Select, { components } from "react-select";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import moment from "moment";
import { toastSuccess } from "../../../utility/common/toastify";
import { isEmpty } from "../../../utility/Utils";
import { getRewardList } from "../../reward/RewardAction";
import { getUserList } from "../../users/UsersAction";
import { actionAddPayment, actionEditPayment } from "../PaymentAction";
function PaymentModal(props) {
  const { visible, onCancel, item = {} } = props;
  const [payment_date, setPayment_date] = useState(new Date());
  const [plan_date, setPlan_date] = useState(new Date());
  const isAddNew = isEmpty(item);
  const [object, setObject] = useState({
    title: "",
  });
  const [rewardData, setRewardData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [reward, setReward] = useState(item?.reward);
  const [payer, setPayer] = useState(item?.payer);
  const [cashier, setCashier] = useState(item?.cashier);
  useEffect(() => {
    if (item && item.id) {
      setObject(item);
    }
  }, [item]);


  useEffect(() => {
    handleFetchRewardData();
    handleFetchUsersData();
  }, [item]);

  const handleFetchRewardData = async () => {
    try {
      const { data } = await getRewardList();
      setRewardData(data?.results || []);
    } catch (error) {}
  };

  const handleFetchUsersData = async () => {
    try {
      const { data } = await getUserList();
      setUsersData(data?.results || []);
    } catch (error) {}
  };

  const hanldChange = (e) => {
    const { name, value } = e.target;
    setObject({ ...object, [name]: value });
  };
  const onSummit = async () => {
    const data = {
        ...object,
        payer: payer?.id,
        reward: reward?.id,
        cashier: cashier?.id,
        payment_date: moment(new Date(payment_date)).format("YYYY-MM-DD"),
        plan_date: moment(new Date(plan_date)).format("YYYY-MM-DD"),
      }
    if (isAddNew) {
      await actionAddPayment(data);
      toastSuccess("Thêm mới hóa đơn thành công");
    } else {
      await actionEditPayment(data, item?.id);
      toastSuccess("Cập nhật hóa đơn thành công");
    }
    onCancel(true);
  };
  const renderCategory = () => {
    if (object.method === "Chuyển tiền") {
      return 1;
    }
    return 0;
  };

  const renderState = () => {
    if (object.state === "Chờ") {
      return 2;
    }
    if (object.state === "Từ chối") {
      return 3;
    }
    return 1;
  };
  return (
    <div>
      <Modal size="lg" isOpen={visible} toggle={() => onCancel(true)}>
        <ModalHeader toggle={() => onCancel(true)}>
          {!isAddNew ? "Cập nhật" : "Thêm mới"} hóa đơn
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Nội dung</Label>
                  <Input
                    type="text"
                    name="title"
                    value={object?.title}
                    onChange={hanldChange}
                    placeholder="Nội dung"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Số tiền đóng</Label>
                  <Input
                    type="number"
                    name="pay_amount"
                    value={object?.pay_amount}
                    onChange={hanldChange}
                    placeholder="Số tiền đóng"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Số còn nợ</Label>
                  <Input
                    type="number"
                    name="rest_amount"
                    value={object?.rest_amount}
                    onChange={hanldChange}
                    placeholder="Số còn nợ"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="default-picker">Ngày nộp</Label>
                  <Flatpickr
                    className="form-control"
                    value={payment_date}
                    onChange={(date) => setPayment_date(date)}
                    id="default-picker"
                    options={{
                      dateFormat: "Y-m-d h:m:i",
                    }}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="default-picker">Ngày hẹn nộp hoàn thành</Label>
                  <Flatpickr
                    className="form-control"
                    value={plan_date}
                    onChange={(date) => setPlan_date(date)}
                    id="default-picker"
                    options={{
                      dateFormat: "Y-m-d h:m:i",
                    }}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="select-basic">Hình thức</Label>
                  <Input
                    type="select"
                    value={object.method}
                    name="method"
                    id="select-basic"
                    onChange={hanldChange}
                  >
                    <option value="1">Tiền mặt</option>
                    <option value="2">Chuyển tiền</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="select-basic">Trạng thái</Label>
                  <Input
                    type="select"
                    value={object.state}
                    name="state"
                    id="select-basic"
                    onChange={hanldChange}
                  >
                    <option value="1">Hoàn thành</option>
                    <option value="2">Chờ</option>
                    <option value="3">Từ chối</option>
                  </Input>
                </FormGroup>
              </Col>
             
              <Col sm="12">
                <Label for="nameVertical">Người nộp</Label>
                <Select
                  isClearable={false}
                  theme={selectThemeColors}
                  name="colors"
                  options={usersData}
                  getOptionLabel={(option) => option.username}
                  getOptionValue={(option) => option.id}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="Chọn người nộp"
                  value={payer}
                  onChange={(item) => setPayer(item) }
                />
              </Col>
              <Col sm="12">
                <Label for="nameVertical">Người thu</Label>
                <Select
                  isClearable={false}
                  theme={selectThemeColors}
                  name="colors"
                  options={usersData}
                  getOptionLabel={(option) => option.username}
                  getOptionValue={(option) => option.id}
                  className="react-select"
                  classNamePrefix="select"
                  placeholder="Chọn người thu"
                  value={cashier}
                  onChange={(item) => setCashier(item) }
                />
              </Col>
              <Col sm="12">
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
                  onChange={(item) => setReward(item) }
                />
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Ghi chú</Label>
                  <Input
                    type="textarea"
                    name="note"
                    value={object?.note}
                    onChange={hanldChange}
                    placeholder="Ghi chú"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="d-flex mt-2 mb-0 justify-content-end">
                  <Button.Ripple
                    outline
                    color="secondary"
                    onClick={() => onCancel(true)}
                    type="reset"
                    className="mr-1"
                  >
                    Hủy
                  </Button.Ripple>
                  <Button.Ripple color="primary" onClick={onSummit}>
                    Lưu
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PaymentModal;
