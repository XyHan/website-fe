import { Component, Inject, OnInit } from '@angular/core';
import { TechnologyService, TechnologyServiceInterface } from '../../../infrastructure/service/technology.service';
import { TechnologyInterface } from '../../../domain/model/technology';
import { forkJoin, Observable } from 'rxjs';
import { TechnologyType } from '../../../domain/type/technology.type';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  private _error: Error | null;
  private _isLoading: boolean;
  private _technologies: TechnologyType | null;
  private _technologiesService: TechnologyServiceInterface;

  constructor(@Inject(TechnologyService) experiencesService: TechnologyServiceInterface) {
    this._error = null;
    this._isLoading = true;
    this._technologies = null;
    this._technologiesService = experiencesService;
  }

  ngOnInit() {
    this.getTechnologies();
  }

  private getTechnologies(): void {
    const languages$: Observable<TechnologyInterface[]> = this._technologiesService.listAllLanguages();
    const frameworks$: Observable<TechnologyInterface[]> = this._technologiesService.listAllFrameworks();
    const libraries$: Observable<TechnologyInterface[]> = this._technologiesService.listAllLibraries();
    const databases$: Observable<TechnologyInterface[]> = this._technologiesService.listAllDatabases();
    const systems$: Observable<TechnologyInterface[]> = this._technologiesService.listAllSystems();
    
    forkJoin({
      languages: languages$,
      frameworks: frameworks$,
      libraries: libraries$,
      databases: databases$,
      systems: systems$
    }).subscribe({
      next: (value: TechnologyType) => {
        this._technologies = value;
        this._isLoading = false;
      },
      error: (error: any) => {
        console.error('TechnologiesComponent error: ', error.message);
        this._error = new Error(`Erreur: Impossible de récupérer les technologies`);
      },
      complete: () => {}
    });
  }
  
  get technologies(): TechnologyType | null {
    return this._technologies;
  }
}
