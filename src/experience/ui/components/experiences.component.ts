import { Component, Inject, OnInit } from '@angular/core';
import { Experience, ExperienceInterface } from '../../domain/model/experience';
import { ExperienceService, ExperiencesServiceInterface } from '../../infrastructure/service/experience.service';
import { forkJoin, Observable } from 'rxjs';
import { ExperienceType } from '../../domain/type/experience.type';

@Component({
  selector: 'app-experience',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  private _error: Error | null;
  private _isLoading: boolean;
  private _experiences: ExperienceType | null;
  private _experiencesService: ExperiencesServiceInterface;

  constructor(@Inject(ExperienceService) experiencesService: ExperiencesServiceInterface) {
    this._error = null;
    this._isLoading = true;
    this._experiences = null;
    this._experiencesService = experiencesService;
  }

  ngOnInit() {
    this.getExperiences();
  }

  private getExperiences(): void {
    const jobs$: Observable<ExperienceInterface[]> = this._experiencesService.listAllJobs();
    const educations$: Observable<ExperienceInterface[]> = this._experiencesService.listAllEducations();

    forkJoin({
      jobs: jobs$,
      educations: educations$
    }).subscribe({
      next: (value: ExperienceType) => {
        this._experiences = value;
        this._isLoading = false;
      },
      error: (error: any) => {
        console.error('ExperiencesComponent error: ', error.message);
        this._error = new Error(`Erreur: Impossible de récupérer les expériences`);
      },
      complete: () => {}
    });
  }


  get experiences(): ExperienceType | null {
    return this._experiences;
  }
}
