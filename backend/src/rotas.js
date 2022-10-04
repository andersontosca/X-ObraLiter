const router = require('express').Router();

const UserController = require('./controllers/UserController');
const CategoryController = require('./controllers/CategoryController');
const AuthorController = require('./controllers/AuthorController');
const QuizController = require('./controllers/QuizController');
const QuestionController = require('./controllers/QuestionController');
const AnswerControler = require('./controllers/AnswerController');
const LoginController = require('./controllers/LoginController');


//User
router.get('/usuario', UserController.getUsers);
router.get('/usuario/:id', UserController.getUser);
router.get('/ranking', UserController.getUsersR);
router.post('/usuario', UserController.registerUser);
router.delete('/usuario/:id', UserController.deleteUser);
router.put('/usuario/:id', UserController.editUser);

//Category
router.get('/categoria', CategoryController.getCategories);
router.get('/categoria/:id', CategoryController.getCategory);
router.post('/categoria', CategoryController.registerCategory);
router.delete('/categoria/:id', CategoryController.deleteCategory);
router.put('/categoria/:id', CategoryController.editCategory);

//Author 
router.get('/autor', AuthorController.getAuthors);
router.get('/autor/:id', AuthorController.getAuthor);
router.post('/autor', AuthorController.registerAuthor);
router.delete('/autor/:id', AuthorController.deleteAuthor);
router.put('/autor/:id', AuthorController.editAuthor);

//Quiz
router.get('/quiz', QuizController.getQuizzes);
router.get('/quiz/:id', QuizController.getQuiz);
router.post('/quiz', QuizController.registerQuiz);
router.delete('/quiz/:id', QuizController.deleteQuiz );
router.put('/quiz/:id', QuizController.editQuiz);

//Question e answer
router.get('/pergunta', QuestionController.getQuestions);
router.get('/pergunta/:id', QuestionController.getQuestion);
router.post('/pergunta', QuestionController.registerQuestion);
router.delete('/pergunta/:id', QuestionController.deleteQuestion );
router.put('/pergunta/:id', QuestionController.editQuestion);

router.get('/resposta', AnswerControler.getAnswers);
router.get('/resposta/:id', AnswerControler.getAnswer);
router.post('/resposta', AnswerControler.registerAnswer);
router.delete('/resposta/:id', AnswerControler.deleteAnswer);
router.put('/resposta/:id', AnswerControler.editAnswer);

//Login
router.post('/login', LoginController.login);

module.exports = router;