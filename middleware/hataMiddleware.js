const express = require("express");

const errorCatcher = (error, req, res , next) => {
  console.log(error);
  res.json({
    errorCode: error.statusCode,
    message: error.message,
  });
};
module.exports = errorCatcher;
