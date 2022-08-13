import { ExperienceRepositoryInterface } from '../../domain/repository/experience.repository.interface';
import { catchError, Observable } from 'rxjs';
import { ExperienceInterface } from '../../domain/model/experience';
import { ExperienceServiceException } from './experience.service.exception';
import { Inject, Injectable } from '@angular/core';
import { ExperienceRepository } from '../repository/experience.repository';

export interface ExperiencesServiceInterface {
  listAllJobs(): Observable<ExperienceInterface[]>;
  listAllEducations(): Observable<ExperienceInterface[]>;
}

@Injectable()
export class ExperienceService implements ExperiencesServiceInterface {
  private _experiencesRepository: ExperienceRepositoryInterface;

  constructor(@Inject(ExperienceRepository) experiencesRepository: ExperienceRepositoryInterface) {
    this._experiencesRepository = experiencesRepository;
  }

  public listAllJobs(): Observable<ExperienceInterface[]> {
    return this._experiencesRepository
      .listAllJobs()
      .pipe(
        catchError((error) => {
            throw new ExperienceServiceException(`ExperiencesRepository - listAllJobs - ${error.message}`);
        })
      )
    ;
  }

  public listAllEducations(): Observable<ExperienceInterface[]> {
    return this._experiencesRepository
      .listAllEducations()
      .pipe(
        catchError((error) => {
          throw new ExperienceServiceException(`ExperiencesRepository - listAllEducations - ${error.message}`);
        })
      )
      ;
  }
}
