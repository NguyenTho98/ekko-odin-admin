import api from "../../../../utility/service/api";

export const getFinalTermsList = (id) => {
    return api({
      method: "get",
      url: `/finalterms?classes_id=${id}`,
    });
  };

  export const actionAddFinalTerms = (data = {}) => {
    return api({
      method: "post",
      url: `/finalterms`,
      data,
    });
  };
  
  export const actionEditFinalTerms = (data = {}, id) => {
    return api({
      method: "put",
      url: `/finalterms/${id}`,
      data,
    });
  };
  
  export const actionDeleteFinalTerms = (id) => {
    return api({
      method: "delete",
      url: `/finalterms/${id}`,
    });
  };