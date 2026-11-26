const sendErrorResponse = (res, err) => {
  const { statusCode, message } = err;
  return res
    .status(statusCode || 500)
    .json({ error: message || "Internal Server Error", success: false });
};

const sendSuccessResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    data,
    message: "Request successful",
    success: true,
  });
};

module.exports = {
  sendErrorResponse,
  sendSuccessResponse,
};
