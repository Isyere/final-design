-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: manage_db
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `stuinfo`
--

DROP TABLE IF EXISTS `stuinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stuinfo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stu_id` int NOT NULL DEFAULT '0',
  `stu_name` varchar(45) NOT NULL DEFAULT '0',
  `stu_class` int NOT NULL DEFAULT '0',
  `stu_college` varchar(45) NOT NULL DEFAULT '0',
  `stu_pic` text,
  `gpa` float NOT NULL DEFAULT '0',
  `year` int NOT NULL DEFAULT '5' COMMENT '该条学生数据对应的学年',
  `key_one` float NOT NULL DEFAULT '0' COMMENT '学习态度与学习能力',
  `key_two` float NOT NULL DEFAULT '0' COMMENT '多元文化与国际视野',
  `key_three` float NOT NULL DEFAULT '0' COMMENT '规划执行与逻辑思辨',
  `key_four` float NOT NULL DEFAULT '0' COMMENT '劳动观念与劳动技能',
  `key_five` float NOT NULL DEFAULT '0' COMMENT '道德实践与家国情怀',
  `key_six` float NOT NULL DEFAULT '0' COMMENT '身心素养与自我管理',
  `key_seven` float NOT NULL DEFAULT '0' COMMENT '诚实守信与奉献精神',
  `key_eight` float NOT NULL DEFAULT '0' COMMENT '艺术涵养与美感素养',
  `key_nine` float NOT NULL DEFAULT '0' COMMENT '分析问题与系统思考',
  `key_ten` float NOT NULL DEFAULT '0' COMMENT '人际关系与团队合作',
  `key_eleven` float NOT NULL DEFAULT '0' COMMENT '创新实践与核心素养',
  `key_twelve` float NOT NULL DEFAULT '0' COMMENT '工具使用与内涵建设',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stuinfo`
--

LOCK TABLES `stuinfo` WRITE;
/*!40000 ALTER TABLE `stuinfo` DISABLE KEYS */;
INSERT INTO `stuinfo` VALUES (17,19220219,'吴锡伦',19222511,'人文艺术与数字媒体学院','http://127.0.0.1:8080/19220219.jpg',3.6,1,10,20,30,15,40,20,30,20,10,40,20,30),(18,19220219,'吴锡伦',19222511,'人文艺术与数字媒体学院','http://127.0.0.1:8080/19220219.jpg',3.8,2,30,35,30,35,60,40,40,30,35,70,35,60),(19,19220219,'吴锡伦',19222511,'人文艺术与数字媒体学院','http://127.0.0.1:8080/19220219.jpg',0,3,60,70,50,65,80,60,80,40,60,90,55,90),(20,19220219,'吴锡伦',19222511,'人文艺术与数字媒体学院','http://127.0.0.1:8080/19220219.jpg',0,4,90,80,70,115,90,75,90,70,70,100,90,95),(21,19220219,'吴锡伦',19222511,'人文艺术与数字媒体学院','http://127.0.0.1:8080/19220219.jpg',3.86,5,90,80,70,115,90,75,90,70,70,100,90,95),(22,19220501,'1',1,'1','http://127.0.0.1:8080/微信图片_20230506164153.jpg',0,1,0,0,0,0,0,0,0,0,0,0,0,0),(23,19220501,'1',1,'1','http://127.0.0.1:8080/微信图片_20230506164153.jpg',0,2,0,0,0,0,0,0,0,0,0,0,0,0),(24,19220501,'1',1,'1','http://127.0.0.1:8080/微信图片_20230506164153.jpg',0,4,0,0,0,0,0,0,0,0,0,0,0,0),(25,19220501,'1',1,'1','http://127.0.0.1:8080/微信图片_20230506164153.jpg',0,3,0,0,0,0,0,0,0,0,0,0,0,0),(26,19220501,'1',1,'1','http://127.0.0.1:8080/微信图片_20230506164153.jpg',1,5,0,0,0,0,0,0,0,0,0,0,0,0),(27,19220502,'丁二',0,'0',NULL,0,1,0,0,0,0,0,0,0,0,0,0,0,0),(28,19220502,'丁二',0,'0',NULL,0,2,0,0,0,0,0,0,0,0,0,0,0,0),(29,19220502,'丁二',0,'0',NULL,0,3,0,0,0,0,0,0,0,0,0,0,0,0),(30,19220502,'丁二',0,'0',NULL,0,4,0,0,0,0,0,0,0,0,0,0,0,0),(31,19220502,'丁二',0,'0',NULL,0,5,0,0,0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `stuinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-20 12:14:25
