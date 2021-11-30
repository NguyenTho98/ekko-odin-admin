import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const ProfileAbout = (props) => {
  const {} = props;
  return (
    <Col md="12">
      <Card style={{ padding: "0px 10px", width: "100%" }}>
      <CardHeader>
        <CardTitle tag='h4'>Thông tin tài khoản</CardTitle>
      </CardHeader>
      <CardBody style={{ width: "100%" }}>
        <Row style={{ justifyContent: "center" }}>
          <Col md="6">
            <FormGroup>
              <Label for="nameVertical">Tên đăng nhập</Label>
              <Input
                type="text"
                disabled
                name="title"
                value=""
                placeholder="Tên đăng nhập"
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameVertical">Họ và tên</Label>
              <Input
                type="text"
                name="title"
                value=""
                placeholder="Họ và tên"
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameVertical">Số điện thoại</Label>
              <Input
                type="text"
                name="title"
                value=""
                placeholder="Số điện thoại"
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameVertical">Email</Label>
              <Input type="text" name="title" value="" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="nameVertical">Địa chỉ</Label>
              <Input type="text" name="title" value="" placeholder="Địa chỉ" />
            </FormGroup>
            <FormGroup className="d-flex mt-2 mb-0 justify-content-end">
              <Button.Ripple color="primary">Lưu</Button.Ripple>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
    </Col>
  );
};

export default ProfileAbout;
