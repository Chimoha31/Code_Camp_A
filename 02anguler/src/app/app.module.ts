import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';

@NgModule({
  declarations: [AppComponent, TopbarComponent, ListsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'lists', component: ListsComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
