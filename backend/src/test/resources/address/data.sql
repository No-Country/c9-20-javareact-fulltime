INSERT INTO users (user_id, dni, name, last_name, phone, email, password, role)
VALUES (1, '12345678A', 'Julio', 'Álvarez', '+54 999999-9999', 'julion.alvarez@gmail.com',
        '$2a$10$3tiCRGGTSkUqVI6NNg1WBeP7Bs9Zj/O2zToB5Pl5ISw.YBDyrjzHC', 'NORMAL'); /* Password is: 12345678 */

INSERT INTO addresses (user_id, street, number, city, state, country, zip_code)
VALUES (1, 'Street 1', '540', 'Mérida', 'Yucatán', 'México', '97000');