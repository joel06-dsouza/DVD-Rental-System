import { Timestamp } from "rxjs";

export class PaymentInfo {
    customer_id: number;
    payment_id: number;
    film_id: number;
    film_title: string;
    staff_id: number;
    staff_name: string;
    rental_id: number;
    rental_date: Timestamp<Date>;
    return_date: Timestamp<Date>;
    amount: number;
    payment_date: Timestamp<Date>;
    store_id: number;
    store_address: string;
}
