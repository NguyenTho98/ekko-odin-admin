import api from "../../utility/service/api";

export const actionLogin = (data = {}) => {
  return api({
    method: "post",
    url: "/auth/login",
    data,
  });
};

