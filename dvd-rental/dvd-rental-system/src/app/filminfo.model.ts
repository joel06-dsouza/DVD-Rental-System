
// film-info.model.ts

export interface FilmInfo {
    film_id: number;
    id: number;
    title: string;
    description: string;
    category_name: string;
    language_name: string;
    length: number;
    rating: string; // You can adjust the type as needed
    rental_duration: number;
    rental_rate: number;
    release_year: number;
    store_id: number;
  }
  