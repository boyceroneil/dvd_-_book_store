CREATE DATABASE  IF NOT EXISTS `store`;
USE `store`;
--
--
DROP TABLE IF EXISTS `dvd`;
CREATE TABLE `dvd` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
    `url` varchar(255) DEFAULT NULL, 
  `name` varchar(45) DEFAULT NULL, 
  `genre` varchar(45) DEFAULT NULL, 
  `starring` varchar(255) DEFAULT NULL,
  `director` varchar(255) default null,
  `format` varchar(45) default null,
  `rent` boolean DEFAULT NULL,
  `buy` boolean DEFAULT NULL,
  `Rprice` varchar(45) DEFAULT NULL,
  `Bprice` varchar(45) DEFAULT NULL,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `dvd` VALUES 
(1,'https://i0.wp.com/www.gohired.in/wp-content/uploads/2016/08/51WaQVeEReL.jpg?resize=169%2C270','java movie', 'educational', 'james gosling', 'oracle', 'dvd+blueray+4K', false, false, '5,99','6.99')