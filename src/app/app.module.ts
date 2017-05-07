import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }          from '@angular/forms';

import { AppComponent }           from './app.component';
import { DiaryComponent }         from './diary.component';
import { HistoryComponent }       from './history.component';
import { CompeComponent }         from './compe.component';


const appRoutes: Routes = [
  { path: 'diary',          component: DiaryComponent },
  { path: 'history',        component: HistoryComponent },
  { path: 'compe',          component: CompeComponent },

  { path: '', redirectTo: '/diary', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    DiaryComponent,
    HistoryComponent,
    CompeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }