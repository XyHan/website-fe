import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './infrastructure/app-routing.module';
import { AppComponent } from './ui/components/app.component';
import { ThemeManager } from './infrastructure/manager/theme.manager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThemeManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
