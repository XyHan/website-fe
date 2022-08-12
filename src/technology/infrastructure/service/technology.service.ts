import { catchError, Observable } from 'rxjs';
import { TechnologyServiceException } from './technology.service.exception';
import { Inject, Injectable } from '@angular/core';
import { TechnologyInterface } from '../../domain/model/technology';
import { TechnologyRepository } from '../repository/technology.repository';
import { TechnologyRepositoryInterface } from '../../domain/repository/technology.repository.interface';

export interface TechnologyServiceInterface {
  listAllLanguages(): Observable<TechnologyInterface[]>;
  listAllFrameworks(): Observable<TechnologyInterface[]>;
  listAllLibraries(): Observable<TechnologyInterface[]>;
  listAllDatabases(): Observable<TechnologyInterface[]>;
  listAllSystems(): Observable<TechnologyInterface[]>;
}

@Injectable()
export class TechnologyService implements TechnologyServiceInterface {
  private _technologyRepository: TechnologyRepositoryInterface;

  constructor(@Inject(TechnologyRepository) technologyRepository: TechnologyRepositoryInterface) {
    this._technologyRepository = technologyRepository;
  }

  public listAllLanguages(): Observable<TechnologyInterface[]> {
    return this._technologyRepository
      .listAllLanguages()
      .pipe(
        catchError((error) => {
          throw new TechnologyServiceException(`TechnologyRepository - listAllLanguages - ${error.message}`);
        })
      )
    ;
  }
  
  public listAllFrameworks(): Observable<TechnologyInterface[]> {
    return this._technologyRepository
      .listAllFrameworks()
      .pipe(
        catchError((error) => {
          throw new TechnologyServiceException(`TechnologyRepository - listAllFrameworks - ${error.message}`);
        })
      )
    ;
  }
  
  public listAllLibraries(): Observable<TechnologyInterface[]> {
    return this._technologyRepository
      .listAllLibraries()
      .pipe(
        catchError((error) => {
          throw new TechnologyServiceException(`TechnologyRepository - listAllLibraries - ${error.message}`);
        })
      )
    ;
  }
  
  public listAllDatabases(): Observable<TechnologyInterface[]> {
    return this._technologyRepository
      .listAllDatabases()
      .pipe(
        catchError((error) => {
          throw new TechnologyServiceException(`TechnologyRepository - listAllDatabases - ${error.message}`);
        })
      )
    ;
  }
  
  public listAllSystems(): Observable<TechnologyInterface[]> {
    return this._technologyRepository
      .listAllSystems()
      .pipe(
        catchError((error) => {
          throw new TechnologyServiceException(`TechnologyRepository - listAllSystems - ${error.message}`);
        })
      )
    ;
  }
}
