# Download Docker Image
docker pull mysql

# Run docker image
docker run --name demo-mysql -e MYSQL_ROOT_PASSWORD=123 -p 3306:3306 -d mysql:latest; 

# Connect to container using bash
docker exec -it demo-mysql bash   

# Connect to mysql
mysql -u root -p 

# Enter password

# Execute in mysql
CREATE DATABASE products_db;
USE products_db;

CREATE  TABLE IF NOT EXISTS `products` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` DECIMAL(11,2) UNSIGNED DEFAULT 0.00,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

# To fix issue with authentication try one of the two following scrips

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123';
