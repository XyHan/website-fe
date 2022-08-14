import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TechnologyRepositoryInterface } from '../../domain/repository/technology.repository.interface';
import { Technology, TechnologyInterface } from '../../domain/model/technology';

@Injectable()
export class TechnologyRepository implements TechnologyRepositoryInterface {
    public listAllLanguages(): Observable<TechnologyInterface[]> {
        return of([
            new Technology('PHP'),
            new Technology('Typescript'),
            new Technology('JS'),
            new Technology('HTML5'),
            new Technology('CSS3'),
        ]);
    }

    public listAllDatabases(): Observable<TechnologyInterface[]> {
        return of([
            new Technology('MySQL'),
            new Technology('ElasticSearch'),
        ]);
    }

    public listAllFrameworks(): Observable<TechnologyInterface[]> {
        return of([
            new Technology('Symfony'),
            new Technology('NestJS'),
            new Technology('VueJS'),
            new Technology('NuxtJS'),
            new Technology('Angular'),
        ]);
    }

    public listAllLibraries(): Observable<TechnologyInterface[]> {
        return of([
            new Technology('PhpUnit'),
            new Technology('Behat'),
            new Technology('Jest'),
            new Technology('Capistrano'),
            new Technology('GraphQL'),
            new Technology('RabbitMQ'),
            new Technology('Docker'),
            new Technology('Redis'),
            new Technology('Varnish'),
            new Technology('Git'),
        ]);
    }

    public listAllSystems(): Observable<TechnologyInterface[]> {
        return of([
            new Technology('Ubuntu'),
            new Technology('Debian'),
            new Technology('Windows'),
            new Technology('MacOS'),
        ]);
    }
}
