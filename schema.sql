DROP DATABASE IF EXISTS movie_list;
CREATE DATABASE movie_list;
USE movie_list;

CREATE TABLE movies (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  TITLE VARCHAR (100)
);