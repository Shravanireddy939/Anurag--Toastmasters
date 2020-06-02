import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtiquetteComponent } from './etiquette/etiquette.component';
import { HomeComponent } from './home/home.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ExecutivecommitteeComponent } from './executivecommittee/executivecommittee.component';
import { ResourcesComponent } from './resources/resources.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
    {path:'etiquette',component:EtiquetteComponent},
    {path:'achievements',component:AchievementsComponent},
    {path:'executivecommittee',component:ExecutivecommitteeComponent},
    {path:'resources',component:ResourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
