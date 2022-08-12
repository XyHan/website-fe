import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './infrastructure/app-routing.module';
import { AppComponent } from './ui/components/app.component';
import { ThemeManager } from './infrastructure/manager/theme.manager';
import { ExperienceModule } from '../experience/experience.module';
import { TechnologyModule } from '../technology/technology.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExperienceModule,
    TechnologyModule
  ],
  providers: [ThemeManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
