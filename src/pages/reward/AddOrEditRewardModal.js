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
import { toastSuccess } from "../../utility/common/toastify";
import { isEmpty } from "../../utility/Utils";
import { actionAddReward, actionEditReward } from "./RewardAction";
import { getCenterList } from "../center/CenterAction";
import Select, { components } from "react-select";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import moment from "moment";
function AddOrEditRewardModal(props) {
  const { visible, onCancel, item = {} } = props;
  const [picker, setPicker] = useState(["2020-02-01", "2020-02-15"]);
  const isAddNew = isEmpty(item);
  const [object, setObject] = useState({
    title: "",
    content: "",
    category: 1,
    state: 1,
  });
  const [centerData, setCenterData] = useState([]);
  const [center, setCenter] = useState([]);
  const onChangeMulCenter = (value) => {
    let tmp = null;
    if (value && value.length > 0) {
     tmp = value.map((item) => item.id);
    }
    setCenter(tmp);
  }
  useEffect(() => {
    if (item && item.id) {
      setObject(item);
    }
  }, [item]);

  const handleFetchCenterData = async () => {
    try {
      const { data } = await getCenterList();
      setCenterData(data?.results || []);
    } catch (error) {}
  };

  useEffect(() => {
    handleFetchCenterData();
  }, [item]);

  const hanldChange = (e) => {
    const { name, value } = e.target;
    setObject({ ...object, [name]: value });
  };
  const onSummit = async () => {
    if (isAddNew) {
      const data = {
        ...object,
        course: center,
        start_date: moment(new Date(picker[0])).format("YYYY-MM-DD"),
        end_date: moment(new Date(picker[1])).format("YYYY-MM-DD"),
      }
      await actionAddReward(data);
      toastSuccess("Thêm mới ưu đãi thành công");
    } else {
      await actionEditReward(data, item?.id);
      toastSuccess("Cập nhật ưu đãi thành công");
    }
    onCancel(true);
  };
  const renderCategory = () => {
    if (object.time === "Quà tặng") {
      return 2;
    }
    return 1;
  };
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel(true)}>
        <ModalHeader toggle={() => onCancel(true)}>
          {!isAddNew ? "Cập nhật" : "Thêm mới"} ưu đãi
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Tiêu đề</Label>
                  <Input
                    type="text"
                    name="title"
                    value={object?.title}
                    onChange={hanldChange}
                    placeholder="Tiêu đề"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="select-basic">Loại ưu đãi</Label>
                  <Input
                    type="select"
                    value={object.type}
                    name="type"
                    id="select-basic"
                    onChange={hanldChange}
                  >
                    <option value="1">Giảm giá</option>
                    <option value="2">Quà tặng</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Số lượng</Label>
                  <Input
                    type="number"
                    name="quantity"
                    value={object?.quantity}
                    onChange={hanldChange}
                    placeholder="Số lượng"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Quà tặng</Label>
                  <Input
                    type="text"
                    name="gift"
                    value={object?.gift}
                    onChange={hanldChange}
                    placeholder="Quà tặng"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Giảm giá(%)</Label>
                  <Input
                    type="number"
                    name="discount"
                    value={object?.discount}
                    onChange={hanldChange}
                    placeholder="Giảm giá(%)"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="range-picker">Thời gian</Label>
                  <Flatpickr
                    value={picker}
                    id="range-picker"
                    className="form-control"
                    onChange={(date) => setPicker(date)}
                    options={{
                      mode: "range",
                      defaultDate: ["2020-02-01", "2020-02-15"],
                    }}
                  />
                </FormGroup>
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
                <Label for="nameVertical">Trung tâm</Label>
                <Select
                  isClearable={false}
                  theme={selectThemeColors}
                  isMulti
                  name="colors"
                  options={centerData}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  className="react-select"
                  classNamePrefix="select"
                  onChange={onChangeMulCenter}
                  placeholder="Chọn trung tâm"
                />
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

export default AddOrEditRewardModal;
