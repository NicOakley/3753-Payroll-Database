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
    `login_id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `role` varchar(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`)
);

CREATE TABLE `employee` (
    `employee_id` int(11) NOT NULL AUTO_INCREMENT,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `hire_date` date NOT NULL,
    `job_title` varchar(255) NOT NULL,
    `salary` int(11) NOT NULL,
    `hours` int(11) NOT NULL,
    `city` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `pay` (
    `pay_id` int(11) NOT NULL AUTO_INCREMENT,
    `amount` int(11) NOT NULL,
    `date` date NOT NULL,
    PRIMARY KEY (`pay_id`),
    FOREIGN KEY (`employee_id`) REFERENCES `employee`(`employee_id`)
);


INSERT INTO `login` (`id`,`username`, `password`, `role`) VALUES
(1, 'admin', 'admin', 'admin'),
(2, 'user', 'user', 'user');

INSERT INTO `employee` (`id`, `first_name`, `last_name`, `email`, `phone`, `hire_date`, `job_title`, `salary`, `hours`, `city`) VALUES
(1, 'John', 'Doe', 'aaa@bbb.ca', '111-111-1111', '2017-01-01', 'Manager', 100000, 40, 'Toronto'),
(2, 'Walter', 'White', 'bbb@ccc.ca', '222-222-2222', '2017-01-01', 'Cook', 50000, 40, 'New Mexico');

INSERT INTO `pay` (`employee_id`,`id`, `amount`, `date`) VALUES
(1, 1, 100, '2017-01-01'),
(1, 2, 200, '2017-01-08'),
(2, 3, 300, '2017-01-01');
