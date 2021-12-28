import React from "react";
import { connect } from "react-redux";
import "./Loading.scss";
import logo from './../../assets/images/logo/logo-primary.png'
const Loading = (props) => {
  return (
    <div className={`loading-wrapper ${true} ? "is-show" : ""}`}>
      1111111111111111
      <div className="loader-container">
        <div className="loader-icon">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({ isLoading: state.system.isLoading}),
  {}
)(Loading);
