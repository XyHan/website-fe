import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TechnologyRepositoryInterface } from '../../domain/repository/technology.repository.interface';
import { TechnologyInterface } from '../../domain/model/technology';
import { Language } from '../../domain/model/language';
import { Framework } from '../../domain/model/framework';
import { System } from '../../domain/model/system';
import { Database } from '../../domain/model/database';
import { Library } from '../../domain/model/library';

@Injectable()
export class TechnologyRepository implements TechnologyRepositoryInterface {
    public listAllLanguages(): Observable<TechnologyInterface[]> {
        return of([
            new Language('PHP', 'typescript.png'),
            new Language('Typescript', 'typescript.png'),
            new Language('JS', 'js.png'),
            new Language('HTML5', 'js.png'),
            new Language('CSS3', 'js.png'),
        ]);
    }

    public listAllDatabases(): Observable<TechnologyInterface[]> {
        return of([
            new Database('MySQL', 'js.png'),
            new Database('ElasticSearch', 'typescript.png'),
        ]);
    }

    public listAllFrameworks(): Observable<TechnologyInterface[]> {
        return of([
            new Framework('Symfony', 'symfony.png'),
            new Framework('NestJS', 'symfony.png'),
            new Framework('VueJS', 'symfony.png'),
            new Framework('NuxtJS', 'symfony.png'),
        ]);
    }

    public listAllLibraries(): Observable<TechnologyInterface[]> {
        return of([
            new Library('PhpUnit', 'typescript.png'),
            new Library('Behat', 'typescript.png'),
            new Library('Jest', 'typescript.png'),
            new Library('Capistrano', 'typescript.png'),
            new Library('GraphQL', 'typescript.png'),
            new Library('RabbitMQ', 'typescript.png'),
            new Library('Docker', 'typescript.png'),
            new Library('Redis', 'typescript.png'),
            new Library('Varnish', 'typescript.png'),
            new System('Git', 'typescript.png'),
        ]);
    }

    public listAllSystems(): Observable<TechnologyInterface[]> {
        return of([
            new System('Ubuntu', 'typescript.png'),
            new System('Debian', 'typescript.png'),
            new System('Windows', 'typescript.png'),
            new System('MacOS', 'typescript.png'),
        ]);
    }
}
