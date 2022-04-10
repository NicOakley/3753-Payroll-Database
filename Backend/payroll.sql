-- login to MySql database server
--   C:\Program Files\Ampps\mysql\bin> mysql -u root -p in terminal
-- run the mysql.exe with the params " -u root -p" (password = "mysql" / "root"):
-- run the source: mysql> source C:\"PATH TO SQL FILE"

CREATE DATABASE IF NOT EXISTS `payroll`;

USE `payroll`;

CREATE USER IF NOT EXISTS 'payroll_admin'@'localhost' IDENTIFIED BY 'passw0rd';

GRANT ALL ON * . * TO 'payroll_admin'@'localhost';

DROP TABLE IF EXISTS `employee`;
DROP TABLE IF EXISTS `pay`;
DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `role` varchar(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`)
);

CREATE TABLE `employee` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `hire_date` date NOT NULL,
    `job_title` varchar(255) NOT NULL,
    `salary` int(11) NOT NULL,
    `hours` int(11) NOT NULL,
    `city` varchar(255) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id`) REFERENCES login (`id`)
);

CREATE TABLE `pay` (
    `id` int(11) NOT NULL,
    `pay_id` int(11) NOT NULL AUTO_INCREMENT,
    `amount` int(11) NOT NULL,
    `date` date NOT NULL,
    PRIMARY KEY (`pay_id`),
    FOREIGN KEY (`id`) REFERENCES login (`id`)
);


INSERT INTO `login` (`id`,`username`, `password`, `role`) VALUES
(1, 'admin', 'admin', 'admin'),
(2, 'user', 'user', 'user');

INSERT INTO `employee` (`id`, `first_name`, `last_name`, `email`, `phone`, `hire_date`, `job_title`, `salary`, `hours`, `city`) VALUES
(1, 'John', 'Doe', 'aaa@bbb.ca', '111-111-1111', '2017-01-01', 'Manager', 100000, 40, 'Toronto'),
(2, 'Walter', 'White', 'bbb@ccc.ca', '222-222-2222', '2017-01-01', 'Cook', 50000, 40, 'New Mexico');

INSERT INTO `pay` (`id`,`pay_id`, `amount`, `date`) VALUES
(1, 1, 100, '2017-01-01'),
(1, 2, 200, '2017-01-08'),
(2, 3, 300, '2017-01-01');
