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
import { getCenterList } from "../../center/CenterAction";
import { actionAddPayment, actionEditPayment } from "../PaymentAction";
import { actionEditContract } from "../../contract/ContractAction";
function PaymentModal(props) {
  const { visible, onCancel, item = {}, renderTotal, detailContract } = props;
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
  const [center, setCenter] = useState(item?.center);
  const [centerData, setCenterData] = useState([]);
  useEffect(() => {
    if (item && item.id) {
      setObject(item);
    }
  }, [item]);

  useEffect(() => {
    handleFetchRewardData();
    handleFetchUsersData();
    handleFetchCenterData();
  }, []);
  const renderTotal1 = () => {
    let total = renderTotal;
    if (detailContract.payment?.length > 0) {
      total = detailContract.payment[detailContract.payment?.length - 1].rest_amount
      return total
    }
    return total;
  }
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
  const handleFetchCenterData = async () => {
    try {
      const { data } = await getCenterList();
      setCenterData(data?.results || []);
    } catch (error) {}
  };
  function numberWithCommas(x) {
    return x.toString().replaceAll(",", "");
  }
  const hanldChange = (e) => {
    const { name, value } = e.target;
    if (name === "pay_amount") {
      const tmp = renderTotal1() - parseInt(numberWithCommas(value));
      setObject({ ...object, [name]: value, rest_amount: tmp });
      if (tmp > 0) {
        setPlan_date(moment(new Date()).add(40, "days").format("DD-MM-YYYY"));
      } else {
        setPlan_date(new Date());
      }
    } else {
      setObject({ ...object, [name]: value });
    }
  };
  const onSummit = async () => {
    const data = {
      ...object,
      center: detailContract?.center?.id,
      payer: detailContract?.customers?.id,
      center: detailContract?.center?.id,
      cashier: cashier?.id,
      payment_date: moment(new Date(payment_date)).format("YYYY-MM-DD"),
      plan_date: moment(new Date(plan_date)).format("YYYY-MM-DD"),
    };
    if (isAddNew) {
      const tm = await actionAddPayment(data);
      if (tm?.data?.id) {
        const idCourse = detailContract?.course?.length > 0 ? detailContract?.course?.map((item) => item.id) : [];
        const idClasses = detailContract?.classes?.length > 0 ? detailContract?.classes?.map((item) => item.id) : [];
        const tmp = {...detailContract,
          center: detailContract?.center?.id,
          classes: idClasses,
          consultant: detailContract?.consultant?.id,
          course: idCourse,
          reward: detailContract?.reward?.id,
          customers: detailContract?.customers?.id,
        }
        if (detailContract?.payment?.length > 0) {
          const tmp2 = detailContract?.payment?.map(item => item.id);
          tmp.payment = tmp2.concat([tm?.data?.id])
        } else {
          tmp.payment = [tm?.data?.id]
        }
        console.log(" tmp.payment",  tmp);
        await actionEditContract(tmp, detailContract?.id)
      } 
      toastSuccess("Thêm mới hóa đơn thành công");
    } else {
      await actionEditPayment(data, item?.id);
      toastSuccess("Cập nhật hóa đơn thành công");
    }
    onCancel(true);
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
                    value={object?.rest_amount || 0}
                    onChange={hanldChange}
                    placeholder="Số còn nợ"
                    disabled
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
                    disabled
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
                    disabled
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
                  <Label for="nameVertical">Tên ngân hàng</Label>
                  <Input
                    type="text"
                    name="banks"
                    value={object?.banks}
                    onChange={hanldChange}
                    placeholder="Tên ngân hàng"
                  />
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
              <Col sm="6">
                <FormGroup>
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
                    onChange={(item) => setCashier(item)}
                  />
                </FormGroup>
              </Col>
              {/* <Col sm="12">
                <FormGroup>
                  <Label>Trung tâm</Label>
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
              </Col> */}
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
