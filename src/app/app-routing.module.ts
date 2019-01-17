import { AboutComponent } from './core/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SkiresortMainComponent } from './mount/skiresort-main/skiresort-main.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'skiresorts/:id', component: SkiresortMainComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
