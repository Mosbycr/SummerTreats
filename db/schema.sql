CREATE DATABASE summer_treats_db;
USE summer_treats_db;

CREATE TABLE treats
(
    id int NOT NULL
    AUTO_INCREMENT,
	treat_name varchar
    (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);
