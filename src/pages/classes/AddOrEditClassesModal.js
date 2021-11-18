import React, { useEffect, useState } from "react";
import { Button, Col, CustomInput, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { toastSuccess } from "../../utility/common/toastify";
import { isEmpty } from "../../utility/Utils";
import { actionAddClasses, actionEditClasses } from "./ClassesAction";
import { selectThemeColors } from '@utils'
import { getCenterList } from "../center/CenterAction";
import Select from 'react-select'
function AddOrEditClassesModal(props) {
  const { visible, onCancel, item = {} } = props;
  console.log("item", item);
  const isAddNew = isEmpty(item);
  const [object, setObject] = useState({});
  const [centerData, setCenterData] = useState([]);
  useEffect(() => {
    setObject(item);
  }, [item])
  useEffect(() => {
    handleFetchCenterData();
  }, [item]) 

  const handleFetchCenterData = async (field, value) => {
    try {
      let rqParams = { page: 0, size: 50, query: "" };
      if (field && value) {
        rqParams.query = isNaN(value)
          ? `${field}=="*${value}*"`
          : `${field}==${value}`;
      }

      const { data } = await getCenterList(rqParams);
      setCenterData(data?.results || []);
    } catch (error) {}
  };
  const hanldChange = (e) => {
      const {name, value} = e.target;
      console.log("1", name);
      console.log("2", value);
      setObject({...object, [name]: value})
  }
  const onSummit = async () => {
    if (isAddNew) {
        await actionAddClasses(object);
        toastSuccess("Thêm mới lớp học thành công")
      } else {
        await actionEditClasses(object, item?.id);
        toastSuccess("Cập nhật lớp học thành công")
      }
      onCancel(true);
  }
  return (
    <div>
      <Modal size="lg" isOpen={visible} toggle={() => onCancel(true) }>
        <ModalHeader toggle={() => onCancel(true) }>{!isAddNew ? "Cập nhật" : "Thêm mới"} lớp học</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="6">
                <FormGroup>
                  <Label for="nameVertical">Tên lớp học</Label>
                  <Input
                    type="text"
                    name="name"
                    value={object?.name}
                    onChange={hanldChange}
                    placeholder="Tên lớp học"
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
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Số ghế</Label>
                  <Input
                    type="number"
                    name="size"
                    value={object?.size}
                    onChange={hanldChange}
                    placeholder="Số ghế"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                <Label>Trung tâm</Label>
                <Input type='select' name='center' id='select-basic' onChange={hanldChange} value={object?.center}>
                  {
                    centerData.map((item, index) => <option key={index} value={item.id} >{item.name}</option>)
                  }
                </Input>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="d-flex mb-0 justify-content-end">
                  <Button.Ripple outline color="secondary" onClick={() => onCancel(true)} type="reset" className="mr-1">
                    Hủy
                  </Button.Ripple>
                  <Button.Ripple
                    color="primary"
                    onClick={onSummit}
                  >
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

export default AddOrEditClassesModal;
