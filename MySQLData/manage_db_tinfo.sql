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
-- Table structure for table `tinfo`
--

DROP TABLE IF EXISTS `tinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tinfo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stu_id` varchar(45) NOT NULL,
  `class` varchar(45) NOT NULL,
  `keyName` varchar(45) NOT NULL,
  `keyKind` varchar(45) NOT NULL,
  `year` varchar(45) NOT NULL,
  `content` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='学生信息变更申请信息储存表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tinfo`
--

LOCK TABLES `tinfo` WRITE;
/*!40000 ALTER TABLE `tinfo` DISABLE KEYS */;
INSERT INTO `tinfo` VALUES (15,'19220219','19222511','诚实守信与奉献精神','key_seven','4','http://127.0.0.1:8080/cert.png'),(16,'19220219','19222511','创新实践与核心素养','key_eleven','4','http://127.0.0.1:8080/cert.png'),(17,'19220501','19222511','道德实践与家国情怀','key_five','1','http://127.0.0.1:8080/cert.png'),(19,'19220501','0','创新实践与核心素养','key_eleven','4','http://127.0.0.1:8080/cert.png'),(21,'19220501','19222511','学习态度与学习能力','key_one','2','http://127.0.0.1:8080/cert.png');
/*!40000 ALTER TABLE `tinfo` ENABLE KEYS */;
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
