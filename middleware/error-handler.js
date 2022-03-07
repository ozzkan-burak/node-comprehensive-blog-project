const errorHanleMiddleware = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send(err.message);
  } else {
    res.status(500).send('Internal server error');
  }
};

module.exports = errorHanleMiddleware;