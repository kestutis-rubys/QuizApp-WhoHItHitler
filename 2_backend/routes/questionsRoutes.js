const express = require('express');
const router = express.Router();
const Question = require('../models/questionModel');

// GET all questions
router.get('/questions/', (req, res) => {
  Question.find({}).then((data) => res.json(data));
});

// GET questions by number of answers
router.get('/questions/:count', (req, res) => {
  const count = req.params.count;
  Question.find({ answers_count: count }).then((data) => res.json(data));
});

// POST add new question
router.post('/question/', (req, res) => {
  const question = new Question(req.body);
  question.save();
  res.json(question);
});

// PUT update question by id
router.put('/question/:id', (req, res) => {
  const questionId = req.params.id;
  const updatedQuestion = req.body;
  Question.findOne({ _id: questionId }, updatedQuestion).then((data) =>
    res.json(data)
  );
});

// DELETE delete question by id
router.delete('/question/:id', (req, res) => {
  const questionId = req.params.id;
  Question.findOneAndDelete({ _id: questionId }).then((data) =>
    res.json('Question was deleted')
  );
});

module.exports = router;
