/*
To run this script, you will need to login to your MySQL database server.
This script will create a login (username/pwd) and a database called "contacts" 
with a single table called "contact", populated with 100 rows of fake data.

If you have already run this script in the past and have your database already set up, 
there's no need to run it again.

Open your terminal/command window, and navigate to the mysql/bin folder, to 
run the mysql.exe with the params " -u root -p" (password is likely "mysql" or "root"):

  C:\Program Files\Ampps\mysql\bin> mysql -u root -p

then, run the source file (adjusting the path as necessary):

  mysql>source C:\Users\XXXX\Downloads\store.sql

and you can then do something like:

  mysql> SELECT * FROM customer LIMIT 10;

and see 10 rows of data returned.
*/


/*create database if it doesn't already exist*/
CREATE DATABASE IF NOT EXISTS `payroll`;

USE USER 'payroll_admin'@'localhost' IDENTIFIED BY 'payroll_pass';

GRANT ALL PRIVILEGES ON `payroll`.* TO 'payroll_admin'@'localhost';

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `role` varchar(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`)
);

CREATE TABLE `Employee` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `hire_date` date NOT NULL,
    `job_title` varchar(255) NOT NULL,
    `hours` int(11) NOT NULL,
    `city` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `login` (`id`,`username`, `password`, `role`) VALUES
(1, 'admin', 'admin', 'admin'),);
(2, 'user', 'user');
