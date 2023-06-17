
-- -----------------------------------------------------
-- Schema comporoll
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema comporoll
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `comporoll` DEFAULT CHARACTER SET utf8 ;
USE `comporoll` ;

-- -----------------------------------------------------
-- Table `comporoll`.`actualite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comporoll`.`actualite` (
  `idactualite` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(600) NOT NULL,
  `image` LONGTEXT NULL,
  `brief` VARCHAR(500) NOT NULL,
  `creationDate` DATETIME NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `video` VARCHAR(500) NULL,
  PRIMARY KEY (`idactualite`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `comporoll`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comporoll`.`users` (
  `idusers` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


