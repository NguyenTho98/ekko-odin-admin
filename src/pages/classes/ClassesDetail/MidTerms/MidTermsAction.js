import api from "../../../../utility/service/api";

export const getMidTermsList = (id) => {
    return api({
      method: "get",
      url: `/midterms?classes_id=${id}`,
    });
  };

  export const actionAddMidTerms = (data = {}) => {
    return api({
      method: "post",
      url: `/midterms`,
      data,
    });
  };
  
  export const actionEditMidTerms = (data = {}, id) => {
    return api({
      method: "put",
      url: `/midterms/${id}`,
      data,
    });
  };
  
  export const actionDeleteMidTerms = (id) => {
    return api({
      method: "delete",
      url: `/midterms/${id}`,
    });
  };