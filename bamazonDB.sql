DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER(3) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars Black Series Action Figure Set", "Toys", 69.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars: The Last Jedi 12-Inch First Order Stormtrooper Figure", "Toys", 7.95, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pandora Sterling Silver Joined Together Charm", "Jewelry", 39.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Platinum Drusy Pendant Rhodium Plated Necklace", "Jewelry", 49.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NERF Rhino Fire Blaster With 100 Darts", "Toys", 55.95, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple iPad 5th Gen WiFi - 128GB - Space Gray ", "Electronics", 373.00, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Champion-Men-039-s-GO-TO-Full-Zip-Jacket-Light-Weight-Athletic-Windbreaker", "Clothing", 12.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Swarovski Crystal Lovlots Happy Duck Santa & Reindeer Figurine", "Collectables", 64.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tazon 6 FM Women's Running Shoes", "Shoes", 29.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Canon EOS 5D Mark IV 30.4MP Digital SLR Camera", "Electronics", 2429.99, 10);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
