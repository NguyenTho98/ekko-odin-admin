import React, { useEffect, useState } from "react";
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
import { toastSuccess } from "../../utility/common/toastify";
import { isEmpty } from "../../utility/Utils";
import { actionAddComment, actionEditComment } from "./CommentAction";
import { selectThemeColors } from "@utils";
import { getCenterList } from "../center/CenterAction";
import Select from "react-select";
import { getUserList } from "../users/UsersAction";
import { getClassRoomList } from "../classRoom/ClassRoomAction";
import { getClassesList } from "../classes/ClassesAction";
function AddOrEditCommentModal(props) {
  const { visible, onCancel, item = {} } = props;

  const isAddNew = isEmpty(item);
  const [object, setObject] = useState({
    title: "",
    content: "",
    category: 1,
    state: 1
  });
  const [centerData, setCenterData] = useState([]);
  const [classesData, setClassesData] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    if (item && item.id) {
      setObject(item);
    }
  }, [item]);
  useEffect(() => {
    handleFetchCenterData();
    handleFetchClassesData();
    handleFetchUserData();
  }, [item]);
  const handleFetchClassesData = async (field, value) => {
    try {
      let rqParams = { page: 0, size: 50, query: "" };
      if (field && value) {
        rqParams.query = isNaN(value)
          ? `${field}=="*${value}*"`
          : `${field}==${value}`;
      }

      const { data } = await getClassesList(rqParams);
      setClassesData(data?.results || []);
    } catch (error) {}
  };
  const handleFetchCenterData = async (field, value) => {
    try {
      let rqParams = { page: 0, size: 50, query: "" };
      if (field && value) {
        rqParams.query = isNaN(value)
          ? `${field}=="*${value}*"`
          : `${field}==${value}`;
      }

      const { data } = await getCenterList(rqParams);
      setCenterData(data?.results || []);
    } catch (error) {}
  };
  const handleFetchUserData = async (field, value) => {
    try {
      let rqParams = { page: 0, size: 50, query: "" };
      if (field && value) {
        rqParams.query = isNaN(value)
          ? `${field}=="*${value}*"`
          : `${field}==${value}`;
      }

      const { data } = await getUserList(rqParams);
      setUserData(data?.results || []);
    } catch (error) {}
  };
  const hanldChange = (e) => {
    const { name, value } = e.target;
    setObject({ ...object, [name]: value });
  };
  console.log("object", object);
  const onSummit = async () => {
    if (isAddNew) {
      await actionAddComment(object);
      toastSuccess("Thêm mới bình luận thành công");
    } else {
      await actionEditComment(object, item?.id);
      toastSuccess("Cập nhật bình luận thành công");
    }
    onCancel(true);
  };
  const renderCategory = () => {
    if (object.time === "Bảo lưu") {
      return 2;
    }
    if (object.time === "Hộ trợ học tập") {
      return 3;
    }
    if (object.time === "Rút quyền lợi") {
      return 4;
    }
    if (object.time === "Khiếu nại") {
      return 5;
    }
    if (object.time === "Khác") {
      return 6;
    }
    return 1;
  };

  const renderState = () => {
    if (object.time === "Đang xử lý") {
      return 2;
    }
    if (object.time === "Hoàn thành") {
      return 3;
    }
    if (object.time === "Hủy") {
      return 4;
    }

    return 1;
  };
  return (
    <div>
      <Modal isOpen={visible} toggle={() => onCancel(true)}>
        <ModalHeader toggle={() => onCancel(true)}>
          {!isAddNew ? "Cập nhật" : "Thêm mới"} bình luận
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="nameVertical">Tiêu đề</Label>
                  <Input
                    type="text"
                    name="title"
                    value={object?.title}
                    onChange={hanldChange}
                    placeholder="Tiêu đề"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="EmailVertical">Nội dung</Label>
                  <Input
                    type="textarea"
                    name="content"
                    value={object?.content}
                    onChange={hanldChange}
                    placeholder="Nội dung"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="select-basic">Phân loại</Label>
                  <Input
                    type="select"
                    value={renderCategory()}
                    name="category"
                    id="select-basic"
                    onChange={hanldChange}
                  >
                    <option value="1">Bảo hành</option>
                    <option value="2">Bảo lưu</option>
                    <option value="3">Hộ trợ học tập </option>
                    <option value="4">Khiếu nại</option>
                    <option value="5">Rút quyền lợi</option>
                    <option value="6">Khác</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="select-basic">Phân loại</Label>
                  <Input
                    type="select"
                    value={renderState()}
                    name="state"
                    id="select-basic"
                    onChange={hanldChange}
                  >
                    <option value="1">Chờ xử lý </option>
                    <option value="2">Đang xử lý</option>
                    <option value="3">Hoàn thành </option>
                    <option value="4">Hủy</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label>Người dùng</Label>
                  <Input
                    type="select"
                    name="users"
                    id="select-basic"
                    onChange={hanldChange}
                    value={object?.users}
                  >
                    <option value={0}>Chọn người dùng</option>
                    {userData.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.username}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label>Trung tâm</Label>
                  <Input
                    type="select"
                    name="centre"
                    id="select-basic"
                    onChange={hanldChange}
                    value={object?.center}
                  >
                    <option value={0}>Chọn trung tâm</option>
                    {centerData.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label>Lớp học</Label>
                  <Input
                    type="select"
                    name="classes"
                    id="select-basic"
                    onChange={hanldChange}
                    value={object?.classes}
                  >
                    <option value={0}>Chọn lớp học</option>
                    {classesData.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
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

export default AddOrEditCommentModal;
