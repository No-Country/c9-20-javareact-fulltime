INSERT INTO users (user_id, name, last_name, phone, email, password, role)
VALUES (1, 'Julio', 'Álvarez', '+54 999999-9999', 'julion.alvarez@gmail.com',
        '$2a$10$3tiCRGGTSkUqVI6NNg1WBeP7Bs9Zj/O2zToB5Pl5ISw.YBDyrjzHC', 'NORMAL'); /* Password is: 12345678 */


INSERT INTO payment_methods (user_id, type, number, holder, expiration_date, cvv)
VALUES (1, 'CREDIT', '1234 5678 1234 5678', 'Julion Álvarez', '2023-02-14', '123'),
       (1, 'DEBIT', '4321 5678 4321 5678', 'Julion Álvarez', '2023-02-14', '567');