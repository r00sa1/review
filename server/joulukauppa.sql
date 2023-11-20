DROP TABLE IF EXISTS order_line;

DROP TABLE IF EXISTS customer_order;

DROP TABLE IF EXISTS customer;

DROP TABLE IF EXISTS product;

DROP TABLE IF EXISTS product_category;

CREATE TABLE
    product_category(
        category_name VARCHAR(255) NOT NULL PRIMARY KEY,
        category_description VARCHAR(500)
    );

CREATE TABLE
    product(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        product_name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2),
        image_url VARCHAR(255),
        category VARCHAR(255),
        FOREIGN KEY (category) REFERENCES product_category(category_name)
    );

CREATE TABLE
    customer(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        username VARCHAR(255) UNIQUE,
        pw VARCHAR(255)
    );

CREATE TABLE
    customer_order(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        order_date DATETIME NOT NULL,
        customer_id INT,
        FOREIGN KEY (customer_id) REFERENCES customer(id)
    );

CREATE TABLE
    order_line(
        order_id INT,
        product_id INT,
        quantity INT,
        PRIMARY KEY (order_id, product_id),
        FOREIGN KEY (order_id) REFERENCES customer_order(id),
        FOREIGN KEY (product_id) REFERENCES product(id)
    );

INSERT INTO product_category
VALUES (
        'Joululahjapaperit',
        'Kääräise lahjasi kauniiseen paperiin!'
    ), (
        'Koristenauhat',
        'Koristele pakettisi korealla nauhalla!'
    ), (
        'Joulukortit',
        'Kruunaa paketti kortilla!'
    );

INSERT INTO
    product (product_name, price, category)
VALUES (
        'Karkit ja kukat',
        2.99,
        'Joululahjapaperit'
    ), (
        'Kukat',
        2.50,
        'Joululahjapaperit'
    ), (
        'Kuuset ja pipot',
        3.50,
        'Joululahjapaperit'
    ), (
        'Oranssit paketit',
        2.99,
        'Joululahjapaperit'
    ), (
        'Violetit tähdet',
        1.99,
        'Joululahjapaperit'
    ), (
        'Glitternauha, 3m',
        6.99,
        'Koristenauhat'
    ), (
        'Silkkinauha, 4m',
        4.99,
        'Koristenauhat'
    ), (
        'Villalanka, 10m',
        2.99,
        'Koristenauhat'
    ), (
        'Stay warm, 5kpl',
        2.99,
        'Joulukortit'
    ), (
        'Talo ja puu, 5kpl',
        2.99,
        'Joulukortit'
    ), (
        'Talvimaisema, 5kpl',
        2.99,
        'Joulukortit'
    );