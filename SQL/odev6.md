# Ödev 6
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev6) tıklayabilirsiniz.

## Sorgu 1
```sql
SELECT avg(rental_rate) FROM film;
```

## Sorgu 2
```sql
SELECT count(*) FROM film
WHERE title LIKE ('C%');
```

## Sorgu 3
```sql
SELECT max(length) FROM film
WHERE rental_rate = 0.99;
```

## Sorgu 4
```sql
SELECT count(DISTINCT replacement_cost) FROM film
WHERE length > 150;
```