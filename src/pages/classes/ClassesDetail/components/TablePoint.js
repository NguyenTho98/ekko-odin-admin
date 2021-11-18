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

const TablePoint = () => {
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Tên học viên</th>
          <th style={{textAlign:"center"}}>Attendance</th>
          <th>Participate</th>
          <th>Comment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nguyễn Xuân Thọ</td>
          <td style={{textAlign: "center"}}>
            <CustomInput
              type="checkbox"
              className="custom-control-Primary"
              id="Primary"
              defaultChecked
              inline
            />
          </td>
          <td>10</td>
          <td>
            nghỉ học k phép
          </td>
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
  );
};

export default TablePoint;
