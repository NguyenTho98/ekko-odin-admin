import React, { Component } from "react";
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

function CancelShiftModal(props) {
  const {} = props;
  const onSummit = () => {};
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel(true)}>
        <ModalHeader toggle={() => onCancel(true)}>Hủy buổi học ngày</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Lý do buổi học</Label>
                  <Input
                    type="text"
                    name="name"
                    value={object?.name}
                    onChange={hanldChange}
                    placeholder="Nhập lý do hủy buổi học"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="d-flex mb-0 justify-content-end">
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

export default CancelShiftModal;
