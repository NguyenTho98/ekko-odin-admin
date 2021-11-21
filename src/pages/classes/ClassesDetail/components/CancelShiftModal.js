import React, { useState } from "react";
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
  const { visible, onCancel}  = props;
  const [reason_holiday, setReasonHoliday] = useState('')
  const onSummit = () => {
    // actionEditClasses()
  };
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel()}>
        <ModalHeader toggle={() => onCancel()}>Hủy buổi học ngày</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Lý do buổi học</Label>
                  <Input
                    type="textarea"
                    name="reason_holiday"
                    value={reason_holiday}
                    onChange={(e) => setReasonHoliday(e.target.value)}
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
