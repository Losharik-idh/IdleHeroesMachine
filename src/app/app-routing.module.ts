import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthlyComponent } from './pages/monthly/monthly.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MonthlyOrbsComponent } from './pages/monthly-orbs/monthly-orbs.component';
import { AspenDungeonComponent } from './pages/aspen-dungeon/aspen-dungeon.component';
import { LdShardsComponent } from './pages/ld-shards/ld-shards.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'monthly', component: MonthlyComponent },
  { path: 'monthly-orbs', component: MonthlyOrbsComponent },
  { path: 'ld-shards', component: LdShardsComponent },
  { path: 'aspen', component: AspenDungeonComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// IdleHeroesMachine
