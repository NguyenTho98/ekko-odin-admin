import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  UncontrolledTooltip,
  Table,
  Badge,
} from "reactstrap";
import { selectThemeColors } from "@utils";
import Select, { components } from "react-select";
import { getCenterList } from "./../../center/CenterAction";
import { Edit } from "react-feather";
import CustomInput from "reactstrap/lib/CustomInput";
import "./Teachers.scss";
const Teachers = () => {
  
  return (
    <Row className="report-teachers-wrapper match-height">
      <Col xl="12" md="12" xs="12">
        <Card className="card-01">
          <CardHeader className="card-01-header border-bottom">
            <CardTitle tag="h4">Tổng quan tình trạng giảng viên</CardTitle>
          </CardHeader>
          <CardBody className="card-01-body">
            <Row>
              <Col md="4">
                <div className="d-flex item align-items-center">
                  <div className="icon">
                    <IconsLeft />
                  </div>
                  <div className="item-content">
                    <div className="title">Lớp đang dạy</div>
                    <div className="sub-title">10</div>
                  </div>
                </div>
              </Col>
              <Col md="4" className="border-left border-right">
                <div className="d-flex item align-items-center">
                  <div className="icon">
                    <IconsCenter />
                  </div>
                  <div className="item-content">
                    <div className="title">Lớp sắp mở</div>
                    <div className="sub-title">10</div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="d-flex item align-items-center">
                  <div className="icon">
                    <IconsRight />
                  </div>
                  <div className="item-content">
                    <div className="title">Lớp đã kết thúc</div>
                    <div className="sub-title">10</div>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card className="card-02">
          <CardHeader className="card-02-header">
            <CardTitle tag="h4">Thống kê chi tiết tình trạng giảng viên</CardTitle>
          </CardHeader>
          <CardBody className="card-02-body">
            <Table striped responsive>
              <thead>
                <tr>
                  <th style={{ borderBottom: "0px solid " }}>Trung tâm</th>
                  <th style={{ borderBottom: "0px solid " }}>Tên lớp</th>
                  <th style={{ borderBottom: "0px solid " }}>Giáo viên</th>
                  <th style={{ borderBottom: "0px solid " }}>Trạng thái</th>
                  <th style={{ borderBottom: "0px solid " }}>Ngày bắt đầu</th>
                  <th style={{ borderBottom: "0px solid " }}>Ngày kết thúc</th>
                  <th style={{ borderBottom: "0px solid " }}>Số học viên</th>
                  <th style={{ borderBottom: "0px solid " }}>Số buổi đã học</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trần Đại Nghĩ</td>
                  <td>BBST</td>
                  <td>Nguyễn Thị Hương</td>
                  <td>
                    <Badge color="light-primary" pill style={{ fontWeight: 400 }}>
                      Đang dạy
                    </Badge>
                  </td>
                  <td>20/11/2021</td>
                  <td>20/11/2021</td>
                  <td>30</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Trần Đại Nghĩ</td>
                  <td>BBST</td>
                  <td>Nguyễn Thị Hương</td>
                  <td>
                    {" "}
                    <Badge color="light-success" pill style={{ fontWeight: 400 }}>
                      Sắp mở{" "}
                    </Badge>
                  </td>
                  <td>20/11/2021</td>
                  <td>20/11/2021</td>
                  <td>30</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Trần Đại Nghĩ</td>
                  <td>BBST</td>
                  <td>Nguyễn Thị Hương</td>
                  <td>
                    {" "}
                    <Badge color="light-success" pill style={{ fontWeight: 400 }}>
                      Sắp mở{" "}
                    </Badge>
                  </td>
                  <td>20/11/2021</td>
                  <td>20/11/2021</td>
                  <td>30</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Trần Đại Nghĩ</td>
                  <td>BBST</td>
                  <td>Nguyễn Thị Hương</td>
                  <td>
                    <Badge color="light-danger" pill style={{ fontWeight: 400 }}>
                      Kết thúc
                    </Badge>
                  </td>
                  <td>20/11/2021</td>
                  <td>20/11/2021</td>
                  <td>30</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Trần Đại Nghĩ</td>
                  <td>BBST</td>
                  <td>Nguyễn Thị Hương</td>
                  <td>
                    <Badge color="light-danger" pill style={{ fontWeight: 400 }}>
                      Kết thúc
                    </Badge>
                  </td>
                  <td>20/11/2021</td>
                  <td>20/11/2021</td>
                  <td>30</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Trần Đại Nghĩ</td>
                  <td>BBST</td>
                  <td>Nguyễn Thị Hương</td>
                  <td>
                    <Badge color="light-danger" pill style={{ fontWeight: 400 }}>
                      Kết thúc
                    </Badge>
                  </td>
                  <td>20/11/2021</td>
                  <td>20/11/2021</td>
                  <td>30</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Trần Đại Nghĩ</td>
                  <td>BBST</td>
                  <td>Nguyễn Thị Hương</td>
                  <td>
                  <Badge color="light-success" pill style={{ fontWeight: 400 }}>
                      Sắp mở{" "}
                    </Badge>
                  </td>
                  <td>20/11/2021</td>
                  <td>20/11/2021</td>
                  <td>30</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Trần Đại Nghĩ</td>
                  <td>BBST</td>
                  <td>Nguyễn Thị Hương</td>
                  <td>
                  <Badge color="light-success" pill style={{ fontWeight: 400 }}>
                      Sắp mở{" "}
                    </Badge>
                  </td>
                  <td>20/11/2021</td>
                  <td>20/11/2021</td>
                  <td>30</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Trần Đại Nghĩ</td>
                  <td>BBST</td>
                  <td>Nguyễn Thị Hương</td>
                  <td>
                  <Badge color="light-success" pill style={{ fontWeight: 400 }}>
                      Sắp mở{" "}
                    </Badge>
                  </td>
                  <td>20/11/2021</td>
                  <td>20/11/2021</td>
                  <td>30</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Trần Đại Nghĩ</td>
                  <td>BBST</td>
                  <td>Nguyễn Thị Hương</td>
                  <td>
                  <Badge color="light-success" pill style={{ fontWeight: 400 }}>
                      Sắp mở{" "}
                    </Badge>
                  </td>
                  <td>20/11/2021</td>
                  <td>20/11/2021</td>
                  <td>30</td>
                  <td>10</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Teachers;

const IconsLeft = () => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31" cy="31" r="31" fill="#1F96FF" />
      <path
        d="M42.5834 38.9583C42.5834 39.5993 42.3287 40.214 41.8755 40.6672C41.4223 41.1204 40.8076 41.375 40.1667 41.375H20.8334C20.1924 41.375 19.5777 41.1204 19.1245 40.6672C18.6713 40.214 18.4167 39.5993 18.4167 38.9583V22.0417C18.4167 21.4007 18.6713 20.786 19.1245 20.3328C19.5777 19.8796 20.1924 19.625 20.8334 19.625H26.875L29.2917 23.25H40.1667C40.8076 23.25 41.4223 23.5046 41.8755 23.9578C42.3287 24.411 42.5834 25.0257 42.5834 25.6667V38.9583Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g clip-path="url(#clip0_1_39)">
        <path
          d="M28 28.75H36.125"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28 32.5H36.125"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28 36.25H36.125"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="25.5" cy="28.75" r="1.25" fill="white" />
        <circle cx="25.5" cy="32.5" r="1.25" fill="white" />
        <circle cx="25.5" cy="36.25" r="1.25" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_1_39">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(23 25)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const IconsCenter = () => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31" cy="31" r="31" fill="#19D38B" />
      <path
        d="M44.5833 38.9583C44.5833 39.5993 44.3287 40.214 43.8755 40.6672C43.4223 41.1204 42.8076 41.375 42.1667 41.375H22.8333C22.1924 41.375 21.5777 41.1204 21.1245 40.6672C20.6713 40.214 20.4167 39.5993 20.4167 38.9583V22.0417C20.4167 21.4007 20.6713 20.786 21.1245 20.3328C21.5777 19.8796 22.1924 19.625 22.8333 19.625H28.875L31.2917 23.25H42.1667C42.8076 23.25 43.4223 23.5046 43.8755 23.9578C44.3287 24.411 44.5833 25.0257 44.5833 25.6667V38.9583Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33 26.75V37.25"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.75 32H38.25"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const IconsRight = () => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31" cy="31" r="31" fill="#FF596D" />
      <path
        d="M43.5835 38.9583C43.5835 39.5993 43.3289 40.214 42.8757 40.6672C42.4224 41.1204 41.8077 41.375 41.1668 41.375H21.8335C21.1925 41.375 20.5778 41.1204 20.1246 40.6672C19.6714 40.214 19.4168 39.5993 19.4168 38.9583V22.0417C19.4168 21.4007 19.6714 20.786 20.1246 20.3328C20.5778 19.8796 21.1925 19.625 21.8335 19.625H27.8751L30.2918 23.25H41.1668C41.8077 23.25 42.4224 23.5046 42.8757 23.9578C43.3289 24.411 43.5835 25.0257 43.5835 25.6667V38.9583Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.9126 29.0546L28.6894 35.7792"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.9388 28.8049L35.6634 36.0281"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
