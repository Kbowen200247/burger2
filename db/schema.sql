-- Create the burgers_db database --
 -- CREATE DATABASE burgers_db;

USE vzsgx92uysfj6ob7;

-- Create a burgers table with the required field --
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(150) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP,
PRIMARY KEY(id)
);