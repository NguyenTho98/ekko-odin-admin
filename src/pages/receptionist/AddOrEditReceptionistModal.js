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
import { actionAddReceptionist, actionEditReceptionist } from "./ReceptionistAction";
import { getCenterList } from "../center/CenterAction";
import Select, { components } from "react-select";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import moment from "moment";
function AddOrEditReceptionistModal(props) {
  const { visible, onCancel, item = {} } = props;
  const [picker, setPicker] = useState(item?.birth_day ? new Date(item?.birth_day) : '');
 
  const isAddNew = isEmpty(item);
  const [object, setObject] = useState({
    gender: 1,
   });
  const [centerData, setCenterData] = useState([]);
  const [center, setCenter] = useState();
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
  console.log("object", object);
  const onSummit = async () => {
    const data = {
      ...object,
      center: center.id,
      birth_day: moment(new Date(picker)).format("YYYY-MM-DD"),
    }
    if (isAddNew) {
      await actionAddReceptionist(data);
      toastSuccess("Thêm mới lễ tân thành công");
    } else {
      await actionEditReceptionist(data, item?.id);
      toastSuccess("Cập nhật lễ tân thành công");
    }
    onCancel(true);
  };


  console.log("picker", picker);
  return (
    <div>
      <Modal size="lg" isOpen={visible} toggle={() => onCancel(true)}>
        <ModalHeader toggle={() => onCancel(true)}>
          {!isAddNew ? "Cập nhật" : "Thêm mới"} lễ tân
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Họ và tên</Label>
                  <Input
                    type="text"
                    name="full_name"
                    value={object?.full_name}
                    onChange={hanldChange}
                    placeholder="Họ và tên"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="select-basic">Giới tính</Label>
                  <Input
                    type="select"
                    name="gender"
                    value={object?.gender}
                    id="select-basic"
                    onChange={hanldChange}
                  >
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                    <option value="3">Khác</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Tên đăng nhập</Label>
                  <Input
                    type="text"
                    name="username"
                    value={object?.username}
                    onChange={hanldChange}
                    placeholder="Tên đăng nhập"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Email</Label>
                  <Input
                    type="text"
                    name="email"
                    value={object?.email}
                    onChange={hanldChange}
                    placeholder="Email"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Số điện thoại</Label>
                  <Input
                    type="number"
                    name="phone"
                    value={object?.phone}
                    onChange={hanldChange}
                    placeholder="Số điện thoại"
                  />
                </FormGroup>
              </Col>
            
              <Col sm="6">
                <FormGroup>
                  <Label for="default-picker">Ngày sinh</Label>
                  <Flatpickr
                    className="form-control"
                    value={picker}
                    onChange={(date) => onChangePicker(date)}
                    id="default-picker"
                    options={{
                      dateFormat: "Y-m-d",
                    }}
                    onChange={(time) => setPicker(time)}
                    placeholder="Ngày sinh"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="EmailVertical">Địa chỉ</Label>
                  <Input
                    type="text"
                    name="address"
                    value={object?.address}
                    onChange={hanldChange}
                    placeholder="Địa chỉ"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
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
              </Col>{" "}
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

export default AddOrEditReceptionistModal;
