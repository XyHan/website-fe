import { Component, Inject, OnInit } from '@angular/core';
import { TechnologyService, TechnologyServiceInterface } from '../../infrastructure/service/technology.service';
import { TechnologyInterface } from '../../domain/model/technology';

@Component({
  selector: 'app-experience',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  private _error: Error | null;
  private _isLoading: boolean;
  private _technologies: TechnologyInterface[];
  private _technologiesService: TechnologyServiceInterface;

  constructor(@Inject(TechnologyService) experiencesService: TechnologyServiceInterface) {
    this._error = null;
    this._isLoading = true;
    this._technologies = [];
    this._technologiesService = experiencesService;
  }

  ngOnInit() {
    this.getTechnologies();
  }

  private getTechnologies(): void {
    this._technologiesService
      .listAllTechnologies()
      .subscribe({
        next: (technologies: TechnologyInterface[]) => {
          this._technologies = technologies;
          this._isLoading = false;
        },
        error: (error: any) => {
          console.error('TechnologiesComponent error: ', error.message);
          this._error = new Error(`Erreur: Impossible de récupérer les technologies`);
        },
        complete: () => {}
      });
  }

  public getLanguages(): TechnologyInterface[] {
    return this._technologies.filter((technology: TechnologyInterface) => technology.type === 'language');
  }

  public getFrameworks(): TechnologyInterface[] {
    return this._technologies.filter((technology: TechnologyInterface) => technology.type === 'framework');
  }

  public getOthers(): TechnologyInterface[] {
    return this._technologies.filter((technology: TechnologyInterface) => technology.type === 'other');
  }
}
