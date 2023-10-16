// shared-film.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedFilmService {
  private filmDataSubject = new BehaviorSubject<any[]>([]);
  filmData$ = this.filmDataSubject.asObservable();

  updateFilmData(data: any[]) {
    this.filmDataSubject.next(data);
  }
}
