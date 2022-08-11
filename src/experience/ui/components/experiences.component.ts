import { Component, Inject, OnInit } from '@angular/core';
import { Experiences } from '../../domain/model/experiences';
import { ExperiencesService, ExperiencesServiceInterface } from '../../infrastructure/service/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  private _error: Error | null;
  private _isLoading: boolean;
  private _experiences: Experiences[];
  private _experiencesService: ExperiencesServiceInterface;

  constructor(@Inject(ExperiencesService) experiencesService: ExperiencesServiceInterface) {
    this._error = null;
    this._isLoading = true;
    this._experiences = [];
    this._experiencesService = experiencesService;
  }

  ngOnInit() {
    this.getExperiences();
  }

  private getExperiences(): void {
    this._experiencesService
      .listAllExperiences()
      .subscribe({
        next: (experiences: Experiences[]) => {
          this._experiences = experiences;
          this._isLoading = false;
        },
        error: (error: any) => {
          console.error('ExperiencesComponent error: ', error.message);
          this._error = new Error(`Erreur: Impossible de récupérer les expériences`);
        },
        complete: () => {}
      });
  }


  get experiences(): Experiences[] {
    return this._experiences;
  }
}
