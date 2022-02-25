# Ödev 1
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev1) tıklayabilirsiniz.

## Sorgu 1
```sql
SELECT title, description FROM film;
```

## Sorgu 2
```sql
SELECT * FROM film
WHERE length >60 AND length <75;
```

## Sorgu 3
```sql
SELECT * FROM film
WHERE rental_rate = 0.99 AND replacement_cost = 12.99 OR replacement_cost = 28.99;
```

## Sorgu 4
```sql
SELECT last_name FROM customer
WHERE first_name = 'Mary'; --Output: Smith
```

## Sorgu 5
```sql
SELECT * FROM film
WHERE length <=50 AND NOT (rental_rate = 2.99 OR rental_rate = 4.99);
```
