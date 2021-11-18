import React, { useState } from "react";
import { Col, FormGroup, Input, Label, Row, Button } from "reactstrap";
import "./AddPoint.scss";

import Flatpickr from "react-flatpickr";

import "@styles/react/libs/flatpickr/flatpickr.scss";
import { actionAddShift } from "../../../shift/ShiftAction";
import moment from "moment";
function AddPoint(props) {
  const { classesDetail, pointList, setPointList } = props;
  const onChangePicker = (date) => {
    setPicker(date);
  };
  const [picker, setPicker] = useState(new Date());
  const renderTime = (time) => {
    if (time === "Đang diễn ra") {
      return 2;
    }
    if (time === "Đã kết thúc") {
      return 3;
    }
    return 1;
  };
  const onSummit = () => {
    const data = {
      classes: classesDetail.id,
      time: renderTime(classesDetail.time),
      session_date: moment(new Date(picker)).format("DD-MM-YYYY hh:mm:ss"),
    };
    actionAddShift(data).then((res) => {
      const tmp = [...pointList];
      tmp.push(res.data);
      setPointList(tmp);
    });
  };
  return (
    <div className="add-point-wrapper">
      <Row style={{ marginRight: 0, marginLeft: 0 }}>
        <Col sm={12} xs={12}>
          <div className="title">Thêm mới buổi học</div>
        </Col>

        <Col sm="12">
          <FormGroup>
            <Label for="nameVertical">Tên lớp học</Label>
            <Input
              type="text"
              name="name"
              disabled
              value={classesDetail?.name}
              placeholder="Tên lớp học"
            />
          </FormGroup>
          <FormGroup>
            <Label for="nameVertical">Khung giờ</Label>
            <Input
              type="text"
              name="name"
              disabled
              value={classesDetail?.time}
              placeholder="Tên lớp học"
            />
          </FormGroup>
          <FormGroup>
            <Label for="default-picker">Thời gian</Label>
            <Flatpickr
              className="form-control"
              value={picker}
              onChange={(date) => onChangePicker(date)}
              id="default-picker"
              options={{
                dateFormat: "Y-m-d h:m:i",
              }}
            />
          </FormGroup>
        </Col>
        <Col sm="12">
          <FormGroup className="d-flex mb-0 justify-content-end">
            <Button.Ripple color="primary" onClick={onSummit}>
              Lưu
            </Button.Ripple>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
}

export default AddPoint;
