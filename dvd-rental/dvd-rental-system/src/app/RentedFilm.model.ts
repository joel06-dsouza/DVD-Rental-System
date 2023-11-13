export class RentedFilm {
    customer_id: number;
    payment_id: number;
    film_id: number;
    film_title: string;
    staff_id: number;
    staff_name: string;
    rental_id: number;
    rental_date: Date;
    return_date: Date;
    amount: number;
    payment_date: Date;
    store_id: number;
    category_name: string;
  
    constructor(
      customer_id: number,
      payment_id: number,
      film_id: number,
      film_title: string,
      staff_id: number,
      staff_name: string,
      rental_id: number,
      rental_date: Date,
      return_date: Date,
      amount: number,
      payment_date: Date,
      store_id: number,
      category_name: string
    ) {
      this.customer_id = customer_id;
      this.payment_id = payment_id;
      this.film_id = film_id;
      this.film_title = film_title;
      this.staff_id = staff_id;
      this.staff_name = staff_name;
      this.rental_id = rental_id;
      this.rental_date = rental_date;
      this.return_date = return_date;
      this.amount = amount;
      this.payment_date = payment_date;
      this.store_id = store_id;
      this.category_name = category_name;
    }
  }
  