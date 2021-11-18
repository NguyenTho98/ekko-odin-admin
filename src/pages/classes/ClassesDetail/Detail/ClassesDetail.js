import React, { Component } from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import moment from 'moment'
function ClassesDetail(props) {
  const { classesDetail } = props;
    return (
        <React.Fragment>
            <Row>
              <Col sm="4">
                <FormGroup>
                  <Label for="nameVertical">Mã lớp học</Label>
                  <Input
                    type="text"
                    name="name"
                    value={classesDetail.code}
                    placeholder="Mã lớp học"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="nameVertical">Tên lớp học</Label>
                  <Input
                    type="text"
                    name="name"
                    value={classesDetail.name}
                    placeholder="Tên lớp học"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="EmailVertical">Danh sách giáo viên</Label>
                  <Input
                    type="text"
                    name="address"
                    value={classesDetail.teachers}
                    placeholder="Danh sách giáo viên"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="EmailVertical">Lịch học</Label>
                  <Input
                    type="text"
                    name="address"
                    value={classesDetail.schedule}
                    placeholder="Lịch học"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="nameVertical">Ngày khai giảng</Label>
                  <Input
                    type="text"
                    name="name"
                    value={moment(classesDetail.start_date).format("DD-MM-YYYY")}
                    placeholder="Ngày khai giảng"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="nameVertical">Ngày kết thúc</Label>
                  <Input
                    type="text"
                    name="name"
                    value={moment(classesDetail.end_date).format("DD-MM-YYYY")}
                    placeholder="Ngày kết thúc"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="EmailVertical">Số buổi học</Label>
                  <Input
                    type="text"
                    name="address"
                    value={classesDetail.available}
                    placeholder="Số buổi học"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="EmailVertical">Số học viên</Label>
                  <Input
                    type="text"
                    name="address"
                    value={classesDetail.capacity}
                    placeholder="Số học viên"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="nameVertical">Thời gian</Label>
                  <Input
                    type="text"
                    name="name"
                    value={classesDetail.time}
                    placeholder="Thời gian"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="EmailVertical">Trạng thái lớp học</Label>
                  <Input
                    type="text"
                    name="address"
                    value={classesDetail.status_classes}
                    placeholder="Địa chỉ"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="EmailVertical">Trung tâm</Label>
                  <Input
                    type="text"
                    name="address"
                    value={classesDetail?.center?.name}
                    placeholder="Trung tâm"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="nameVertical">Khóa học</Label>
                  <Input
                    type="text"
                    name="name"
                    value={classesDetail?.course?.name}
                    placeholder="Khóa học"
                  />
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label for="EmailVertical">Phòng học</Label>
                  <Input
                    type="text"
                    name="address"
                    value={classesDetail?.classroom?.name}
                    placeholder="Phòng học"
                  />
                </FormGroup>
              </Col>
              
            </Row>
        </React.Fragment>
    );
}
 
export default ClassesDetail;