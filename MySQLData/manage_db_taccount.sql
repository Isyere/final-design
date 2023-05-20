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
-- Table structure for table `taccount`
--

DROP TABLE IF EXISTS `taccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taccount` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `t_name` varchar(45) NOT NULL,
  `t_password` varchar(45) NOT NULL,
  `t_pic` varchar(45) NOT NULL DEFAULT '#',
  `manageclassmin` int NOT NULL,
  `manageclassmax` int NOT NULL,
  `sex` varchar(45) NOT NULL,
  PRIMARY KEY (`t_id`),
  UNIQUE KEY `t-id_UNIQUE` (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='辅导员信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taccount`
--

LOCK TABLES `taccount` WRITE;
/*!40000 ALTER TABLE `taccount` DISABLE KEYS */;
INSERT INTO `taccount` VALUES (1,'金琳','50000001','123456','http://127.0.0.1:8080/jinlin.jpg',19222511,19222512,'女'),(2,'丁一','50000002','123456','#',19222513,19222514,'男'),(3,'张三','50000003','123456','#',19222515,19222519,'男'),(8,'吴七','50000006','123456','#',19222570,19222571,'男');
/*!40000 ALTER TABLE `taccount` ENABLE KEYS */;
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
