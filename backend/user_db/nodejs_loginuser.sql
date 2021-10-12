CREATE TABLE `loginuser` (
  `user_id` int NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_pass` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
