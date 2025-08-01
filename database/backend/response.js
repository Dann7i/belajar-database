const response = (statusCode, data, message, res) => {
  res.status(statusCode).json({
    status: true,
    payload: data,
    message,
    metadata: {
      prev: "",
      next: "",
      current: "",
    },
  });
};

export default response;
