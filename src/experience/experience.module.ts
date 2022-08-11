import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExperiencesComponent } from './ui/components/experiences.component';
import { ExperiencesRepository } from './infrastructure/repository/experiences.repository';
import { ExperiencesService } from "./infrastructure/service/experiences.service";

@NgModule({
  declarations: [ExperiencesComponent],
  imports: [BrowserModule],
  providers: [ExperiencesRepository, ExperiencesService],
})
export class ExperienceModule { }
