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
import InputPasswordToggle from '@components/input-password-toggle'
const ProfileChangePassword = (props) => {
  const {} = props;
  return (
    <Card style={{ padding: "0px 10px", width: "100%" }}>
      <CardHeader>
        <CardTitle tag='h4'>Thay đổi mật khẩu</CardTitle>
      </CardHeader>
      <CardBody style={{ width: "100%" }}>
        <Row style={{ justifyContent: "center" }}>
          <Col md="6">
            <FormGroup>
              <InputPasswordToggle className='mb-2' label='Mật khẩu cũ' htmlFor='basic-default-password' />
            </FormGroup>
            <FormGroup>
              <InputPasswordToggle className='mb-2' label='Mật khẩu mới' htmlFor='basic-default-password' />
            </FormGroup>
            <FormGroup>
              <InputPasswordToggle className='mb-2' label='Xác nhận lại mật khẩu mới' htmlFor='basic-default-password' />
            </FormGroup>
            <FormGroup className="d-flex mt-2 mb-0 justify-content-end">
              <Button.Ripple color="primary">Lưu</Button.Ripple>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProfileChangePassword;
