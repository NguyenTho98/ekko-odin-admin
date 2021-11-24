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
import { actionAddStudent, actionEditStudent } from "./StudentAction";
import { getCenterList } from "../center/CenterAction";
import Select, { components } from "react-select";
import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";
function AddOrEditStudentModal(props) {
  const { visible, onCancel, item = {} } = props;
  const [picker, setPicker] = useState(new Date());
  const isAddNew = isEmpty(item);
  const [object, setObject] = useState({
    title: "",
    content: "",
    category: 1,
    state: 1,
  });
  const [centerData, setCenterData] = useState([]);

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
    if (isAddNew) {
      await actionAddStudent(object);
      toastSuccess("Thêm mới học viên thành công");
    } else {
      await actionEditStudent(object, item?.id);
      toastSuccess("Cập nhật học viên thành công");
    }
    onCancel(true);
  };
  const renderCategory = () => {
    if (object.time === "Bảo lưu") {
      return 2;
    }
    if (object.time === "Hộ trợ học tập") {
      return 3;
    }
    if (object.time === "Rút quyền lợi") {
      return 4;
    }
    if (object.time === "Khiếu nại") {
      return 5;
    }
    if (object.time === "Khác") {
      return 6;
    }
    return 1;
  };

  const renderState = () => {
    if (object.time === "Đang xử lý") {
      return 2;
    }
    if (object.time === "Hoàn thành") {
      return 3;
    }
    if (object.time === "Hủy") {
      return 4;
    }

    return 1;
  };
  console.log("picker", picker);
  return (
    <div>
      <Modal size="lg" isOpen={visible} toggle={() => onCancel(true)}>
        <ModalHeader toggle={() => onCancel(true)}>
          {!isAddNew ? "Cập nhật" : "Thêm mới"} học viên
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Họ và tên</Label>
                  <Input
                    type="text"
                    name="title"
                    value={object?.title}
                    onChange={hanldChange}
                    placeholder="Tiêu đề"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Tên đăng nhập</Label>
                  <Input
                    type="text"
                    name="title"
                    value={object?.title}
                    onChange={hanldChange}
                    placeholder="Tiêu đề"
                  />
                </FormGroup>
              </Col>
              <Col md="12">
              <CustomInput
            type='checkbox'
            className='custom-control-Primary'
            id='Primary'
            label='Cấp quyền admin'
            inline
          />
            <CustomInput
            type='checkbox'
            className='custom-control-Primary'
            id='Primary'
            label='Cấp quyền quản lý'
            defaultChecked
            inline
          />
            <CustomInput
            type='checkbox'
            className='custom-control-Primary'
            id='Primary'
            label='Kích hoạt tài khoản'
            defaultChecked
            inline
          />
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Email</Label>
                  <Input
                    type="text"
                    name="title"
                    value={object?.title}
                    onChange={hanldChange}
                    placeholder="Tiêu đề"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Số điện thoại</Label>
                  <Input
                    type="text"
                    name="title"
                    value={object?.title}
                    onChange={hanldChange}
                    placeholder="Tiêu đề"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Password</Label>
                  <Input
                    type="password"
                    name="title"
                    value={object?.title}
                    onChange={hanldChange}
                    placeholder="Tiêu đề"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="select-basic">Giới tính</Label>
                  <Input
                    type="select"
                    value={renderCategory()}
                    name="type"
                    id="select-basic"
                    onChange={hanldChange}
                  >
                    <option value="1">Giảm giá</option>
                    <option value="2">Quà tặng</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <CustomInput
            type='checkbox'
            className='custom-control-Primary'
            id='Primary'
            label='Chờ xếp lớp'
            defaultChecked
            inline
          />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="EmailVertical">Ngày sinh</Label>
                  <Input
                    type="text"
                    name="content"
                    value={object?.content}
                    onChange={hanldChange}
                    placeholder="Quà tặng"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="EmailVertical">Số điện thoại bổ sung</Label>
                  <Input
                    type="text"
                    name="content"
                    value={object?.content}
                    onChange={hanldChange}
                    placeholder="Quà tặng"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="EmailVertical">Cơ quan/trường học hiện tại</Label>
                  <Input
                    type="text"
                    name="content"
                    value={object?.content}
                    onChange={hanldChange}
                    placeholder="Quà tặng"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="EmailVertical">Chuyên ngành</Label>
                  <Input
                    type="text"
                    name="content"
                    value={object?.content}
                    onChange={hanldChange}
                    placeholder="Quà tặng"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="EmailVertical">Mục tiêu học</Label>
                  <Input
                    type="text"
                    name="content"
                    value={object?.content}
                    onChange={hanldChange}
                    placeholder="Quà tặng"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="EmailVertical">Mục đích học</Label>
                  <Input
                    type="text"
                    name="content"
                    value={object?.content}
                    onChange={hanldChange}
                    placeholder="Quà tặng"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="EmailVertical">Bạn biết odin thông qua kênh nào?</Label>
                  <Input
                    type="text"
                    name="content"
                    value={object?.content}
                    onChange={hanldChange}
                    placeholder="Quà tặng"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <Label for="nameVertical">Vai trò</Label>
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
                />
              </Col>  <Col sm="12">
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
                  placeholder="Chọn trung tâm"
                />
              </Col>  <Col sm="12">
                <Label for="nameVertical">Lớp học</Label>
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
                  placeholder="Chọn trung tâm"
                />
              </Col>
              <Col sm="12">
                <Label for="nameVertical">Các quyền</Label>
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

export default AddOrEditStudentModal;
