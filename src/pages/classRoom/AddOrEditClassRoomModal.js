import React, { useEffect, useState } from "react";
import { Button, Col, CustomInput, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { toastSuccess } from "../../utility/common/toastify";
import { isEmpty } from "../../utility/Utils";
import { actionAddClassRoom, actionEditClassRoom } from "./ClassRoomAction";
import { selectThemeColors } from '@utils'
import { getCenterList } from "../center/CenterAction";
import Select from 'react-select'
function AddOrEditClassRoomModal(props) {
  const { visible, onCancel, item = {} } = props;
 
  const isAddNew = isEmpty(item);
  const [object, setObject] = useState({});
  const [centerData, setCenterData] = useState([]);
  const [center, setCenter] = useState(item?.center);
  useEffect(() => {
    if (item && item.id) {
      setObject(item);
    }
  }, [item]);
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
      setObject({...object, [name]: value})
  }
  const onSummit = async () => {
    const data = {
      ...object,
      center: center?.id
    }
    if (isAddNew) {
        await actionAddClassRoom(data);
        toastSuccess("Thêm mới phòng học thành công")
      } else {
        await actionEditClassRoom(data, item?.id);
        toastSuccess("Cập nhật phòng học thành công")
      }
      onCancel(true);
  }
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel(true) }>
        <ModalHeader toggle={() => onCancel(true) }>{!isAddNew ? "Cập nhật" : "Thêm mới"} phòng học</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Tên phòng học</Label>
                  <Input
                    type="text"
                    name="name"
                    value={object?.name}
                    onChange={hanldChange}
                    placeholder="Tên phòng học"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
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
                    onChange={(item) => setCenter(item) }
                  />
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

export default AddOrEditClassRoomModal;
