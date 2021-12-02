import React from "react";
import { Row, Card, CardBody, Col, CardTitle } from "reactstrap";
import "./Overview.scss";
const Overview = () => {
  return (
    <Row className="report-overview-wrapper match-height">
      <Col md="12">
        <CardTitle tag="h4" style={{ margin: '5px 0px 15px 0px'}}>Tổng quan trung tâm</CardTitle>
      </Col>
      <Col xs="12" sm="6" md="4">
        <Card>
          <CardBody>
            <div className="d-flex item-overview align-items-center">
              <div className="icon">
                <Icons1 />
              </div>
              <div className="content-overview">
                <div className="title">Doanh thu dự kiến</div>
                <div className="sub-title">100,000,000</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" sm="6" md="4">
        <Card>
          <CardBody>
            <div className="d-flex item-overview align-items-center">
              <div className="icon">
                <Icons2 />
              </div>
              <div className="content-overview">
                <div className="title">Tổng số học viên mới</div>
                <div className="sub-title">100</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" sm="6" md="4">
        <Card>
          <CardBody>
            <div className="d-flex item-overview align-items-center">
              <div className="icon">
                <Icons3 />
              </div>
              <div className="content-overview">
                <div className="title">Tổng số học viên</div>
                <div className="sub-title">100,000</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" sm="6" md="4">
        <Card>
          <CardBody>
            <div className="d-flex item-overview align-items-center">
              <div className="icon">
                <Icons4 />
              </div>
              <div className="content-overview">
                <div className="title">Tổng số lớp đang dạy</div>
                <div className="sub-title">10</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" sm="6" md="4">
        <Card>
          <CardBody>
            <div className="d-flex item-overview align-items-center">
              <div className="icon">
                <Icons5 />
              </div>
              <div className="content-overview">
                <div className="title">Tổng số lớp đang mở</div>
                <div className="sub-title">100</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" sm="6" md="4">
        <Card>
          <CardBody>
            <div className="d-flex item-overview align-items-center">
              <div className="icon">
                <Icons6 />
              </div>
              <div className="content-overview">
                <div className="title">Tổng số lớp đang mở</div>
                <div className="sub-title">10</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Overview;

const Icons1 = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#E5EEFB" />
      <path
        d="M25 13.0832V36.9165"
        stroke="#2673DD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.4167 17.4168H22.2917C21.2861 17.4168 20.3216 17.8163 19.6106 18.5274C18.8995 19.2385 18.5 20.2029 18.5 21.2085C18.5 22.2141 18.8995 23.1785 19.6106 23.8896C20.3216 24.6007 21.2861 25.0002 22.2917 25.0002H27.7083C28.7139 25.0002 29.6784 25.3996 30.3894 26.1107C31.1005 26.8218 31.5 27.7862 31.5 28.7918C31.5 29.7974 31.1005 30.7619 30.3894 31.4729C29.6784 32.184 28.7139 32.5835 27.7083 32.5835H18.5"
        stroke="#2673DD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Icons2 = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#E3F5F3" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.5 19.3333C27.5 22.2789 25.0823 24.6667 22.1 24.6667C19.1177 24.6667 16.7 22.2789 16.7 19.3333C16.7 16.3878 19.1177 14 22.1 14C25.0823 14 27.5 16.3878 27.5 19.3333ZM24.8 19.3333C24.8 20.8061 23.5912 22 22.1 22C20.6088 22 19.4 20.8061 19.4 19.3333C19.4 17.8606 20.6088 16.6667 22.1 16.6667C23.5912 16.6667 24.8 17.8606 24.8 19.3333Z"
        fill="#1BAF9D"
      />
      <path
        d="M34.25 19.3333H36.95V23.3333H41V26H36.95V30H34.25V26H30.2V23.3333H34.25V19.3333Z"
        fill="#1BAF9D"
      />
      <path
        d="M27.5 34H30.2C30.2 29.5817 26.5735 26 22.1 26C17.6265 26 14 29.5817 14 34H16.7C16.7 31.0545 19.1177 28.6667 22.1 28.6667C25.0823 28.6667 27.5 31.0545 27.5 34Z"
        fill="#1BAF9D"
      />
    </svg>
  );
};

const Icons3 = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#FFF7E0" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.1641 19.5333C28.1641 22.037 26.1648 24.0667 23.6985 24.0667C21.2322 24.0667 19.2328 22.037 19.2328 19.5333C19.2328 17.0296 21.2322 15 23.6985 15C26.1648 15 28.1641 17.0296 28.1641 19.5333ZM25.9313 19.5333C25.9313 20.7852 24.9316 21.8 23.6985 21.8C22.4653 21.8 21.4656 20.7852 21.4656 19.5333C21.4656 18.2815 22.4653 17.2667 23.6985 17.2667C24.9316 17.2667 25.9313 18.2815 25.9313 19.5333Z"
        fill="#FFBF00"
      />
      <path
        d="M32.6231 24.7285L37.4236 19.8643L39 21.4691L32.6231 27.9313L29.6021 24.8668L31.1807 23.2643L32.6231 24.7285Z"
        fill="#FFBF00"
      />
      <path
        d="M28.1641 32H30.3969C30.3969 28.2445 27.3979 25.2 23.6985 25.2C19.999 25.2 17 28.2445 17 32H19.2328C19.2328 29.4963 21.2322 27.4667 23.6985 27.4667C26.1648 27.4667 28.1641 29.4963 28.1641 32Z"
        fill="#FFBF00"
      />
    </svg>
  );
};
const Icons4 = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#E8F4FF" />
      <path
        d="M36.5834 31.9583C36.5834 32.5993 36.3287 33.214 35.8755 33.6672C35.4223 34.1204 34.8076 34.375 34.1667 34.375H14.8334C14.1924 34.375 13.5777 34.1204 13.1245 33.6672C12.6713 33.214 12.4167 32.5993 12.4167 31.9583V15.0417C12.4167 14.4007 12.6713 13.786 13.1245 13.3328C13.5777 12.8796 14.1924 12.625 14.8334 12.625H20.875L23.2917 16.25H34.1667C34.8076 16.25 35.4223 16.5046 35.8755 16.9578C36.3287 17.411 36.5834 18.0257 36.5834 18.6667V31.9583Z"
        stroke="#0084FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g clip-path="url(#clip0_1_88)">
        <path
          d="M22 21.75H30.125"
          stroke="#0084FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 25.5H30.125"
          stroke="#0084FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 29.25H30.125"
          stroke="#0084FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="19.5" cy="21.75" r="1.25" fill="#0084FF" />
        <circle cx="19.5" cy="25.5" r="1.25" fill="#0084FF" />
        <circle cx="19.5" cy="29.25" r="1.25" fill="#0084FF" />
      </g>
      <defs>
        <clipPath id="clip0_1_88">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(17 18)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const Icons5 = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#E6FFF5" />
      <path
        d="M37.5833 32.9583C37.5833 33.5993 37.3287 34.214 36.8755 34.6672C36.4223 35.1204 35.8076 35.375 35.1667 35.375H15.8333C15.1924 35.375 14.5777 35.1204 14.1245 34.6672C13.6713 34.214 13.4167 33.5993 13.4167 32.9583V16.0417C13.4167 15.4007 13.6713 14.786 14.1245 14.3328C14.5777 13.8796 15.1924 13.625 15.8333 13.625H21.875L24.2917 17.25H35.1667C35.8076 17.25 36.4223 17.5046 36.8755 17.9578C37.3287 18.411 37.5833 19.0257 37.5833 19.6667V32.9583Z"
        stroke="#19D38B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26 20.75V31.25"
        stroke="#19D38B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.75 26H31.25"
        stroke="#19D38B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const Icons6 = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#FFECEE" />
      <path
        d="M36.5835 31.9583C36.5835 32.5993 36.3289 33.214 35.8757 33.6672C35.4225 34.1204 34.8078 34.375 34.1668 34.375H14.8335C14.1926 34.375 13.5779 34.1204 13.1246 33.6672C12.6714 33.214 12.4168 32.5993 12.4168 31.9583V15.0417C12.4168 14.4007 12.6714 13.786 13.1246 13.3328C13.5779 12.8796 14.1926 12.625 14.8335 12.625H20.8752L23.2918 16.25H34.1668C34.8078 16.25 35.4225 16.5046 35.8757 16.9578C36.3289 17.411 36.5835 18.0257 36.5835 18.6667V31.9583Z"
        stroke="#FF596D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.9126 22.0546L21.6894 28.7792"
        stroke="#FF596D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.9388 21.8049L28.6634 29.0281"
        stroke="#FF596D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
