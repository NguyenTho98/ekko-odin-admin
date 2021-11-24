import React, { useEffect, useState } from "react";
import { Button, Col, CustomInput, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { toastSuccess } from "../../utility/common/toastify";
import { isEmpty } from "../../utility/Utils";
import { actionAddStudent, actionDeleteStudent, actionEditStudent } from "./StudentAction";

function DeleteStudentModal(props) {
  const { visible, onCancel, item = {}, handleFetchStudent } = props;
  const onSummit = async () => {
    await actionDeleteStudent(item.id);
    toastSuccess("Xoá học viên thành công")
    handleFetchStudent();
    onCancel(true);
  }
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel(true) }>
        <ModalHeader toggle={() => onCancel(true) }>Xóa học viên {item.name}</ModalHeader>
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

export default DeleteStudentModal;
