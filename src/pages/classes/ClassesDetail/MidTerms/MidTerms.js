
import { Edit } from "react-feather";
import {
  Table,
  UncontrolledTooltip,
} from "reactstrap";
import CustomInput from "reactstrap/lib/CustomInput";
import React, { useState, useEffect } from "react";
import "./MidTerms.scss";
import { useParams } from "react-router-dom";
import { getMidTermsList } from "./MidTermsAction";
import EditMidTermsModal from "./EditMidTermsModal";
const MidTerms = () => {
const [midTerms, setMidTerms] = useState([]);
const [visible, setVisible] = useState(false);
const [selectedItem, setSelectedItem] = useState({});
const { id } = useParams();
console.log("midTerms", midTerms);
useEffect(() => {
    if (id) {
    getMidTermsList(id).then((res) => {
        setMidTerms(res.data.results);
    });
    }
}, []);
const handleEditItem = (items = {}) => {
    setSelectedItem(items);
    setVisible(true);
  };
  return (
    <React.Fragment>
      <div className="summary-wrapper">
        <div className="title">MID-TERMS (13 lessons)</div>
        <Table striped responsive>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên học viên</th>
              <th>Placement</th>
              <th>Attendance</th>
              <th>Participate</th>
              <th>Homework</th>
              <th>Practice Test 1</th>
              <th>Practice Test 2</th>
              <th>Midterm Test</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {midTerms.length > 0 &&
              midTerms.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.users.full_name}</td>
                    <td>  {item.placement}</td>
                    <td>  {item.attendence}</td>
                    <td>  {item.participate}</td>
                    <td>  {item.participate}</td>
                    <td>  {item.pratice1}</td>
                    <td>  {item.pratice2}</td>
                    <td>  {item.midtern}</td>
                    <td>  {item.note || '---'}</td>
                    <td>
                      <Edit
                        style={{ cursor: "pointer" }}
                        size={17}
                        className="mx-1"
                        id={`pw-tooltip-1`}
                        onClick={() => handleEditItem(item)}
                      />
                      <UncontrolledTooltip
                        placement="top"
                        target={`pw-tooltip-1`}
                        
                      >
                        Edit
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        {visible && (
        <EditMidTermsModal
          visible={visible}
          onCancel={() => {
            setVisible(!visible);
            setSelectedItem({});
            getMidTermsList(id).then((res) => {
                setMidTerms(res.data.results);
            });
          }}
          item={selectedItem}
        />
      )}
      </div>
    </React.Fragment>
  );
};

export default MidTerms;
