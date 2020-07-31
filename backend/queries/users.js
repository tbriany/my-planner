const db = require('../database/db')

const getAllUsers = async () => {
    const getUserQuery = `
    SELECT id, username FROM users
    `
    const users = await db.any(getUserQuery)
    return users;
}

const addNewUser = async (user) => {
    const newUserQuery = `
		INSERT INTO users(username, password_digest)
			VALUES($/username/, $/password/)
			RETURNING id, username
	`
    const newUser = await db.one(newUserQuery, user)
    return newUser;
}

const getUserByUsername = async (username) => {
    const getUserByUsernameQuery = `
    SELECT * FROM users WHERE username = $1
    `
    const user = await db.oneOrNone(getUserByUsernameQuery, [username])
    return user;
}

module.exports = {
    getAllUsers,
    addNewUser,
    getUserByUsername
}