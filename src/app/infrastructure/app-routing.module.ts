import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from '../../experience/ui/components/experiences.component';
import { TechnologiesComponent } from '../../technology/ui/components/technologies/technologies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'experiences',
    pathMatch: 'full'
  },
  {
    path: 'experiences',
    component: ExperiencesComponent,
  },
  {
    path: 'technos',
    component: TechnologiesComponent,
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
