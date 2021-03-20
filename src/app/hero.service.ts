// This is a service for fetching heroes data.
import { Injectable } from '@angular/core';
// We use Observables for fetching data Asychronously.
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// We register the service to a provider before injecting it to a Component
@Injectable({
  // It is provided in the root directory hence any class can inject this service and use it.
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  constructor(private messageService: MessageService) { }
}
