import { Injectable } from '@angular/core';
import { HeroesService } from '../interfaces/HeroesService';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsServiceService implements HeroesService {

  constructor() { }

  isNotAvailableAlias(alias: string): Observable<boolean> {
    const isTrue = ['rgm'].includes(alias); // no esta disponible este alias
    return of(isTrue).pipe(delay(400));
  }
}
