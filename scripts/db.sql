CREATE DATABASE
IF NOT EXISTS ahorrodb;

USE ahorrodb;

CREATE TABLE
IF NOT EXISTS product_fin
(
  id INT NOT NULL AUTO_INCREMENT,
  mont_min_apert   Decimal(16,2) NOT NULL,
  dur_plan_min     INT not null,
  tasa_int_min     Decimal(16,2) NOT NULL,
  tasa_int_base    Decimal(16,2) NOT NULL,
  tasa_int_max     Decimal(16,2) NOT NULL,
  PRIMARY KEY
(id)
);

CREATE TABLE
IF NOT EXISTS cliente
(
  id_cliente INT NOT NULL AUTO_INCREMENT,
  nombre           varchar(100) NOT NULL,
  identificacion   varchar(10) not null,
  telefono         varchar(15) NOT NULL,
  correo           varchar(100) NOT NULL,
  PRIMARY KEY
(id_cliente)
);


CREATE TABLE
IF NOT EXISTS cuenta_banco
(
  id_cuenta       INT NOT NULL AUTO_INCREMENT,
  num_cuenta      VARCHAR(20) NOT NULL,
  disponible      Decimal(16,2) not null,
  fecha_apertura  DATETIME NOT NULL,
  id_cliente      INT NOT NULL,
  estado          VARCHAR(1) NOT NULL,
  PRIMARY KEY
(id_cuenta)
);

CREATE TABLE
IF NOT EXISTS plan_ahorro
(
  id_contrato INT NOT NULL AUTO_INCREMENT,
  id_cliente  INT NOT NULL,
  id_cuenta   INT not null,
  duracion    INT NOT NULL,
  fecha_inicio DATETIME NOT NULL,
  fecha_fin    DATETIME NOT NULL,
  PRIMARY KEY
(id_contrato)
);

INSERT INTO product_fin
  (mont_min_apert, dur_plan_min,tasa_int_min,tasa_int_base,tasa_int_max)
VALUES
  (25.00, 6, 8.00, 10.00, 12.00);


INSERT INTO cliente
  (nombre, identificacion,telefono,correo)
VALUES
  ('Paul Guaman', '1727406228', '0995090170', 'guaman.bryan.paul@gmail.com'),
  ('Bryan Guaman', '1727406222', '0995090171', 'guaman.bryan@gmail.com');