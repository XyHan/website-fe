import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TechnologyRepositoryInterface } from '../../domain/repository/technology.repository.interface';
import { Technology, TechnologyInterface } from '../../domain/model/technology';

@Injectable()
export class TechnologyRepository implements TechnologyRepositoryInterface {
    public listAll(): Observable<TechnologyInterface[]> {
        return of([
            new Technology(
              'PHP',
              'php.svg',
              'language'
            ),
            new Technology(
              'Typescript',
              'typescript.png',
              'language'
            ),
            new Technology(
              'JS',
              'js.png',
              'language'
            ),
            new Technology(
              'Symfony',
              'symfony.png',
              'framework'
            ),
            new Technology(
              'RabbitMQ',
              'php.svg',
              'other'
            ),
        ]);
    }
}
