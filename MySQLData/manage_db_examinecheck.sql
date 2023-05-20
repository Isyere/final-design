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
-- Table structure for table `examinecheck`
--

DROP TABLE IF EXISTS `examinecheck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examinecheck` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stu_id` int NOT NULL,
  `class` varchar(45) NOT NULL,
  `keyName` varchar(45) NOT NULL,
  `keyKind` varchar(45) NOT NULL,
  `year` varchar(45) NOT NULL,
  `content` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examinecheck`
--

LOCK TABLES `examinecheck` WRITE;
/*!40000 ALTER TABLE `examinecheck` DISABLE KEYS */;
INSERT INTO `examinecheck` VALUES (10,19220219,'19222511','学习态度与学习能力','key_one','1','http://127.0.0.1:8080/cert.png','申请未通过'),(11,19220219,'19222511','身心素养与自我管理','key_six','1','http://127.0.0.1:8080/cert.png','申请未通过'),(12,19220219,'19222511','多元文化与国际视野','key_two','2','http://127.0.0.1:8080/cert.png','申请未通过'),(13,19220219,'19222511','诚实守信与奉献精神','key_seven','2','http://127.0.0.1:8080/cert.png','申请未通过'),(14,19220219,'19222511','身心素养与自我管理','key_six','2','http://127.0.0.1:8080/cert.png','申请已通过+25分'),(15,19220219,'19222511','身心素养与自我管理','key_six','2','http://127.0.0.1:8080/cert.png','申请已通过+25分'),(16,19220219,'19222511','身心素养与自我管理','key_six','2','http://127.0.0.1:8080/cert.png','申请已通过+25分'),(17,19220219,'19222511','身心素养与自我管理','key_six','2','http://127.0.0.1:8080/cert.png','申请已通过+25分'),(18,19220219,'19222511','身心素养与自我管理','key_six','2','http://127.0.0.1:8080/cert.png','申请已通过+25分'),(19,19220219,'19222511','身心素养与自我管理','key_six','2','http://127.0.0.1:8080/cert.png','申请已通过+25分'),(20,19220219,'19222511','身心素养与自我管理','key_six','2','http://127.0.0.1:8080/cert.png','申请已通过+25分'),(21,19220219,'19222511','身心素养与自我管理','key_six','2','http://127.0.0.1:8080/cert.png','申请已通过+25分'),(22,19220219,'19222511','劳动观念与劳动技能','key_four','4','http://127.0.0.1:8080/set.txt','申请通过+25分'),(23,19220219,'19222511','劳动观念与劳动技能','key_four','4','http://127.0.0.1:8080/QQ图片20200222161558.jpg','申请未通过'),(24,19220219,'19222511','劳动观念与劳动技能','key_four','4','http://127.0.0.1:8080/QQ图片20200222161558.jpg','申请未通过');
/*!40000 ALTER TABLE `examinecheck` ENABLE KEYS */;
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
