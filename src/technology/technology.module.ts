import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TechnologyRepository } from './infrastructure/repository/technology.repository';
import { TechnologyService } from './infrastructure/service/technology.service';
import { TechnologiesComponent } from './ui/components/technologies.component';

@NgModule({
  declarations: [TechnologiesComponent],
  imports: [BrowserModule],
  providers: [TechnologyRepository, TechnologyService],
})
export class TechnologyModule { }
