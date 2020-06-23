DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INTEGER AUTO_INCREMENT,
product_name VARCHAR(40),
department_name VARCHAR(40),
price INTEGER,
stock_quantity INTEGER,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Shampoo', 'Beauty', 10, 20);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Protein Powder', 'Fitness', 50, 30);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Shaker Bottle', 'Fitness', 10, 40);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Conditioner', 'Beauty', 10, 20);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Computer Monitor', 'Electronics', 150, 10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Macbook Pro', 'Electronics', 2000, 20);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Pet Bed', 'Pets', 60, 5);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Leash', 'Pets', 10, 10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Floor Lamp', 'Home', 40, 20);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ('Love Seat', 'Home', 250, 40);

SELECT *
FROM products
