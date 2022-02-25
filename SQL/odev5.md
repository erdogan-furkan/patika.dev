# Ödev 5
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev5) tıklayabilirsiniz.

## Sorgu 1
```sql
SELECT title FROM film
WHERE title LIKE ('%n')
ORDER BY length DESC 
LIMIT 5;
```

## Sorgu 2
```sql
SELECT title FROM film
WHERE title LIKE ('%n')
ORDER BY length
OFFSET 5
LIMIT 5;
```

## Sorgu 3
```sql
SELECT * FROM customer
WHERE store_id = 1
ORDER BY last_name DESC 
LIMIT 4;
```
