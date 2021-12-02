import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCenterList } from "../../../center/CenterAction";

import "./styles.scss";

const arr = ["Ngày", "Tuần", "Tháng", "Năm"];
export const getNewParams = (search, changeParam, changeValue) => {
  const urlSearchParams = new URLSearchParams(search);
  urlSearchParams.set(changeParam, changeValue);
  return urlSearchParams.toString();
};
function GroupBy(props) {
  const { setCurrentShow, currentShow } = props;
  const [show, setShow] = useState(false);
  const history = useHistory();
  const { search } = history.location;
  const searchParams = new URLSearchParams(search);
  const group = searchParams.get("group");
  const [centerData, setCenterData] = useState([]);
  const [center, setCenter] = useState();
  useEffect(() => {
    handleFetchCenterData();
  }, []);
  const handleFetchCenterData = async () => {
    try {
      const { data } = await getCenterList();
      setCenterData(data?.results || []);
    } catch (error) {}
  };
  const convertToIndex = () => {
    switch (group) {
      case "day":
        return 0;
      case "week":
        return 1;
      case "month":
        return 2;
      case "year":
        return 3;
      default:
        return 0;
    }
  };

  const convertToType = (index) => {
    switch (index) {
      case 0:
        return "day";
      case 1:
        return "week";
      case 2:
        return "month";
      case 3:
        return "year";
      default:
        return "day";
    }
  };

  useEffect(() => {
    if (currentShow !== "groupby") {
      setShow(false);
    }
  }, [currentShow]);

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, []);

  const onWindowClick = () => {
    setShow(false);
  };

  const handleClick = (e) => {
    setCurrentShow("groupby");
    e.stopPropagation();
  };

  const handleSelect = (index) => {
    const type = convertToType(index);
    const newParams = getNewParams(history.location.search, "group", type);
    setShow(false);
    // pushstate(history, `/home/report?${newParams}`);
  };

  const onClick = () => {
    if (currentShow === "groupby") {
      setShow(!show);
    }
    setCurrentShow("groupby");
  };

  return (
    <div
      className="position-relative report-filter-center"
      onClick={handleClick}
      onMouseDown={() => setCurrentShow("groupby")}
    >
      <div
        className="d-flex align-items-center report-center"
        onClick={onClick}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.875 7.08301C14.875 12.0413 8.5 16.2913 8.5 16.2913C8.5 16.2913 2.125 12.0413 2.125 7.08301C2.125 5.39225 2.79665 3.77075 3.99219 2.5752C5.18774 1.37966 6.80924 0.708008 8.5 0.708008C10.1908 0.708008 11.8123 1.37966 13.0078 2.5752C14.2033 3.77075 14.875 5.39225 14.875 7.08301Z"
            stroke="#7B7B7B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 9.20801C9.6736 9.20801 10.625 8.25661 10.625 7.08301C10.625 5.9094 9.6736 4.95801 8.5 4.95801C7.32639 4.95801 6.375 5.9094 6.375 7.08301C6.375 8.25661 7.32639 9.20801 8.5 9.20801Z"
            stroke="#7B7B7B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="content">
          Tất cả cơ sở học
          {/* <span>&nbsp;{arr[convertToIndex()]}</span> */}
        </div>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1.5L6 6.5L1 1.5"
            stroke="#8B8B8B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {show && currentShow === "groupby" ? (
        <div className="position-absolute select-time-type">
          {centerData.map((item, index) => {
            return (
              <div
                className="d-flex align-items-center justify-content-between center-item"
                key={index}
                onClick={() => handleSelect(index)}
              >
                <span>{item.name}</span>
                {convertToIndex() === index ? (
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.3335 6.66675L5.77794 10.5556L14.1113 1.66675"
                      stroke="#0088FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default GroupBy;
