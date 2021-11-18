import { isTerminatorless } from "@babel/types";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import { getClassesList } from "../../../shift/ShiftAction";
import TablePoint from "../components/TablePoint";
import "./PointList.scss";
const PointList = () => {
  const { id } = useParams();
  const [active, setActive] = useState(0);
  const [pointList, setPointList] = useState([]);
  useEffect(() => {
    getClassesList(id).then((res) => {
      setPointList(res.data.results);
    });
  }, []);
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  console.log("pointList", pointList);
  return (
    <div className="point-list-wrapper nav-vertical">
      <Nav tabs className="nav-left">
        {pointList.map((item, key) => (
          <NavItem className="nav-item-point">
            <NavLink
              active={active === key}
              onClick={() => {
                toggle(key);
              }}
            >
              Buổi {key + 1} | {item.session_date}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={active}>
        {pointList.map((item, key) => (
          <TabPane tabId={key}>
            <div className="content-point-list">
              <Row style={{ marginRight: 0, marginLeft: 0 }}>
                <Col md={6} xs={12}>
                  <div className="title">Thông tin liên quan</div>
                  <div className="">Thời gian: {item.session_date}</div>
                  <div className="">Khung giờ: {item.time}</div>
                  <div className="">Trạng thái: {item.status}</div>
                  <div className="">Nội dung: {item.content || "---"}</div>
                </Col>
              </Row>
              <TablePoint />
            </div>
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};
export default PointList;
