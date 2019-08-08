import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthlyComponent } from './pages/monthly/monthly.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MonthlyRowComponent } from './components/monthly-row/monthly-row.component';
import { MonthlyGroupComponent } from './components/monthly-group/monthly-group.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyComponent,
    PageHeaderComponent,
    AboutComponent,
    HomeComponent,
    MonthlyRowComponent,
    MonthlyGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
