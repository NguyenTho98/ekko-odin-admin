import React, { useEffect, useState } from "react";
import { Button, Col, CustomInput, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { toastSuccess } from "../../../../utility/common/toastify";
import { isEmpty } from "../../../../utility/Utils";
import { actionAddAttendant, actionEditAttendant } from "../../../attendant/AttendantAction";

function AttendantModal(props) {
  const { visible, onCancel, item = {} } = props;
  const isAddNew = isEmpty(item);
  const [object, setObject] = useState({});
  useEffect(() => {
    if (item && item.id) {
      setObject(item);
    }
  }, [item]);

  const hanldChange = (e) => {
      const {name, value} = e.target;
      setObject({...object, [name]: value})
  }
  const onSummit = async () => {
    if (isAddNew) {
        await actionAddAttendant(object);
        toastSuccess("Thêm mới điểm danh thành công")
      } else {
        await actionEditAttendant(object, item?.id);
        toastSuccess("Cập nhật điểm danh thành công")
      }
      onCancel(true);
  }
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel(true) }>
        <ModalHeader toggle={() => onCancel(true) }>{!isAddNew ? "Cập nhật" : "Thêm mới"} điểm danh</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Tên học viên</Label>
                  <Input
                    type="text"
                    name="name"
                    value={object?.users?.username}
                    onChange={hanldChange}
                    disabled
                    placeholder="Tên học viên"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Điểm danh</Label>
                  <Input
                   type="number"
                    name="cost"
                    value={object?.cost}
                    onChange={hanldChange}
                    placeholder="Giá gốc"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Điểm trên lớp</Label>
                  <Input
                    type="number"
                    name="night_cost"
                    value={object?.night_cost}
                    onChange={hanldChange}
                    placeholder="Giá ca ngày"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Điểm bài tập </Label>
                  <Input
                   type="number"
                    name="daytime_cost"
                    value={object?.daytime_cost}
                    onChange={hanldChange}
                    placeholder="Giá ca tối"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Lý do</Label>
                  <Input
                     type="text"
                    name="study_shift_count"
                    value={object?.study_shift_count}
                    onChange={hanldChange}
                    placeholder="Lý do"
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

export default AttendantModal;
