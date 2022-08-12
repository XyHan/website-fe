import { catchError, Observable } from 'rxjs';
import { TechnologyServiceException } from './technology.service.exception';
import { Inject, Injectable } from '@angular/core';
import { TechnologyInterface } from '../../domain/model/technology';
import { TechnologyRepository } from '../repository/technology.repository';
import { TechnologyRepositoryInterface } from '../../domain/repository/technology.repository.interface';

export interface TechnologyServiceInterface {
    listAllTechnologies(): Observable<TechnologyInterface[]>;
}

@Injectable()
export class TechnologyService implements TechnologyServiceInterface {
    private _technologyRepository: TechnologyRepositoryInterface;

    constructor(@Inject(TechnologyRepository) technologyRepository: TechnologyRepositoryInterface) {
        this._technologyRepository = technologyRepository;
    }

    public listAllTechnologies(): Observable<TechnologyInterface[]> {
        return this._technologyRepository
            .listAll()
            .pipe(
                catchError((error) => {
                    throw new TechnologyServiceException(`TechnologyRepository - listAll - ${error.message}`);
                })
            )
        ;
    }
}
