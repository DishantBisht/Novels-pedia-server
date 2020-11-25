const express = require('express');
const bodyParser = require('body-parser');
const Feedbacks = require('../models/feedback');
var authenticate = require('../authenticate');

const feedbackRouter = express.Router();
feedbackRouter.use(bodyParser.json());

feedbackRouter.route('/')
.get(authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
  Feedbacks.find({})
  .then(() => {
    res.StatusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json(feedbacks);
  },(err) => next(err))
  .catch((err) => next(err) )
})
.post(authenticate.verifyUser, (req, res, next) => {
    Feedbacks.create(req.body)
    .then((feedback) => {
        console.log('Feedback Added ', feedback);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(feedback);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = feedbackRouter;