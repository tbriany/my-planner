const db = require('../database/db')

const getAllTodos = async () => {
    const getUserQuery = `
    SELECT todo, user_id FROM todos
    `
    const todos = await db.any(getAllTodos)
    return todos;
}

const addNewTodo = async (todo) => {
    const newTodoQuery = `
		INSERT INTO todos(user_id, todo)
			VALUES($/user_id/, $/todo/)
			RETURNING *
	`
    const newTodo = await db.one(newTodoQuery, todo)
    return newTodo;
}

const getTodoByUserId = async (user_id) => {
    const getTodoByUserId = `
    SELECT * FROM todos WHERE user_id = $1
    `
    const todos = await db.oneOrNone(getTodoByUserId, [user_id])
    return todos;
}

module.exports = {
    getAllTodos,
    addNewTodo,
    getTodoByUserId
}