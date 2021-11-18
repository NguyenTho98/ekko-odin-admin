import React, { useEffect, useState } from "react";
import { Button, Col, CustomInput, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { toastSuccess } from "../../utility/common/toastify";
import { isEmpty } from "../../utility/Utils";
import { actionAddCourse, actionEditCourse } from "./CourseAction";

function AddOrEditCourseModal(props) {
  const { visible, onCancel, item = {} } = props;
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
        await actionAddCourse(object);
        toastSuccess("Thêm mới khoá học thành công")
      } else {
        await actionEditCourse(object, item?.id);
        toastSuccess("Cập nhật khoá học thành công")
      }
      onCancel(true);
  }
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel(true) }>
        <ModalHeader toggle={() => onCancel(true) }>{!isAddNew ? "Cập nhật" : "Thêm mới"} khóa học</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Tên khóa học</Label>
                  <Input
                    type="text"
                    name="name"
                    value={object?.name}
                    onChange={hanldChange}
                    placeholder="Tên khóa học"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Giá gốc</Label>
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
                  <Label for="EmailVertical">Giá ca ngày</Label>
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
                  <Label for="EmailVertical">Giá ca tối</Label>
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
                  <Label for="EmailVertical">Số buổi học</Label>
                  <Input
                     type="number"
                    name="study_shift_count"
                    value={object?.study_shift_count}
                    onChange={hanldChange}
                    placeholder="Số buổi học"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Mô tả</Label>
                  <Input
                    type="text"
                    name="description"
                    value={object?.description}
                    onChange={hanldChange}
                    placeholder="Mô tả"
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

export default AddOrEditCourseModal;
