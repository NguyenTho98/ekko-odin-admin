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
import MidTerms from '../MidTerms/MidTerms'
import FinalTerms from '../FinalTerms/FinalTerms'
const Summary = () => {
  return (
    <React.Fragment>
      <div className="summary-wrapper">
          <MidTerms ></MidTerms>
          <FinalTerms ></FinalTerms>
      </div>
    </React.Fragment>
  );
};

export default Summary;
