DROP DATABASE IF EXISTS planner;
CREATE DATABASE planner; 

\c planner; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR NOT NULL UNIQUE,
    password_digest VARCHAR NOT NULL
)

CREATE TABLE todos (
    id SERIAL PRIMARY KEY 
    user_id REFERENCES users(id),
    text VARCHAR NOT NULL,
)