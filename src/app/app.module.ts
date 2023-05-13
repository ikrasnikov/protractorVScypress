import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DeepComponentComponent } from './deep-component/deep-component.component';
import { DeepComponentComponent1 } from './deep-component1/deep-component.component';
import { DeepComponentComponent2 } from './deep-component2/deep-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DeepComponentComponent,
    DeepComponentComponent1,
    DeepComponentComponent2
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
