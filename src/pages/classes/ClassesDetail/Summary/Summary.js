import AvatarGroup from "@components/avatar-group";
import react from "@src/assets/images/icons/react.svg";
import vuejs from "@src/assets/images/icons/vuejs.svg";
import angular from "@src/assets/images/icons/angular.svg";
import bootstrap from "@src/assets/images/icons/bootstrap.svg";
import avatar1 from "@src/assets/images/portrait/small/avatar-s-5.jpg";
import avatar2 from "@src/assets/images/portrait/small/avatar-s-6.jpg";
import avatar3 from "@src/assets/images/portrait/small/avatar-s-7.jpg";
import { MoreVertical, Edit, Trash } from "react-feather";
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledTooltip,
} from "reactstrap";
import CustomInput from "reactstrap/lib/CustomInput";
import React from "react";
import "./Summary.scss";
const Summary = () => {
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
            <tr>
              <td>1</td>
              <td>Nguyễn Xuân Thọ</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
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
            <tr>
              <td>1</td>
              <td>Nguyễn Xuân Thọ</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
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
           
            <tr>
              <td>1</td>
              <td>Nguyễn Xuân Thọ</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
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
           
            <tr>
              <td>1</td>
              <td>Nguyễn Xuân Thọ</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
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
           
            <tr>
              <td>1</td>
              <td>Nguyễn Xuân Thọ</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
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
           
            <tr>
              <td>1</td>
              <td>Nguyễn Xuân Thọ</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
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
           
           
          </tbody>
        </Table>
        <div className="title">FINALS (12 lessons)</div>{" "}
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
            <tr>
              <td>1</td>
              <td>Nguyễn Xuân Thọ</td>
              <td style={{ textAlign: "center" }}>
                <CustomInput
                  type="checkbox"
                  className="custom-control-Primary"
                  id="Primary"
                  defaultChecked
                  inline
                />
              </td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
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
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};

export default Summary;
