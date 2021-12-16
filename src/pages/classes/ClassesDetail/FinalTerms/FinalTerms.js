import React, { useState, useEffect } from "react";
import { Edit } from "react-feather";
import { useParams } from "react-router-dom";
import { Table, UncontrolledTooltip } from "reactstrap";
import CustomInput from "reactstrap/lib/CustomInput";
import EditFinalTermsModal from "./EditFinalTermsModal";
import "./FinalTerms.scss";
import { getFinalTermsList } from "./FinalTermsAction";
const FinalTerms = () => {
  const [finalTerms, setFinalTerms] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const { id } = useParams();
  const [visible, setVisible] = useState(false);
  console.log("finalTerms", finalTerms);
  useEffect(() => {
    if (id) {
      getFinalTermsList(id).then((res) => {
        setFinalTerms(res.data.results);
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
        <div className="title">FINAL-TERMS (13 lessons)</div>
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
            {finalTerms.length > 0 &&
              finalTerms.map((item, index) => {
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
                    <td>  {item.finaltern}</td>
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
      </div>
      {visible && (
        <EditFinalTermsModal
          visible={visible}
          onCancel={() => {
            setVisible(!visible);
            setSelectedItem({});
            getFinalTermsList(id).then((res) => {
                setFinalTerms(res.data.results);
              });
          }}
          item={selectedItem}
        />
      )}
    </React.Fragment>
  );
};

export default FinalTerms;
