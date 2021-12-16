import React, { useEffect, useState } from "react";
import { Button, Col, CustomInput, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { toastSuccess } from "../../../../utility/common/toastify";
import { isEmpty } from "../../../../utility/Utils";
import { actionAddFinalTerms, actionEditFinalTerms } from "./FinalTermsAction";

function EditFinalTermsModal(props) {
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
    const data = {
        ...object,
        classes: object.classes.id,
        users: object.users.id
    }
    if (isAddNew) {
        await actionAddFinalTerms(data);
        toastSuccess("Thêm mới điểm danh thành công")
      } else {
        await actionEditFinalTerms(data, item?.id);
        toastSuccess("Cập nhật điểm danh thành công")
      }
      onCancel(true);
  }
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel() }>
        <ModalHeader toggle={() => onCancel() }>{!isAddNew ? "Cập nhật" : "Thêm mới"} điểm danh</ModalHeader>
        <ModalBody>
        <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Tên học viên</Label>
                  <Input
                    type="text"
                    name="name"
                    disabled
                    value={object?.users?.username}
                    onChange={hanldChange}
                    placeholder="Tên học viên"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Placement</Label>
                  <Input
                    type="number"
                    name="placement"
                    value={object?.placement}
                    onChange={hanldChange}
                    placeholder="placement"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">attendence</Label>
                  <Input
                    type="number"
                    name="attendence"
                    value={object?.attendence}
                    onChange={hanldChange}
                    placeholder="attendence"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">participate</Label>
                  <Input
                    type="number"
                    name="participate"
                    value={object?.participate}
                    onChange={hanldChange}
                    placeholder="participate"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">homework</Label>
                  <Input
                    type="number"
                    name="homework"
                    value={object?.homework}
                    onChange={hanldChange}
                    placeholder="homework"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">pratice1</Label>
                  <Input
                    type="number"
                    name="pratice1"
                    value={object?.pratice1}
                    onChange={hanldChange}
                    placeholder="pratice1"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">pratice2</Label>
                  <Input
                    type="number"
                    name="pratice2"
                    value={object?.pratice2}
                    onChange={hanldChange}
                    placeholder="pratice2"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">midtern</Label>
                  <Input
                    type="number"
                    name="midtern"
                    value={object?.midtern}
                    onChange={hanldChange}
                    placeholder="midtern"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Note</Label>
                  <Input
                    type="text"
                    name="note"
                    value={object?.note}
                    onChange={hanldChange}
                    placeholder="note"
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

export default EditFinalTermsModal;
