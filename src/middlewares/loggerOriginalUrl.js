const loggerOriginalUrl = (request, response, next) => {
  console.log(`Request in ${request.originalUrl}`);
  next();
};

module.exports = loggerOriginalUrl;
