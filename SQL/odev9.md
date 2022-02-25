# Ödev 9
Ödeve ilişkin adrese gitmek için [buraya](https://app.patika.dev/moduller/sql/Odev9) tıklayabilirsiniz.

## Sorgu 1
```sql
SELECT city, country FROM city
INNER JOIN country ON city.country_id = country.country_id ;
```

## Sorgu 2
```sql
SELECT first_name, last_name, payment_id FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id ;
```

## Sorgu 3
```sql
SELECT first_name, last_name, rental_id FROM customer
INNER JOIN rental ON customer.customer_id = rental.customer_id ;
```
