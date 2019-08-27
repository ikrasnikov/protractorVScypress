import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DeepComponentComponent } from './deep-component/deep-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DeepComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
