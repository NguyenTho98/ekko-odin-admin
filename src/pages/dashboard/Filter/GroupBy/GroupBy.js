import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
      className="position-relative report-filter-group-by"
      onClick={handleClick}
      onMouseDown={() => setCurrentShow("groupby")}
    >
      <div
        className="d-flex align-items-center report-group-by"
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
            d="M16.6972 8.93412L13.0156 7.23492V2.36635C13.0139 2.26421 12.983 2.16471 12.9265 2.07971C12.87 1.99471 12.7903 1.9278 12.6969 1.88696L8.71249 0.0492587C8.64256 0.0168082 8.56643 0 8.48937 0C8.41231 0 8.33618 0.0168082 8.26624 0.0492587L4.28187 1.88696C4.18966 1.92975 4.11162 1.99815 4.057 2.08407C4.00239 2.16998 3.9735 2.2698 3.97375 2.37168V7.24025L0.308126 8.93412C0.215912 8.97691 0.137871 9.04532 0.0832576 9.13124C0.0286444 9.21715 -0.000249807 9.31697 1.62708e-06 9.41885V14.6283C-0.000249807 14.7302 0.0286444 14.83 0.0832576 14.9159C0.137871 15.0018 0.215912 15.0703 0.308126 15.113L4.2925 16.9507C4.36243 16.9832 4.43857 17 4.51562 17C4.59268 17 4.66882 16.9832 4.73875 16.9507L8.5 15.2142L12.2612 16.9507C12.3312 16.9832 12.4073 17 12.4844 17C12.5614 17 12.6376 16.9832 12.7075 16.9507L16.6919 15.113C16.7841 15.0703 16.8621 15.0018 16.9167 14.9159C16.9713 14.83 17.0002 14.7302 17 14.6283V9.41885C17.0007 9.31754 16.9726 9.21813 16.919 9.13228C16.8653 9.04642 16.7884 8.97768 16.6972 8.93412ZM15.2044 9.41885L12.4897 10.66L9.77499 9.41885L12.4897 8.16708L15.2044 9.41885ZM8.5 1.11459L11.2147 2.36635L8.5 3.61812L5.79062 2.36635L8.5 1.11459ZM4.51562 8.16176L7.23031 9.41352L4.51562 10.66L1.80094 9.41885L4.51562 8.16176ZM7.96875 14.2821L4.51562 15.8801L1.0625 14.2821V10.2498L4.2925 11.7253C4.36099 11.7562 4.43522 11.7721 4.51031 11.7721C4.5854 11.7721 4.65964 11.7562 4.72812 11.7253L7.95812 10.2338L7.96875 14.2821ZM5.04687 7.23492V3.20264L8.27687 4.6941C8.3468 4.72655 8.42294 4.74336 8.5 4.74336C8.57705 4.74336 8.65319 4.72655 8.72312 4.6941L11.9531 3.20264V7.24025L8.5 8.83824L5.04687 7.23492ZM15.9428 14.2874L12.4897 15.8854L9.03125 14.2874V10.2445L12.2666 11.7253C12.3343 11.7554 12.4076 11.7709 12.4817 11.7709C12.5558 11.7709 12.6291 11.7554 12.6969 11.7253L15.9269 10.2338L15.9428 14.2874Z"
            fill="#939597"
          />
        </svg>
        <div className="content">
          Gộp theo:
          <span>&nbsp;{arr[convertToIndex()]}</span>
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
          {arr.map((item, index) => {
            return (
              <div
                className="d-flex align-items-center justify-content-between group-by-item"
                key={index}
                onClick={() => handleSelect(index)}
              >
                <span>{item}</span>
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
