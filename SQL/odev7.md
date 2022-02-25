# Ödev 7
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev7) tıklayabilirsiniz.

## Sorgu 1
```sql
SELECT rating FROM film
GROUP BY rating;
```

## Sorgu 2
```sql
SELECT replacement_cost, count(*) FROM film
GROUP BY replacement_cost 
HAVING count(*) > 50;
```

## Sorgu 3
```sql
SELECT store_id, count(*) FROM customer
GROUP BY store_id;
```

## Sorgu 4
```sql
SELECT country_id, count(*) FROM city
GROUP BY country_id 
ORDER BY count(*) DESC
LIMIT 1;
```