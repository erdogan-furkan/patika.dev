# Ödev 4
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev4) tıklayabilirsiniz.

## Sorgu 1
```sql
SELECT DISTINCT replacement_cost FROM film;
```

## Sorgu 2
```sql
SELECT count(DISTINCT replacement_cost) FROM film;
```

## Sorgu 3
```sql
SELECT count(*) FROM film
WHERE title LIKE ('T%') AND rating ='G';
```

## Sorgu 4
```sql
SELECT count(*) FROM country
WHERE char_length(country) = 5;
```

## Sorgu 5
```sql
SELECT count(*) FROM city
WHERE city ILIKE ('%r');
```
