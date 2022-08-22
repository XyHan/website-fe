import { Component, Inject, OnInit } from '@angular/core';
import { TechnologyService, TechnologyServiceInterface } from '../../../infrastructure/service/technology.service';
import { TechnologyInterface } from '../../../domain/model/technology';
import { forkJoin, Observable } from 'rxjs';
import { TechnologyType } from '../../../domain/type/technology.type';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  private _error: Error | null;
  private _isLoading: boolean;
  private _technologies: TechnologyType | null;
  private readonly _technologiesService: TechnologyServiceInterface;
  private readonly _metaService: Meta;
  private readonly _titleService: Title;

  constructor(
    @Inject(TechnologyService) experiencesService: TechnologyServiceInterface,
    @Inject(Meta) metaService: Meta,
    @Inject(Title) titleService: Title,
  ) {
    this._error = null;
    this._isLoading = true;
    this._technologies = null;
    this._technologiesService = experiencesService;
    this._metaService = metaService;
    this._titleService = titleService;
  }

  ngOnInit() {
    this._titleService.setTitle('Robin CHEVALIER - Technos');
    this._metaService.updateTag({
      name: 'description',
      content: 'Robin CHEVALIER - Technos',
    });
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
