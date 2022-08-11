import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './infrastructure/app-routing.module';
import { AppComponent } from './ui/components/app.component';
import { ThemeManager } from './infrastructure/manager/theme.manager';
import { ExperienceModule } from '../experience/experience.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExperienceModule
  ],
  providers: [ThemeManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
