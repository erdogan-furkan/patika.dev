# Ödev 3
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev3) tıklayabilirsiniz.

## Sorgu 1
```sql
SELECT country FROM country
WHERE country LIKE ('A%a');
```

## Sorgu 2
```sql
SELECT country FROM country
WHERE country LIKE ('_____%n');
```

### Sorgu 2 Alternatif
```sql
SELECT country FROM country
WHERE country LIKE ('%n') AND length(country) >= 6;
```

## Sorgu 3
```sql
SELECT title FROM film
WHERE title ILIKE ('%t%t%t%t%');
```

## Sorgu 4
```sql
SELECT * FROM film
WHERE title LIKE ('C%') AND length >90 AND rental_rate = 2.99;
```