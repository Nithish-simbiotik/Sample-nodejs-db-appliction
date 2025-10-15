CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  role VARCHAR(100),
  experience INT
);

INSERT INTO employees (name, role, experience) VALUES
('John Doe', 'Developer', 3),
('Jane Smith', 'Designer', 5),
('Alice Johnson', 'Manager', 7);