import React, { useState, useEffect } from 'react';
import {
  Table,
} from "reactstrap";
import { useParams, useHistory } from "react-router-dom";

import { getAttendantList } from "../../../attendant/AttendantAction";

const TablePoint = (props) => {
  const { id } = useParams();
  const [attendants, setAttendants] = useState([])
  useEffect(() => {
    if (id) {
      getAttendantList(id).then((res) => {
        // setAttendants(res?.data?.results);
      });
    }
  }, []);
  console.log("res,", attendants);
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Tên học viên</th>
          <th style={{ textAlign: "center" }}>Điểm danh</th>
          <th>Điểm trên lớp</th>
          <th>Điểm bài tập</th>
          <th>Lý do</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* {attendants.length > 0 &&
          attendants.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item?.users?.full_name}</td>
                <td style={{ textAlign: "center" }}>
                  <CustomInput
                    type="checkbox"
                    className="custom-control-Primary"
                    id="Primary"
                    checked={item?.absent}
                    inline
                  />
                </td>
                <td>{item?.score}</td>
                <td>{item?.homework}</td>
                <td>{item?.reason}</td>
                <td>
                  <Edit
                    style={{ cursor: "pointer" }}
                    size={17}
                    className="mx-1"
                    id={`pw-tooltip-1`}
                  />
                  <UncontrolledTooltip placement="top" target={`pw-tooltip-1`}>
                    Edit
                  </UncontrolledTooltip>
                </td>
              </tr>
            );
          })} */}
      </tbody>
    </Table>
  );
};

export default TablePoint;
