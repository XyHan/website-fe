import { ExperiencesRepositoryInterface } from '../../domain/repository/experiences.repository.interface';
import { catchError, Observable } from 'rxjs';
import { Experiences } from '../../domain/model/experiences';
import { ExperiencesServiceException } from './experiences.service.exception';
import { Inject, Injectable } from '@angular/core';
import { ExperiencesRepository } from '../repository/experiences.repository';

export interface ExperiencesServiceInterface {
    listAllExperiences(): Observable<Experiences[]>;
}

@Injectable()
export class ExperiencesService implements ExperiencesServiceInterface {
    private _experiencesRepository: ExperiencesRepositoryInterface;

    constructor(@Inject(ExperiencesRepository) experiencesRepository: ExperiencesRepositoryInterface) {
        this._experiencesRepository = experiencesRepository;
    }

    public listAllExperiences(): Observable<Experiences[]> {
        return this._experiencesRepository
            .listAll()
            .pipe(
                catchError((error) => {
                    throw new ExperiencesServiceException(`ExperiencesRepository - listAll - ${error.message}`);
                })
            )
        ;
    }
}
