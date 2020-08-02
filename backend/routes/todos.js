var express = require('express');
var router = express.Router();
const todoQueries = require('../queries/todos')

router.get('/', function (req, res, next) {
    res.send('todos route');
});

router.get('/all', async (req, res, next) => {
    try {
        let todos = await todoQueries.getAllTodos()
        res.json({
            payload: todos,
            msg: "Retrieved all todos",
            err: false
        })
    } catch (err) {
        res.status(500).json({
            payload: null,
            msg: "Failed retrieving all todos",
            err: true
        })
    }
});

router.get('/:id', async (req, res, next) => {
    let user_id = req.params.id
    try {
        let todos = await todoQueries.getTodoByUserId(user_id)
        res.json({
            payload: todos,
            msg: `Retrieved todos for user with id ${user_id}`,
            err: false
        })
    } catch (err) {
        res.status(500).json({
            payload: null,
            msg: `Failed retrieving todos for user with id ${user_id}`,
            err: true
        })
    }
});

router.post('/add', async (req, res, next) => {
    let todo = req.body 

    try {
        let newTodo = await todoQueries.addNewTodo(todo)
        res.json({
            payload: newTodo,
            msg: "Added new todo",
            err: false
        })
    } catch (err) {
        res.status(500).json({
            payload: null,
            msg: "Failed to add new todo",
            err: true 
        })
    }
})


module.exports = router;