CREATE DATABASE students_app;

\c students_app;

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INTEGER
);
