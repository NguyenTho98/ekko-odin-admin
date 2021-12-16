import React, { useEffect, useState } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import DatetimeRangePicker from "./DatetimeRangePicker";
import "./styles.scss";

export const getNewParams = (search, changeParam, changeValue) => {
  const urlSearchParams = new URLSearchParams(search);
  urlSearchParams.set(changeParam, changeValue);
  return urlSearchParams.toString();
};
export const clockIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.7">
        <path
          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
          stroke="#65676B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 4.2002V9.0002L12.2 10.6002"
          stroke="#65676B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export const dropdownIcon = () => {
  return (
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
  );
};
const convertDateToMoment = (day) => {
  return moment(day, "DD/MM/YYYY");
};

const convertUnixToDate = (unix) => {
  return moment.unix(unix).format("DD/MM/YYYY");
};

const ranges = {
  "Hôm nay": [moment(), moment()],
  "Hôm qua": [moment().subtract(1, "days"), moment().subtract(1, "days")],
  "7 ngày trước": [moment().subtract(6, "days"), moment()],
  "30 ngày trước": [moment().subtract(29, "days"), moment()],
  "90 ngày trước": [moment().subtract(89, "days"), moment()],
};

const locale = {
  applyLabel: "Áp dụng",
  cancelLabel: "Hủy",
  format: "DD/MM/YYYY",
  customRangeLabel: "Tùy chọn thời gian",
  daysOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  monthNames: [
    "tháng 1",
    "tháng 2",
    "tháng 3",
    "tháng 4",
    "tháng 5",
    "tháng 6",
    "tháng 7",
    "tháng 8",
    "tháng 9",
    "tháng 10",
    "tháng 11",
    "tháng 12",
  ],
  separator: " - ",
};

function FilterByDate() {
  const history = useHistory();
  const { search } = history.location;
  const searchParams = new URLSearchParams(search);
  const startTime = searchParams.get("s");
  const endTime = searchParams.get("e");
  const s = convertUnixToDate(
    startTime ? startTime : moment().subtract(6, "days").unix()
  );
  const e = convertUnixToDate(endTime ? endTime : moment().unix());
  const [startDate, setStartDate] = useState(
    startTime ? convertDateToMoment(s) : moment().subtract(6, "days")
  );
  const [endDate, setEndDate] = useState(
    endTime ? convertDateToMoment(e) : moment()
  );

  const onApply = (event, picker) => {
    // setStartDate(picker.startDate);
    // setEndDate(picker.endDate);
    const newParams = getNewParams(
      history.location.search,
      "s",
      picker.startDate.unix()
    );
    const lastParams = getNewParams(
      `?${newParams}`,
      "e",
      picker.endDate.unix()
    );
    history.push(`${history.location.pathname}?${lastParams}`);
  };
  useEffect(() => {
    const startTime = searchParams.get("s");
    const endTime = searchParams.get("e");
    const s = convertUnixToDate(
      startTime ? startTime : moment().subtract(6, "days").unix()
    );
    const e = convertUnixToDate(endTime ? endTime : moment().unix());
    setStartDate(
      startTime ? convertDateToMoment(s) : moment().subtract(6, "days")
    );
    setEndDate(endTime ? convertDateToMoment(e) : moment());
  }, [search]);

  return (
    <div className="report-filter-by-date">
      <DatetimeRangePicker
        id="datetimeRangePicker"
        opens="center"
        drops="down"
        startDate={startDate}
        endDate={endDate}
        onApply={onApply}
        autoUpdateInput
        onCancel={() => {}}
        ranges={ranges}
        locale={locale}
        alwaysShowCalendars
        className="date-picker-wrapper"
        disabled
        utc
        minDate={moment().subtract(1, "year")}
      >
        <div className="d-flex align-items-center filter-date-content">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.7">
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="#65676B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 4.2002V9.0002L12.2 10.6002"
                stroke="#65676B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <div className="content">
            {s} - {e}
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
      </DatetimeRangePicker>
    </div>
  );
}

export default FilterByDate;
