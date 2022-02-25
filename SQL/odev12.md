# Ödev 12
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev12) tıklayabilirsiniz.

## Sorgu 1
```sql
SELECT count(*) FROM film
WHERE length > (SELECT avg(length) FROM film);
```

## Sorgu 2
```sql
SELECT count(*) FROM film
WHERE rental_rate = (SELECT max(rental_rate) FROM film);
```

## Sorgu 3
```sql
SELECT title FROM film
WHERE rental_rate  = (SELECT min(rental_rate) FROM film) AND replacement_cost = (SELECT min(replacement_cost) FROM film);
```

## Sorgu 4
```sql
SELECT c.first_name, c.last_name, count(*) FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
GROUP BY c.customer_id 
ORDER BY count(*) DESC;
```