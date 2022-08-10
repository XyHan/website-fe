import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExperiencesComponent } from "./ui/components/experiences.component";

@NgModule({
  declarations: [
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ExperiencesComponent]
})
export class ExperienceModule { }
