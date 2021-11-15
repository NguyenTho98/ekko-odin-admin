import React, { useEffect, useState } from "react";
import { Button, Col, CustomInput, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { toastSuccess } from "../../utility/common/toastify";
import { isEmpty } from "../../utility/Utils";
import { actionAddCenter, actionEditCenter } from "./CenterAction";

function AddOrEditCenterModal(props) {
  const { visible, onCancel, item = {} } = props;
  console.log("item", item);
  const isAddNew = isEmpty(item);
  const [object, setObject] = useState({});
  useEffect(() => {
    setObject(item);
  }, [item])

  const hanldChange = (e) => {
      const {name, value} = e.target;
      setObject({...object, [name]: value})
  }
  const onSummit = async () => {
    if (isAddNew) {
        await actionAddCenter(object);
        toastSuccess("Thêm mới trung tâm thành công")
      } else {
        await actionEditCenter(object, item?.id);
        toastSuccess("Cập nhật trung tâm thành công")
      }
      onCancel(true);
  }
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel(true) }>
        <ModalHeader toggle={() => onCancel(true) }>{!isAddNew ? "Cập nhật" : "Thêm mới"} trung tâm</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Tên trung tâm</Label>
                  <Input
                    type="text"
                    name="name"
                    value={object?.name}
                    onChange={hanldChange}
                    placeholder="Tên trung tâm"
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

export default AddOrEditCenterModal;
