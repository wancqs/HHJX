/*
MySQL Data Transfer
Source Host: localhost
Source Database: hhjx
Target Host: localhost
Target Database: hhjx
Date: 2018/11/23 15:34:32
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for admin
-- ----------------------------
CREATE TABLE `admin` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for customer_data
-- ----------------------------
CREATE TABLE `customer_data` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userId` int(5) NOT NULL,
  `code` varchar(30) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL,
  `contacts` varchar(20) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT '',
  `extendphone` varchar(15) DEFAULT NULL,
  `fax` varchar(15) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `qq` varchar(25) DEFAULT NULL,
  `product` varchar(40) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `remark` varchar(150) DEFAULT NULL,
  `intime` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for customer_price
-- ----------------------------
CREATE TABLE `customer_price` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userId` int(5) NOT NULL,
  `customerName` varchar(30) DEFAULT NULL,
  `quantity` int(15) DEFAULT NULL,
  `description` varchar(15) DEFAULT NULL,
  `brand` varchar(20) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `price` double(10,3) DEFAULT NULL,
  `offer` double(10,3) DEFAULT NULL,
  `remark` varchar(150) DEFAULT NULL,
  `intime` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_Id` (`userId`),
  CONSTRAINT `user_Id` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for factory_data
-- ----------------------------
CREATE TABLE `factory_data` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userId` int(5) NOT NULL,
  `code` varchar(30) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL,
  `contacts` varchar(20) DEFAULT NULL,
  `phone` varchar(90) DEFAULT NULL,
  `telephone` varchar(25) DEFAULT NULL,
  `extendphone` varchar(15) DEFAULT NULL,
  `fax` varchar(15) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `qq` varchar(25) DEFAULT NULL,
  `wechat` varchar(25) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `product` varchar(40) DEFAULT NULL,
  `remark` varchar(150) DEFAULT NULL,
  `clock` date DEFAULT NULL,
  `intime` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `factory_data_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for stock_list
-- ----------------------------
CREATE TABLE `stock_list` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userId` int(5) NOT NULL,
  `factoryName` varchar(30) DEFAULT NULL,
  `code` varchar(30) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `brand` varchar(20) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `quantity` int(10) DEFAULT NULL,
  `price` double(10,3) DEFAULT NULL,
  `remark` varchar(150) DEFAULT NULL,
  `intime` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `stock_list_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=258 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
CREATE TABLE `user` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'admin', 'admin', '1');
INSERT INTO `admin` VALUES ('2', 'qs', 'qs', '1');
INSERT INTO `customer_data` VALUES ('11', '1', '12131313', '13232', null, '123', '11', '11', null, null, '11', '11', null, null, '11', '2018-03-08');
INSERT INTO `customer_data` VALUES ('12', '1', '121', '212', null, null, null, null, null, null, null, null, null, null, null, '2018-03-09');
INSERT INTO `customer_data` VALUES ('15', '1', '2222呃呃呃', '222', '呃呃呃', '11', '11', null, null, null, null, null, null, null, null, '2018-03-09');
INSERT INTO `customer_data` VALUES ('25', '1', 'adadaddadad', 'dadadadadad', 'dadadadadad', 'dadadadadad', 'dadadaddada', 'dadadadadad', 'dadadadadad', 'dadadadad', 'dadadadadd', 'dadadadad', 'gdgrgrgrgr', 'grgrgrgrgr', null, '2018-03-09');
INSERT INTO `customer_data` VALUES ('26', '1', '123ccccc', 'cccccc', 'ccccc', 'ccccc', 'ccccc', 'cccc', 'ccccc', null, null, null, null, null, null, '2018-03-11');
INSERT INTO `customer_data` VALUES ('31', '1', '123', '华海', 'aaa', null, null, null, null, null, null, null, null, null, null, '2018-03-21');
INSERT INTO `customer_data` VALUES ('32', '8', '1233', '11111', null, null, null, null, null, null, null, null, null, null, null, '2018-03-21');
INSERT INTO `customer_data` VALUES ('34', '1', '123', '123', '123', '123', '123', '122', null, null, '222', '222', null, null, '222', '2018-03-22');
INSERT INTO `customer_data` VALUES ('35', '1', null, '111', null, '111', '111', '11', null, null, '11', '11', null, null, '111', '2018-04-03');
INSERT INTO `customer_data` VALUES ('36', '1', null, '111', null, null, null, null, null, null, null, null, null, null, null, '2018-04-04');
INSERT INTO `customer_data` VALUES ('37', '1', null, '华海', null, '华海', null, null, null, null, null, null, null, null, null, '2018-04-04');
INSERT INTO `customer_data` VALUES ('38', '1', null, '深圳市华海金信科技有限公司', null, '12344444', '22222222', null, null, null, null, null, null, null, null, '2018-04-04');
INSERT INTO `customer_data` VALUES ('39', '1', null, '欧瑞电子', null, '陈先生', '150157424444', '0755-82597220-60895', null, null, 'ben@jinxin-szsz.com', 'anye9805@foxmaol.com', null, null, 'wu', '2018-04-09');
INSERT INTO `customer_data` VALUES ('40', '1', null, null, null, null, null, '11', null, null, null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_data` VALUES ('41', '1', null, null, null, null, null, '1111', null, null, null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_data` VALUES ('42', '1', null, '物品描述2', null, '1111', null, '11', null, null, null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_data` VALUES ('43', '1', null, '物品描述3', null, '111111', null, '1111', null, null, null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_data` VALUES ('44', '1', null, '物品描述2', null, '1111', null, '11', null, null, null, '11', null, null, '11', '2018-04-09');
INSERT INTO `customer_data` VALUES ('45', '1', null, '物品描述3', null, '111111', null, '1111', null, null, null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_data` VALUES ('46', '1', null, '物品描述2', null, '1111', null, '11', null, null, null, '11', null, null, '11', '2018-04-09');
INSERT INTO `customer_data` VALUES ('47', '1', null, '物品描述3', null, '111111', null, '1111', null, null, null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_data` VALUES ('48', '1', null, '物品描述2', null, '1111', '1111', '11', null, null, '1111', '11', null, null, '11', '2018-04-09');
INSERT INTO `customer_data` VALUES ('49', '1', null, '物品描述3', null, '111111', '11112', '1111', null, null, '22', null, null, null, null, '2018-04-09');
INSERT INTO `customer_data` VALUES ('50', '1', null, '1234567', null, '111111', null, '1111', null, null, null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_data` VALUES ('51', '1', null, '12345678', null, '1111', '1111', '11', null, null, '1111', '11', null, null, '11', '2018-04-09');
INSERT INTO `customer_data` VALUES ('52', '1', null, '123456', null, '2', '4', '3', null, null, '5', '6', null, null, '7', '2018-04-09');
INSERT INTO `customer_data` VALUES ('53', '1', null, '23456', null, null, null, null, null, null, null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_data` VALUES ('54', '1', null, '23456789', null, null, null, null, null, null, null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_data` VALUES ('55', '1', null, '12ww', null, 'ww', '123', '122', null, null, '22', '22', null, null, '222', '2018-04-10');
INSERT INTO `customer_data` VALUES ('56', '1', null, '1234567', null, '111111', null, '1111', null, null, null, null, null, null, null, '2018-04-10');
INSERT INTO `customer_data` VALUES ('57', '1', null, '123456', null, '2', '4', '3', null, null, '5', '6', null, null, '7', '2018-04-10');
INSERT INTO `customer_data` VALUES ('58', '1', null, '12345678', null, '1111', '1111', '11', null, null, '1111', '11', null, null, '11', '2018-04-10');
INSERT INTO `customer_data` VALUES ('59', '1', null, '23456', null, null, null, null, null, null, null, null, null, null, null, '2018-04-10');
INSERT INTO `customer_data` VALUES ('60', '1', null, '23456789', null, null, null, null, null, null, null, null, null, null, null, '2018-04-10');
INSERT INTO `customer_data` VALUES ('61', '1', null, '12323123123233', null, '23123232', '3123123', '2312312', null, null, '2323', '2323', null, null, '2321', '2018-04-16');
INSERT INTO `customer_data` VALUES ('62', '1', null, '333333333', null, null, null, null, null, null, null, null, null, '112233333333', null, '2018-04-16');
INSERT INTO `customer_data` VALUES ('63', '1', null, '111111111', null, '111111', '11111', null, null, null, null, null, null, null, null, '2018-04-16');
INSERT INTO `customer_data` VALUES ('64', '1', null, '122121', null, '21212', '212', '212', null, null, '212112121212', '212', null, '2121', '2121', '2018-04-18');
INSERT INTO `customer_data` VALUES ('65', '1', null, '11111', null, '非常好343', null, '1111', null, null, null, null, null, null, null, '2018-04-18');
INSERT INTO `customer_data` VALUES ('66', '1', null, null, null, '不好223', '1111', '11', null, null, '1111', '11', null, '11', null, '2018-04-18');
INSERT INTO `customer_data` VALUES ('67', '1', null, null, null, '一般453', '4', '3', null, null, '5', '6', null, '7', '8', '2018-04-18');
INSERT INTO `customer_data` VALUES ('68', '1', null, '112121212', null, '1212', '212', null, null, null, null, null, '21212', '212', null, '2018-04-19');
INSERT INTO `customer_data` VALUES ('69', '6', null, '华海金信', null, 'ben', '134212121', '2121', null, null, '21212', null, null, null, null, '2018-04-20');
INSERT INTO `customer_data` VALUES ('70', '1', null, null, null, null, null, '21', null, null, null, null, null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('71', '1', null, '华海金信', null, '华海金信', '2121212', '21212', null, null, '2121212', '2121212', '华海金信', '华海金信', '华海金信', '2018-07-04');
INSERT INTO `customer_data` VALUES ('72', '1', null, '华海金信', null, '华海金信', '2121212', '1221121', null, null, '212121', '2121212', '还华海金信', '华海金信', '华海金信', '2018-07-04');
INSERT INTO `customer_data` VALUES ('73', '1', null, '1221121', null, '2121212', '2121212', '212121', null, null, '11', '111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('74', '1', null, '21212', null, '2121212', '2121212', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('75', '1', null, '1', null, '21', null, null, null, null, null, null, null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('76', '1', null, '1221121', null, '2121212', '2121212', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('77', '1', null, '21212', null, '2121212', '2121212', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('78', '1', null, '1', null, '21', null, null, null, null, null, null, null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('79', '1', null, '1221121', null, '2121212', '2121212', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('80', '1', null, '21212', null, '2121212', '2121212', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('81', '1', null, '1', null, '21', null, null, null, null, null, null, null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('82', '1', null, '1221121', null, '2121212', '2121212', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('83', '1', null, '21212', null, '2121212', '2121212', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('84', '1', null, '1', null, '21', null, null, null, null, null, null, null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('85', '1', null, '的', null, '2121212', '额', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('86', '1', null, '21212', null, '2121212', '2121212', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('87', '1', null, '1', null, '21', null, null, null, null, null, null, null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('88', '1', null, '的', null, '2121212', '额', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('89', '1', null, '21212', null, '2121212', '2121212', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('90', '1', null, '1', null, '21', null, null, null, null, null, null, null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('91', '1', null, '的', null, '2121212', '额', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('92', '1', null, '21212', null, '2121212', '2121212', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('93', '1', null, '1', null, '21', null, null, null, null, null, null, null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('94', '1', null, '的', null, '2121212', '额', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('95', '1', null, '21212', null, '2121212', '2121212', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('96', '1', null, '1', null, '21', null, null, null, null, null, null, null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('97', '1', null, '的', null, '任务', '额', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('98', '1', null, '任务', null, '任务', '任务', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('99', '1', null, '任务', null, '任务', '任务', '1', null, null, '任务', '任务', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('100', '1', null, '任务', null, '任务', '任务', '任务', null, null, '任务', '任务', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('101', '1', null, '的', null, '任务', '额', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('102', '1', null, '任务', null, '任务', '任务', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('103', '1', null, '任务', null, '任务', '任务', '1', null, null, '任务', '任务', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('104', '1', null, '任务', null, '任务', '任务', '任务', null, null, '任务', '任务', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('105', '1', null, '的', null, '任务', '额', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('106', '1', null, '任务', null, '任务', '任务', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('107', '1', null, '任务', null, '任务', '任务', '1', null, null, '任务', '任务', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('108', '1', null, '任务', null, '任务', '任务', '任务', null, null, '任务', '任务', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('109', '1', null, '的', null, '任务', '额', '212121', null, null, '11', '分', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('110', '1', null, '任务', null, '任务', '任务', '2121212', null, null, '11', '11111', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('111', '1', null, '任务', null, '任务', '任务', '1', null, null, '任务', '任务', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('112', '1', null, '任务', null, '任务', '任务', '任务', null, null, '任务', '任务', null, null, null, '2018-07-04');
INSERT INTO `customer_data` VALUES ('113', '1', null, '的', null, '任务', '额', '212121', null, null, '11', '分', null, null, null, '2018-07-05');
INSERT INTO `customer_data` VALUES ('114', '1', null, '任务', null, '任务', '任务', '2121212', null, null, '11', '11111', null, null, null, '2018-07-05');
INSERT INTO `customer_data` VALUES ('115', '1', null, '任务', null, '任务', '任务', '1', null, null, '任务', '任务', null, null, null, '2018-07-05');
INSERT INTO `customer_data` VALUES ('116', '1', null, '任务', null, '任务', '任务', '任务', null, null, '任务', '任务', null, null, null, '2018-07-05');
INSERT INTO `customer_data` VALUES ('117', '1', null, '的', null, '任务', '额', '212121', null, null, '11', '分', null, null, null, '2018-07-05');
INSERT INTO `customer_data` VALUES ('118', '1', null, '任务', null, '任务', '任务', '任务', null, null, '任务', '任务', null, null, null, '2018-07-05');
INSERT INTO `customer_data` VALUES ('119', '1', null, '任务', null, '任务', '任务', '2121212', null, null, '11', '11111', null, null, null, '2018-07-05');
INSERT INTO `customer_data` VALUES ('120', '1', null, '任务', null, '任务', '任务', '1', null, null, '任务', '任务', null, null, null, '2018-07-05');
INSERT INTO `customer_price` VALUES ('4', '1', '123', '1111', '1111', '1111', '1111', '111.000', '1111.000', '123', '2018-03-17');
INSERT INTO `customer_price` VALUES ('5', '1', '123', '11111', '111111', '11111', '111', '111.000', '111.000', '111', '2018-03-17');
INSERT INTO `customer_price` VALUES ('13', '1', '11', '1111', '11111', '111', null, '0.000', '0.000', null, '2018-03-17');
INSERT INTO `customer_price` VALUES ('18', '4', 'ccccc', '121', '111', null, null, null, null, null, '2018-03-19');
INSERT INTO `customer_price` VALUES ('19', '1', '2222', '1111', '123', '33', '33', '33.000', '333.000', null, '2018-03-20');
INSERT INTO `customer_price` VALUES ('22', '8', '11111', '11111', null, null, null, null, null, null, '2018-03-21');
INSERT INTO `customer_price` VALUES ('23', '1', '2222', '23', '2233', '233', '1222', null, '222.000', '22222222', '2018-03-21');
INSERT INTO `customer_price` VALUES ('24', '1', '1111', '123', '111', '11', '111', '111.000', '111.000', '111', '2018-03-22');
INSERT INTO `customer_price` VALUES ('25', '1', '13232', '111', '111', '111', '11', '111.000', '1111.000', '111', '2018-04-03');
INSERT INTO `customer_price` VALUES ('26', '1', '2222', '11', '11', '11', '111', '111.000', '11.000', '111', '2018-04-03');
INSERT INTO `customer_price` VALUES ('28', '1', '华海', '1111', '物品描述2', '11', null, null, null, null, '2018-04-09');
INSERT INTO `customer_price` VALUES ('29', '1', '华海', '111111', '物品描述3', '1111', null, null, null, null, '2018-04-09');
INSERT INTO `customer_price` VALUES ('30', '1', '212', '2222', '12345', '222', '22', '22.000', '22.000', '22', '2018-04-09');
INSERT INTO `customer_price` VALUES ('31', '1', '华海', '1233', '12345678', null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_price` VALUES ('32', '1', '222', '22', '123458766', null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_price` VALUES ('33', '1', '212', '122', '23456', '11', '111', null, null, null, '2018-04-09');
INSERT INTO `customer_price` VALUES ('34', '1', '华海', '23444', '23456', null, null, null, null, null, '2018-04-09');
INSERT INTO `customer_price` VALUES ('35', '1', '222', '12', '123456778', '2212', '1221', '12.000', '212.000', '212', '2018-04-10');
INSERT INTO `customer_price` VALUES ('36', '1', '深圳市华海金信科技有限公司', '1111', '12345678', '11', '1111', '1111.000', '11.000', '11', '2018-04-10');
INSERT INTO `customer_price` VALUES ('37', '1', '深圳市华海金信科技有限公司', '111111', '1234567', '1111', null, null, null, null, '2018-04-10');
INSERT INTO `customer_price` VALUES ('38', '1', '深圳市华海金信科技有限公司', '2', '123456', '3', '4', '5.000', '6.000', '7', '2018-04-10');
INSERT INTO `customer_price` VALUES ('39', '1', '深圳市华海金信科技有限公司', '0', '23456789', null, null, null, null, null, '2018-04-10');
INSERT INTO `customer_price` VALUES ('40', '1', '深圳市华海金信科技有限公司', '0', '23456', null, null, null, null, null, '2018-04-10');
INSERT INTO `customer_price` VALUES ('41', '1', '13232', '12221', '123a45', null, null, null, null, null, '2018-04-10');
INSERT INTO `customer_price` VALUES ('42', '1', '212', '0', '122', null, null, '2.000', '2.000', null, '2018-04-10');
INSERT INTO `customer_price` VALUES ('43', '1', '华海', '122', '123', null, null, '2.000', '3.000', null, '2018-04-10');
INSERT INTO `customer_price` VALUES ('44', '1', '深圳市华海金信科技有限公司', '33', '223', null, null, '2.000', '2.000', null, '2018-04-10');
INSERT INTO `customer_price` VALUES ('45', '1', '222', '0', '122', '21', null, '2.000', '3.000', null, '2018-04-11');
INSERT INTO `customer_price` VALUES ('47', '1', '222', '0', '122', null, null, '2.300', '2.330', null, '2018-04-11');
INSERT INTO `customer_price` VALUES ('48', '1', '13232', '3333', '123333', '333', '1242', '2.333', '2.333', null, '2018-04-11');
INSERT INTO `customer_price` VALUES ('49', '1', '1221', '111', '111', '111', null, '0.000', '0.000', null, '2018-04-16');
INSERT INTO `customer_price` VALUES ('50', '1', '123', '12121', '12221121', null, null, '0.000', '0.000', null, '2018-04-16');
INSERT INTO `customer_price` VALUES ('51', '1', '123', '122', '12212222222', '212', '212', '122.000', '212.000', '212', '2018-04-16');
INSERT INTO `customer_price` VALUES ('52', '1', '11', '2121', '1212', '1212', '121211', '212.000', '212.000', '1212', '2018-04-18');
INSERT INTO `customer_price` VALUES ('53', '6', '华海金信', '11111', '1111', '11111', null, '0.000', '0.000', null, '2018-04-20');
INSERT INTO `customer_price` VALUES ('54', '6', '华海金信', '21212', '1221212', null, null, '0.000', '0.000', null, '2018-04-20');
INSERT INTO `customer_price` VALUES ('55', '6', '华海金信', '0', '121212', null, null, '0.000', '0.000', null, '2018-04-20');
INSERT INTO `customer_price` VALUES ('56', '6', '华海金信', '2121', '21212', null, null, '0.000', '0.000', null, '2018-04-20');
INSERT INTO `customer_price` VALUES ('57', '1', '华海', '12211', '123', null, null, '0.000', '0.000', null, '2018-04-20');
INSERT INTO `customer_price` VALUES ('58', '1', '欧瑞电子', '0', null, null, null, '0.000', '0.000', null, '2018-04-20');
INSERT INTO `customer_price` VALUES ('59', '1', '深圳市华海金信科技有限公司', '1221', '123', '122', '12', '0.000', '0.000', null, '2018-04-20');
INSERT INTO `customer_price` VALUES ('60', '1', '111111', '2222', '1525252', '222', '222', '222.000', '222.000', '222', '2018-04-27');
INSERT INTO `customer_price` VALUES ('61', '1', '华海金信', '0', null, '21', null, '0.000', '0.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('62', '1', '华海金信', '0', null, '21', null, '0.000', '0.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('63', '1', '欧瑞电子', '0', null, '21', null, '0.000', '0.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('64', '1', '', '1221121', '1', '2121212', '212121', '2121212.000', '1.000', '华海金信', '2018-07-04');
INSERT INTO `customer_price` VALUES ('65', '1', '', '21212', '1', '2121212', '2121212', '2121212.000', '1.000', '华海金信', '2018-07-04');
INSERT INTO `customer_price` VALUES ('66', '1', '', '0', null, '21', null, '0.000', '0.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('67', '1', '华海金信', '1221121', '1', '2121212', '212121', '2121212.000', '1.000', '华海金信', '2018-07-04');
INSERT INTO `customer_price` VALUES ('68', '1', '华海金信', '21212', '1', '2121212', '2121212', '2121212.000', '1.000', '华海金信', '2018-07-04');
INSERT INTO `customer_price` VALUES ('69', '1', '华海金信', '0', null, '21', null, '0.000', '0.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('70', '1', '123', '1221121', '1', '2121212', '212121', '2121212.000', '1.000', '华海金信', '2018-07-04');
INSERT INTO `customer_price` VALUES ('71', '1', '123', '21212', '1', '2121212', '2121212', '2121212.000', '1.000', '华海金信', '2018-07-04');
INSERT INTO `customer_price` VALUES ('72', '1', '123', '0', null, '21', null, '0.000', '0.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('73', '1', '华海金信', '2121212', '1221121', '212121', '2121212', '11.000', '111.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('74', '1', '华海金信', '2121212', '21212', '2121212', '2121212', '11.000', '11111.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('75', '1', '华海金信', '21', '1', null, null, '0.000', '0.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('76', '1', '欧瑞电子', '2121212', '21212', '2121212', '2121212', '11.000', '11111.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('77', '1', '欧瑞电子', '21', '1', null, null, '0.000', '0.000', null, '2018-07-04');
INSERT INTO `customer_price` VALUES ('78', '1', '深圳市华海金信科技有限公司', '222', '1234', null, null, '0.000', '0.000', null, '2018-07-18');
INSERT INTO `factory_data` VALUES ('116', '1', 'HHJX', '华海金信', null, '陈先生', '134567，16262,17771。132', null, null, null, '123@qq.com', '123445554', null, '北京', '电子器件', '无,无本金，无邪', '2018-06-30', '2018-04-16');
INSERT INTO `factory_data` VALUES ('117', '1', 'OD', '欧典', null, '1111', null, null, null, null, null, null, null, null, null, null, '2018-04-16', '2018-04-16');
INSERT INTO `factory_data` VALUES ('118', '1', 'BQ', '北汽', null, '12222', '122', null, null, null, '2122', null, null, null, null, null, '2018-04-16', '2018-04-16');
INSERT INTO `factory_data` VALUES ('119', '1', 'WW', '威望', null, '123', '123', null, null, null, '123', '123', null, '21212', '123', '1212', '2018-04-19', '2018-04-16');
INSERT INTO `factory_data` VALUES ('120', '1', 'FT', '福特', null, '122122112', '21212', null, null, null, '21212', '21212', null, '21212', '21212', '21212', '2018-04-18', '2018-04-18');
INSERT INTO `factory_data` VALUES ('121', '6', 'BQW', '北汽问', null, null, null, null, null, null, null, null, null, null, null, null, '2018-04-20', '2018-04-20');
INSERT INTO `factory_data` VALUES ('122', '1', 'LYL', '蓝月亮', null, 'miss', '122332。2112', null, null, null, '1234@qq.com', '12122121212', null, '2121212', '212212', '1212122221。222222222', '2018-04-21', '2018-04-20');
INSERT INTO `factory_data` VALUES ('123', '1', 'FT', '丰田', null, '张先森', '12435687', null, null, null, '212121@qq.com', '21212212211', null, '深圳', '电子器件', '无', '2018-04-23', '2018-04-23');
INSERT INTO `factory_data` VALUES ('124', '1', 'LEY', '乐而雅', null, '李小军', '', null, null, null, '1234@qq.com', '111111111111', null, '11111', '1111111111', '1111多久啊搜到该哦你点击哦基调就是低级的叫声基调静安寺。哦等', '2018-04-26', '2018-04-26');
INSERT INTO `factory_data` VALUES ('125', '1', 'WHH', '娃哈哈', null, '宗先森', '111。123。d134。', null, null, null, null, null, null, null, null, '大红色的hi。阿是好多号该。会丢会丢好，的丢货四度喜欢该U盾his等会，睡会丢电话UIhiU盾hiUS的回答是痐东四环UI好的就好好 UI的hi会的会的好该USD会恢复和对话好好说该US电话覅和合法的水水水水是华海了耗时间肯定会多喝。点水角度看 好可视电话打卡收到货。开。始的', '2018-04-27', '2018-04-27');
INSERT INTO `factory_data` VALUES ('126', '1', 'DC', '德昌', null, '123', '12212', null, null, null, null, null, null, null, null, null, '2018-04-27', '2018-04-27');
INSERT INTO `factory_data` VALUES ('127', '1', 'YW', '亿万', null, '22222', '22222', null, null, null, null, null, null, null, null, null, '2018-04-29', '2018-04-27');
INSERT INTO `factory_data` VALUES ('128', '1', 'HH', '华海', null, '请问', '1222', null, null, null, null, null, null, null, null, null, '2018-04-29', '2018-04-27');
INSERT INTO `factory_data` VALUES ('129', '6', 'KK', '看看', null, '11', null, null, null, null, null, null, null, null, null, null, '2018-04-27', '2018-04-27');
INSERT INTO `factory_data` VALUES ('130', '1', 'JD', '京东', null, '蛇蛇', null, null, null, null, null, null, null, null, null, null, '2018-05-03', '2018-05-03');
INSERT INTO `factory_data` VALUES ('131', '1', '1', '21212', null, '2121212', '2121212', null, null, null, '2121212', '11', null, '212', '华海金信', '212', '2018-07-04', '2018-07-04');
INSERT INTO `factory_data` VALUES ('132', '1', '1', '1221121', null, '2121212', '212121', null, null, null, '2121212', '11', null, '21', '华海金信', '12', '2018-07-04', '2018-07-04');
INSERT INTO `factory_data` VALUES ('133', '1', '1', '1', null, '21', null, null, null, null, null, null, null, null, null, null, '2018-07-04', '2018-07-04');
INSERT INTO `factory_data` VALUES ('134', '1', '1221121', '2121212', null, '212121', '2121212', null, null, null, '11', '111', null, null, null, null, '2018-07-04', '2018-07-04');
INSERT INTO `factory_data` VALUES ('135', '1', '1', '21', null, null, null, null, null, null, null, null, null, null, null, null, '2018-07-04', '2018-07-04');
INSERT INTO `factory_data` VALUES ('136', '1', '21212', '2121212', null, '2121212', '2121212', null, null, null, '11', '11111', null, null, null, null, '2018-07-04', '2018-07-04');
INSERT INTO `factory_data` VALUES ('137', '1', '任务', '任务', null, '2121212', '任务', null, null, null, '11', '11111', null, null, null, null, '2018-07-04', '2018-07-04');
INSERT INTO `stock_list` VALUES ('180', '1', '华海金信', '123321', '1221', '1221', '122', '1221', '122.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('181', '1', '华海金信', '345543', '3333', '3333', null, '33333', '0.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('182', '1', '威望', '1212212', null, null, null, '2121', '0.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('183', '1', '华海金信', '12212', null, null, null, '1212', '0.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('184', '1', '华海金信', '222222', null, null, null, '2222222', '0.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('185', '1', '威望', '2222', '222', '2222', '22222', '2222', '0.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('186', '1', '北汽', '1221', '2212', '212', '212', '2122', '211.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('187', '1', '华海金信', '22333333', null, null, null, '33333', '0.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('188', '1', '威望', '2222222', null, null, null, '222222', '0.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('189', '1', '华海金信', '123321', null, null, null, '11111', '0.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('190', '1', '北汽', '123321', null, null, null, '111111', '0.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('191', '1', '华海金信', '123456', '111', null, null, '11111', '0.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('192', '1', '威望', '121212', '1212121', '212', '1212', '1212', '212.000', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('193', '1', '华海金信', '123456', '2112', '212', '212', '1212', '12.330', null, '2018-04-16');
INSERT INTO `stock_list` VALUES ('194', '1', '欧典', '111', '111', '1111', '1111', '111', '11111.000', null, '2018-04-18');
INSERT INTO `stock_list` VALUES ('195', '1', '欧典', '1111', '111', null, null, '111', '0.000', null, '2018-04-20');
INSERT INTO `stock_list` VALUES ('196', '1', '欧典', '1111', '1111', '1111', '111', '111', '0.000', null, '2018-04-20');
INSERT INTO `stock_list` VALUES ('197', '6', '北汽问', '1111', '212', null, null, '21212', '0.000', null, '2018-04-20');
INSERT INTO `stock_list` VALUES ('198', '1', '欧典', '1111', '111', null, null, '1111', '0.000', null, '2018-04-20');
INSERT INTO `stock_list` VALUES ('199', '1', '北汽', '1234567', null, null, null, '11111', '0.000', null, '2018-04-20');
INSERT INTO `stock_list` VALUES ('200', '1', '欧典', '1111', '11111', null, null, '1111', '0.000', null, '2018-04-20');
INSERT INTO `stock_list` VALUES ('201', '1', '北汽', '123456', '21212', '1212', null, '12121', '0.000', null, '2018-04-20');
INSERT INTO `stock_list` VALUES ('202', '1', '华海金信', '123456', '12345', '121', '212', '123', '121.000', null, '2018-04-23');
INSERT INTO `stock_list` VALUES ('203', '1', '北汽', '123456', '11', '11', '11', '1111', '11.000', null, '2018-04-23');
INSERT INTO `stock_list` VALUES ('204', '1', '北汽', '123456', null, null, null, '1211', '0.000', null, '2018-04-23');
INSERT INTO `stock_list` VALUES ('205', '1', '蓝月亮', '123456', '1221', '1221', '212', '123', '212.000', null, '2018-04-25');
INSERT INTO `stock_list` VALUES ('206', '1', '欧典', '123456', null, null, null, '0', '0.000', null, '2018-04-25');
INSERT INTO `stock_list` VALUES ('207', '1', '北汽', '123456', null, null, null, '222', '0.000', null, '2018-04-25');
INSERT INTO `stock_list` VALUES ('208', '1', '北汽', '123456', null, null, null, '0', '0.000', null, '2018-04-25');
INSERT INTO `stock_list` VALUES ('209', '1', '威望', '123456', null, null, null, '0', '0.000', null, '2018-04-26');
INSERT INTO `stock_list` VALUES ('210', '1', '福特', '123456', null, null, null, '11111', '0.000', null, '2018-04-26');
INSERT INTO `stock_list` VALUES ('211', '1', '欧典', '12345', null, null, null, '1111', '0.000', null, '2018-04-26');
INSERT INTO `stock_list` VALUES ('212', '1', '福特', '12345', '4444', null, null, '12344', '0.000', null, '2018-04-26');
INSERT INTO `stock_list` VALUES ('213', '1', '北汽', '12345', '1111', null, null, '111', '0.000', null, '2018-04-26');
INSERT INTO `stock_list` VALUES ('214', '1', '乐而雅', '123456', '121', '212', '212', '1221', '1212.000', null, '2018-04-27');
INSERT INTO `stock_list` VALUES ('215', '1', '乐而雅', '123456', null, null, null, '111', '0.000', null, '2018-04-27');
INSERT INTO `stock_list` VALUES ('216', '1', '华海金信', '1', '1221121', '2121212', '212121', '2121212', '11.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('217', '1', '华海金信', '1', '1', '21', null, '0', '0.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('218', '1', '华海金信', '1', '21212', '2121212', '2121212', '2121212', '11.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('219', '1', '娃哈哈', '1', '1221121', '2121212', '212121', '2121212', '11.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('220', '1', '娃哈哈', '1', '21212', '2121212', '2121212', '2121212', '11.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('221', '1', '娃哈哈', '1', '1', '21', null, '0', '0.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('222', '1', '北汽', '1', '21', null, null, '0', '0.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('223', '1', '乐而雅', '1221121', '2121212', '212121', '2121212', '11', '111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('224', '1', '华海金信', '21212', '2121212', '2121212', '2121212', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('225', '1', '华海', '1', '21', '212', '11', '0', '0.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('226', '1', '亿万', '1221121', '2121212', '212121', '2121212', '11', '111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('227', '1', '亿万', '21212', '2121212', '2121212', '2121212', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('228', '1', '亿万', '1', '21', null, null, '0', '0.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('229', '1', '德昌', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('230', '1', '娃哈哈', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('231', '1', '乐而雅', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('232', '1', '亿万', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('233', '1', '亿万', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('234', '1', '乐而雅', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('235', '1', '乐而雅', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('236', '1', '乐而雅', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('237', '1', '乐而雅', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('238', '1', '乐而雅', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('239', '1', '乐而雅', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('240', '1', '乐而雅', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('241', '1', '亿万', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('242', '1', '亿万', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('243', '1', '蓝月亮', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('244', '1', '娃哈哈', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-04');
INSERT INTO `stock_list` VALUES ('245', '1', '乐而雅', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-05');
INSERT INTO `stock_list` VALUES ('246', '1', '华海', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-05');
INSERT INTO `stock_list` VALUES ('247', '1', '华海', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-05');
INSERT INTO `stock_list` VALUES ('248', '1', '娃哈哈', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-05');
INSERT INTO `stock_list` VALUES ('249', '1', '华海金信', '任务', '任务', '2121212', '任务', '11', '11111.000', null, '2018-07-05');
INSERT INTO `stock_list` VALUES ('250', '1', '娃哈哈', '123456', '12', '12', '12', '2221', '21.000', null, '2018-07-18');
INSERT INTO `stock_list` VALUES ('251', '1', '欧典', '2112', '444', '444', '444', '44444', '444.000', null, '2018-07-18');
INSERT INTO `stock_list` VALUES ('252', '1', '亿万', '2112', null, null, null, '222', '0.000', null, '2018-07-18');
INSERT INTO `stock_list` VALUES ('253', '1', '娃哈哈', '22223444', null, null, null, '2234', '0.000', null, '2018-07-18');
INSERT INTO `stock_list` VALUES ('254', '1', '德昌', '22223333', '333', null, null, '2232', '0.000', null, '2018-07-18');
INSERT INTO `stock_list` VALUES ('255', '1', '娃哈哈', '1234567', null, null, null, '4444', '0.000', null, '2018-07-18');
INSERT INTO `stock_list` VALUES ('256', '1', '北汽', '123456', '212', null, null, '212', '0.000', null, '2018-07-20');
INSERT INTO `stock_list` VALUES ('257', '1', '北汽', '123456', '212', null, null, '212', '0.000', null, '2018-07-20');
INSERT INTO `user` VALUES ('1', 'cqs', '123', '1', '1293154981@qq.com');
INSERT INTO `user` VALUES ('4', 'ccc', '12', '1', null);
INSERT INTO `user` VALUES ('6', 'qs', '123', '1', null);
INSERT INTO `user` VALUES ('8', 'dddd', '1234', '超级用户', '15119668922@163.com');
INSERT INTO `user` VALUES ('10', 'user', 'user', '普通用户', null);
INSERT INTO `user` VALUES ('13', '21221', '21212', '21212', '212121@qq.com');
