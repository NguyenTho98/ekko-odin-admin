import React, { useState } from "react";
import FilterByDate from "./FilterByDate/FilterByDate";
import GroupBy from "./GroupBy/GroupBy";
import FilterCenter from "./FilterCenter/FilterCenter";
import { useHistory } from "react-router-dom";

function Filter() {
  const [currentShow, setCurrentShow] = useState("");
  const history = useHistory();
  const search = history.location.search;
  const searchParams = new URLSearchParams(search);
  const type = searchParams.get("type");

  return (
    <div className="d-flex flex-wrap align-items-center">
      <GroupBy currentShow={currentShow} setCurrentShow={setCurrentShow} />
      <FilterByDate />
      <FilterCenter currentShow={currentShow} setCurrentShow={setCurrentShow}/>
    </div>
  );
}

export default React.memo(Filter);
