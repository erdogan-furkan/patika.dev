# Ödev 10
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev10) tıklayabilirsiniz.

## Sorgu 1
```sql
SELECT city, country FROM city
LEFT JOIN country ON city.country_id = country.country_id;
```

## Sorgu 2
```sql
SELECT first_name, last_name, payment_id FROM customer
RIGHT JOIN payment ON customer.customer_id = payment.customer_id;
```

## Sorgu 3
```sql
SELECT first_name, last_name, rental_id FROM customer
FULL JOIN rental ON customer.customer_id = rental.customer_id;
```
