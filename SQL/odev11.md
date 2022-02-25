# Ödev 11
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev11) tıklayabilirsiniz.

## Sorgu 1
```sql
SELECT first_name FROM actor
UNION 
SELECT first_name FROM customer;
```

## Sorgu 2
```sql
SELECT first_name FROM actor
INTERSECT
SELECT first_name FROM customer;
```

## Sorgu 3
```sql
SELECT first_name FROM actor
EXCEPT
SELECT first_name FROM customer;
```

## Sorgu 4
```sql
SELECT first_name FROM actor
UNION ALL
SELECT first_name FROM customer;

SELECT first_name FROM actor
INTERSECT ALL
SELECT first_name FROM customer;

SELECT first_name FROM actor
EXCEPT ALL
SELECT first_name FROM customer;
```