# Ödev 8
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev8) tıklayabilirsiniz.

## Sorgu 1
```sql
CREATE TABLE employee (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	birthday DATE,
	email VARCHAR(100)
);
```

## Sorgu 2
```sql
insert into employee (name, birthday, email) values ('Meggy Klos', '1969-06-03', 'mklos1@auda.org.au');
insert into employee (name, birthday, email) values ('Whit Mattiazzi', '1961-01-13', 'wmattiazzi2@icio.us');
                                                    ...
                                                    ...
insert into employee (name, birthday, email) values ('Ted Bernollet', '1977-04-16', 'tbernollet1b@cdc.gov');
insert into employee (name, birthday, email) values ('Drusi Grinin', '1986-06-11', 'dgrinin1c@slideshare.net');
```

## Sorgu 3
```sql
UPDATE employee
SET name = 'Roger Waters'
WHERE id = 10;

UPDATE employee
SET name = 'David Gilmour'
WHERE birthday = '1964-08-21';

UPDATE employee
SET email = 'example@gmail.com'
WHERE email LIKE 'a%';

UPDATE employee
SET name = 'Fake Name',
	email = 'fakemail@gmail.com'
WHERE id > 40;

UPDATE employee
SET birthday = NULL 
WHERE name LIKE ('%Name');
```

## Sorgu 4
```sql
DELETE FROM employee
WHERE id = 10;

DELETE FROM employee
WHERE birthday = '1964-08-21';

DELETE FROM employee
WHERE email LIKE 'b%';

DELETE FROM employee
WHERE id BETWEEN 40 AND 50;

DELETE FROM employee
WHERE name LIKE ('%e');
```