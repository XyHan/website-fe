import { ExperienceRepositoryInterface } from '../../domain/repository/experience.repository.interface';
import { catchError, Observable } from 'rxjs';
import { Experience } from '../../domain/model/experience';
import { ExperienceServiceException } from './experience.service.exception';
import { Inject, Injectable } from '@angular/core';
import { ExperienceRepository } from '../repository/experience.repository';

export interface ExperiencesServiceInterface {
  listAllExperiences(): Observable<Experience[]>;
}

@Injectable()
export class ExperienceService implements ExperiencesServiceInterface {
  private _experiencesRepository: ExperienceRepositoryInterface;

  constructor(@Inject(ExperienceRepository) experiencesRepository: ExperienceRepositoryInterface) {
    this._experiencesRepository = experiencesRepository;
  }

  public listAllExperiences(): Observable<Experience[]> {
    return this._experiencesRepository
      .listAll()
      .pipe(
        catchError((error) => {
            throw new ExperienceServiceException(`ExperiencesRepository - listAll - ${error.message}`);
        })
      )
    ;
  }
}
