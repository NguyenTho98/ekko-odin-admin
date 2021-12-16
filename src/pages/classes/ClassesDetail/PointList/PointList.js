import { isTerminatorless } from "@babel/types";
import React, { useState, useEffect } from "react";
import { Meh, Plus } from "react-feather";
import { useParams } from "react-router-dom";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
import { getShiftList } from "../../../shift/ShiftAction";
import AddPoint from "../components/AddPoint";
import CancelShiftModal from "../components/CancelShiftModal";
import AttendantModal from "../components/AttendantModal";
import TablePoint from "../components/TablePoint";
import "./PointList.scss";
const PointList = (props) => {
  const { classesDetail } = props;
  const { id } = useParams();
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [pointList, setPointList] = useState([]);
  
  useEffect(() => {
    getShiftList(id).then((res) => {
      setPointList(res?.data?.results);
    });
  }, []);

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

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
        <NavItem className="nav-item-point">
          <NavLink
            active={active === 99}
            onClick={() => {
              toggle(99);
            }}
          >
            <Plus size={18} />
            <span className="align-middle ml-25">Thêm mới</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        {pointList.map((item, key) => (
          <TabPane tabId={key}>
            <div className="content-point-list">
              <Row style={{ marginRight: 0, marginLeft: 0 }}>
                <Col md={12} xs={12}>
                  <div className="item title">Thông tin liên quan</div>
                </Col>
                <Col md={6} xs={12}>
                  <div className="item">Thời gian: {item.session_date}</div>
                  <div className="item ">Khung giờ: {item.time}</div>
                  <div className="item ">Lý do nghỉ: {item.reason_holiday}</div>
                  <div className="item">
                    <sapn>Hành Động:</sapn>
                    <Button.Ripple
                      className="btn-icon btn-icon-delete"
                      outline
                      color="primary"
                      id={`ekko-tooltip-1`}
                      onClick={() => setVisible(true)}
                    >
                      <Meh size={16} />
                    </Button.Ripple>

                    <UncontrolledTooltip
                      placement="top"
                      target={`ekko-tooltip-1`}
                    >
                      Hủy buổi học
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col md={6} xs={12}>
                  {" "}
                  <div className="item">
                    Trạng thái: {item.status_holiday ? "Nghỉ học" : item.status}{" "}
                  </div>
                  <div className="item">Nội dung: {item.content || "---"}</div>
                </Col>
              </Row>
              <TablePoint />
            </div>
          </TabPane>
        ))}
        <TabPane tabId={99} className="tab-panne-list">
          <div className="content-point-list">
            <AddPoint
              classesDetail={classesDetail}
              setPointList={setPointList}
              pointList={pointList}
            ></AddPoint>
          </div>
        </TabPane>
      </TabContent>
      {visible && (
        <CancelShiftModal
          visible={visible}
          onCancel={() => {
            setVisible(!visible);
          }}
        />
      )}
      {!visible1 && (
        <AttendantModal
          visible={!visible1}
          onCancel={() => {
            setVisible1(!visible1);
          }}
        />
      )}
    </div>
  );
};
export default PointList;
