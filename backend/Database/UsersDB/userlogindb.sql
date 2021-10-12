CREATE DATABASE nodejs;

CREATE TABLE `loginuser` (
  `user_name` varchar(255) DEFAULT NULL,
  `user_pass` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO loginuser (user_name, user_pass) VALUES ("encoder", "test");
INSERT INTO loginuser (user_name, user_pass) VALUES ("auditor", "test");
INSERT INTO loginuser (user_name, user_pass) VALUES ("admin", "test");