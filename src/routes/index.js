const router = require('express').Router();
const userRouter = require('./users');
const bookRouter = require('./books');

const loggerOriginalUrl = require('../middlewares/loggerOriginalUrl');

router.use(loggerOriginalUrl);

router.use('/users', userRouter);
router.use('/books', bookRouter);

module.exports = router;
