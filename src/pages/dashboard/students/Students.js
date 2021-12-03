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
import "./Students.scss";
const Students = () => {
  return (
    <Row className="report-students-wrapper match-height">
      <Col xl="12" md="12" xs="12">
        <Card className="card-01">
          <CardHeader className="card-01-header border-bottom">
            <CardTitle tag="h4">Tổng quan tình trạng học viên</CardTitle>
          </CardHeader>
          <CardBody className="card-01-body">
            <Row>
              <Col md="3">
                <div className="d-flex item align-items-center">
                  <div className="icon">
                    <Icons1 />
                  </div>
                  <div className="item-content">
                    <div className="title">Tổng số học viên mới</div>
                    <div className="sub-title">10</div>
                  </div>
                </div>
              </Col>
              <Col md="3" className="border-left border-right">
                <div className="d-flex item align-items-center">
                  <div className="icon">
                    <Icons2 />
                  </div>
                  <div className="item-content">
                    <div className="title">Tổng số học viên</div>
                    <div className="sub-title">10</div>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="d-flex item align-items-center border-right">
                  <div className="icon">
                    <Icons3 />
                  </div>
                  <div className="item-content">
                    <div className="title">Tỷ lệ chuyên cần</div>
                    <div className="sub-title">10</div>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="d-flex item align-items-center">
                  <div className="icon">
                    <Icons4 />
                  </div>
                  <div className="item-content">
                    <div className="title">Tổng lệ tốt nghiệp</div>
                    <div className="sub-title">10</div>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card className="card-02">
          <CardHeader className="card-02-header">
            <CardTitle tag="h4">Thống kê hợp đồng của học viên</CardTitle>
          </CardHeader>
          <CardBody className="card-02-body">
            <Table striped responsive>
              <thead>
                <tr>
                  <th style={{ borderBottom: "0px solid " }}>Mã hợp đồng</th>
                  <th style={{ borderBottom: "0px solid " }}>Họ và tên</th>
                  <th style={{ borderBottom: "0px solid " }}>Ngày đăng ký</th>
                  <th style={{ borderBottom: "0px solid " }}>Số điện thoại</th>
                  <th style={{ borderBottom: "0px solid " }}>Ngày ngày sinh</th>
                  <th style={{ borderBottom: "0px solid " }}>Công nợ</th>
                  <th style={{ borderBottom: "0px solid " }}>Lớp đang học</th>
                  <th style={{ borderBottom: "0px solid " }}>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TĐN-E-2107-003</td>
                  <td>Nguyễn Thị Phương Thảo </td>
                  <td>20/11/2021</td>
                  <td>919285387</td>
                  <td>20/11/2021</td>
                  <td>Đã hoàn thành</td>
                  <td>TĐN-IE129</td>
                  <td>
                    {" "}
                    <Badge color="light-primary" pill>
                      Nhắc nhở
                    </Badge>
                  </td>
                </tr>
                <tr>
                  <td>TĐN-E-2107-003</td>
                  <td>Nguyễn Thị Phương Thảo </td>
                  <td>20/11/2021</td>
                  <td>919285387</td>
                  <td>20/11/2021</td>
                  <td>27,804,000</td>
                  <td>TĐN-IE129</td>
                  <td>
                    {" "}
                    <Badge color="light-success" pill>
                      Bảo lưu
                    </Badge>
                  </td>
                </tr>
                <tr>
                  <td>TĐN-E-2107-003</td>
                  <td>Nguyễn Thị Phương Thảo </td>
                  <td>20/11/2021</td>
                  <td>919285387</td>
                  <td>20/11/2021</td>
                  <td>27,804,000</td>
                  <td>TĐN-IE129</td>
                  <td>
                    <Badge color="light-danger" pill>
                      Thanh lý hợp đồng
                    </Badge>
                  </td>
                </tr>
                <tr>
                  <td>TĐN-E-2107-003</td>
                  <td>Nguyễn Thị Phương Thảo </td>
                  <td>20/11/2021</td>
                  <td>919285387</td>
                  <td>20/11/2021</td>
                  <td>27,804,000</td>
                  <td>TĐN-IE129</td>
                  <td>
                    <Badge color="light-warning" pill>
                      Mất cam kết
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Students;

const Icons1 = () => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.5 23.9333C33.5 27.7625 30.366 30.8667 26.5 30.8667C22.634 30.8667 19.5 27.7625 19.5 23.9333C19.5 20.1042 22.634 17 26.5 17C30.366 17 33.5 20.1042 33.5 23.9333ZM30 23.9333C30 25.8479 28.433 27.4 26.5 27.4C24.567 27.4 23 25.8479 23 23.9333C23 22.0187 24.567 20.4667 26.5 20.4667C28.433 20.4667 30 22.0187 30 23.9333Z"
        fill="white"
      />
      <path
        d="M42.25 23.9333H45.75V29.1333H51V32.6H45.75V37.8H42.25V32.6H37V29.1333H42.25V23.9333Z"
        fill="white"
      />
      <path
        d="M33.5 43H37C37 37.2562 32.299 32.6 26.5 32.6C20.701 32.6 16 37.2562 16 43H19.5C19.5 39.1708 22.634 36.0667 26.5 36.0667C30.366 36.0667 33.5 39.1708 33.5 43Z"
        fill="white"
      />
    </svg>
  );
};
const Icons2 = () => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.2238 25.1333C31.2238 28.5207 28.4974 31.2667 25.1343 31.2667C21.7711 31.2667 19.0448 28.5207 19.0448 25.1333C19.0448 21.746 21.7711 19 25.1343 19C28.4974 19 31.2238 21.746 31.2238 25.1333ZM28.179 25.1333C28.179 26.827 26.8158 28.2 25.1343 28.2C23.4527 28.2 22.0895 26.827 22.0895 25.1333C22.0895 23.4397 23.4527 22.0667 25.1343 22.0667C26.8158 22.0667 28.179 23.4397 28.179 25.1333Z"
        fill="white"
      />
      <path
        d="M37.3042 32.1621L43.8504 25.5811L46 27.7523L37.3042 36.4953L33.1846 32.3492L35.3373 30.1811L37.3042 32.1621Z"
        fill="white"
      />
      <path
        d="M31.2238 42H34.2685C34.2685 36.919 30.179 32.8 25.1343 32.8C20.0896 32.8 16 36.919 16 42H19.0448C19.0448 38.6127 21.7711 35.8667 25.1343 35.8667C28.4974 35.8667 31.2238 38.6127 31.2238 42Z"
        fill="white"
      />
    </svg>
  );
};
const Icons3 = () => {
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

const Icons4 = () => {
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
        d="M42.5834 29.3881V30.4998C42.5819 33.1055 41.7382 35.6409 40.178 37.7278C38.6179 39.8148 36.4249 41.3415 33.9261 42.0803C31.4274 42.8191 28.7568 42.7304 26.3126 41.8274C23.8684 40.9244 21.7815 39.2555 20.3633 37.0696C18.9451 34.8837 18.2715 32.2979 18.4429 29.6978C18.6144 27.0978 19.6217 24.6229 21.3147 22.6421C23.0076 20.6613 25.2955 19.2809 27.8371 18.7066C30.3788 18.1324 33.0379 18.3951 35.418 19.4556"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.5833 20.8335L30.5 32.9289L26.875 29.3039"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
