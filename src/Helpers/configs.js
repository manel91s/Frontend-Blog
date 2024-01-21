export const getBearerConfigToken = (multipart = false) => {
  const token = localStorage.getItem("token");
  
  return {
    headers: {
      'Content-Type':`${multipart === true ? 'multipart/form-data' : 'application/json'}`,
      Authorization: `Bearer ${token}`,
    },
  };
};
