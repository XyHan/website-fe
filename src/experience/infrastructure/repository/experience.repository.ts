import { ExperienceRepositoryInterface } from '../../domain/repository/experience.repository.interface';
import { Observable, of } from 'rxjs';
import { ExperienceInterface } from '../../domain/model/experience';
import { Injectable } from '@angular/core';
import { Job } from '../../domain/model/job';
import { Education } from '../../domain/model/education';

@Injectable()
export class ExperienceRepository implements ExperienceRepositoryInterface {
    public listAllJobs(): Observable<ExperienceInterface[]> {
        return of([
            new Job(
              'Développeur web senior',
              'Leaders League',
              new Date(),
              new Date(),
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue risus nunc, ac accumsan dolor fringilla in. In urna erat, accumsan sed felis a, pretium dapibus ex. Donec non arcu sed massa fringilla bibendum at sed lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id tristique eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas purus diam, a facilisis dolor accumsan ac. Nulla eget metus eget metus pharetra dignissim vitae quis libero. Nunc imperdiet auctor eros, non pharetra eros hendrerit vel. Aenean euismod neque tortor. In commodo rhoncus leo non tincidunt. Pellentesque egestas, nunc nec fermentum iaculis, elit orci pharetra risus, a porta turpis orci bibendum erat. Curabitur vel lacus efficitur, iaculis tortor eu, convallis nisl.'
            ),
            new Job(
              'Développeur magento junior',
              'Squad - X2I',
              new Date(),
              new Date(),
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue risus nunc, ac accumsan dolor fringilla in. In urna erat, accumsan sed felis a, pretium dapibus ex. Donec non arcu sed massa fringilla bibendum at sed lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id tristique eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas purus diam, a facilisis dolor accumsan ac. Nulla eget metus eget metus pharetra dignissim vitae quis libero. Nunc imperdiet auctor eros, non pharetra eros hendrerit vel. Aenean euismod neque tortor. In commodo rhoncus leo non tincidunt. Pellentesque egestas, nunc nec fermentum iaculis, elit orci pharetra risus, a porta turpis orci bibendum erat. Curabitur vel lacus efficitur, iaculis tortor eu, convallis nisl.'
            ),
            new Job(
              'Développeur web junior',
              'Afnic',
              new Date(),
              null,
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue risus nunc, ac accumsan dolor fringilla in. In urna erat, accumsan sed felis a, pretium dapibus ex. Donec non arcu sed massa fringilla bibendum at sed lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id tristique eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas purus diam, a facilisis dolor accumsan ac. Nulla eget metus eget metus pharetra dignissim vitae quis libero. Nunc imperdiet auctor eros, non pharetra eros hendrerit vel. Aenean euismod neque tortor. In commodo rhoncus leo non tincidunt. Pellentesque egestas, nunc nec fermentum iaculis, elit orci pharetra risus, a porta turpis orci bibendum erat. Curabitur vel lacus efficitur, iaculis tortor eu, convallis nisl.'
            ),
        ]);
    }

    public listAllEducations(): Observable<ExperienceInterface[]> {
        return of([
            new Education(
              'Master 1',
              'IPSSI',
              new Date(),
              null,
              ''
            ),
            new Education(
              'Bts SIO',
              'Ecole de BTS',
              new Date(),
              null,
              ''
            ),
            new Education(
              'Bac STG',
              'Lycée Descartes',
              new Date(),
              null,
              ''
            ),
        ]);
    }
}
