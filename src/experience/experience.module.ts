import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExperiencesComponent } from './ui/components/experiences.component';
import { ExperienceRepository } from './infrastructure/repository/experience.repository';
import { ExperienceService } from "./infrastructure/service/experience.service";

@NgModule({
  declarations: [ExperiencesComponent],
  imports: [BrowserModule],
  providers: [ExperienceRepository, ExperienceService],
})
export class ExperienceModule { }
