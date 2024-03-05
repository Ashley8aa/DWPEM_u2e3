import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  public createDb(): { heroes: Hero[] } {
    return {
      heroes: [
        { id: 11, name: 'Maruchan' },
        { id: 12, name: 'Atún' },
        { id: 13, name: 'Chetos' },
        { id: 14, name: 'Rufles' },
        { id: 15, name: 'Tortillas' },
        { id: 16, name: 'Cloro' },
        { id: 17, name: 'Cigarros' },
        { id: 18, name: 'Tomate' },
        { id: 19, name: 'Leche' },
        { id: 20, name: 'Coca-Cola' },
      ],
    } as { heroes: Hero[] };
  }


// Anula el método genId para garantizar que un producto siempre tenga una identificación.
  private genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
