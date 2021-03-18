CREATE DATABASE  IF NOT EXISTS `store`;
USE `store`;
--
--
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL, 
  `name` varchar(45) DEFAULT NULL, 
  `genre` varchar(45) DEFAULT NULL, 
  `author` varchar(45) DEFAULT NULL,
  `publisher` varchar(45) DEFAULT NULL,
  `rent` boolean DEFAULT NULL,
  `buy` boolean DEFAULT NULL,
  `Rprice` varchar(45) DEFAULT NULL,
  `Bprice` varchar(45) DEFAULT NULL,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `books` VALUES 
(1,'https://i0.wp.com/www.gohired.in/wp-content/uploads/2016/08/51WaQVeEReL.jpg?resize=169%2C270','java book', 'educational', 'james gosling', 'oracle', false, false, '5.99', '6.99')