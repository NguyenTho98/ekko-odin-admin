import React, { useEffect, useState } from "react";
import { Button, Col, CustomInput, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { toastSuccess } from "../../utility/common/toastify";
import { isEmpty } from "../../utility/Utils";
import { actionAddStudentcare, actionDeleteStudentcare, actionEditStudentcare } from "./StudentcareAction";

function DeleteStudentcareModal(props) {
  const { visible, onCancel, item = {}, handleFetchStudentcare } = props;
  const onSummit = async () => {
    await actionDeleteStudentcare(item.id);
    toastSuccess("Xoá chăm sóc học viên thành công")
    handleFetchStudentcare();
    onCancel(true);
  }
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel(true) }>
        <ModalHeader toggle={() => onCancel(true) }>Xóa chăm sóc học viên {item.name}</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="12">
                Bạn có thực sự muốn xóa dữ liệu không!
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
                    Xoá
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

export default DeleteStudentcareModal;
